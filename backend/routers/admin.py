from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import func, desc
from typing import List
from database import get_db
from models import User, Product, Order, OrderItem, Category
from schemas import (
    UserResponse, 
    ProductCreate, 
    ProductUpdate, 
    ProductResponse,
    CategoryCreate, 
    CategoryUpdate,
    OrderResponse
)
from auth import get_admin_user
from datetime import datetime, timedelta

router = APIRouter()

# User management
@router.get("/users", response_model=List[UserResponse])
async def get_all_users(
    current_user: User = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """Get all users (admin only)."""
    users = db.query(User).all()
    return users

@router.put("/users/{user_id}/toggle-active")
async def toggle_user_active(
    user_id: int,
    current_user: User = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """Toggle user active status (admin only)."""
    user = db.query(User).filter(User.id == user_id).first()
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    user.is_active = not user.is_active
    db.commit()
    
    return {"message": f"User {'activated' if user.is_active else 'deactivated'}"}

# Product management
@router.get("/products", response_model=List[ProductResponse])
async def get_all_products_admin(
    current_user: User = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """Get all products (admin only)."""
    products = db.query(Product).all()
    return products

@router.post("/products", response_model=ProductCreate)
async def create_product_admin(
    product: ProductCreate,
    current_user: User = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """Create a new product (admin only)."""
    db_product = Product(**product.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

@router.put("/products/{product_id}")
async def update_product_admin(
    product_id: int,
    product_update: ProductUpdate,
    current_user: User = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """Update a product (admin only)."""
    product = db.query(Product).filter(Product.id == product_id).first()
    
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    update_data = product_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(product, field, value)
    
    db.commit()
    db.refresh(product)
    return product

@router.delete("/products/{product_id}")
async def delete_product_admin(
    product_id: int,
    current_user: User = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """Delete a product (admin only)."""
    product = db.query(Product).filter(Product.id == product_id).first()
    
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    # Soft delete
    product.is_active = False
    db.commit()
    
    return {"message": "Product deleted successfully"}

# Category management
@router.post("/categories")
async def create_category_admin(
    category: CategoryCreate,
    current_user: User = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """Create a new category (admin only)."""
    db_category = Category(**category.dict())
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category

@router.put("/categories/{category_id}")
async def update_category_admin(
    category_id: int,
    category_update: CategoryUpdate,
    current_user: User = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """Update a category (admin only)."""
    category = db.query(Category).filter(Category.id == category_id).first()
    
    if not category:
        raise HTTPException(status_code=404, detail="Category not found")
    
    update_data = category_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(category, field, value)
    
    db.commit()
    db.refresh(category)
    return category

@router.delete("/categories/{category_id}")
async def delete_category_admin(
    category_id: int,
    current_user: User = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """Delete a category (admin only)."""
    category = db.query(Category).filter(Category.id == category_id).first()
    
    if not category:
        raise HTTPException(status_code=404, detail="Category not found")
    
    # Check if category has products
    products_count = db.query(Product).filter(Product.category_id == category_id).count()
    if products_count > 0:
        raise HTTPException(
            status_code=400, 
            detail=f"Cannot delete category with {products_count} products"
        )
    
    category.is_active = False
    db.commit()
    
    return {"message": "Category deleted successfully"}

# Order management
@router.get("/orders", response_model=List[OrderResponse])
async def get_all_orders_admin(
    current_user: User = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """Get all orders (admin only)."""
    orders = db.query(Order).order_by(Order.created_at.desc()).all()
    return orders

@router.put("/orders/{order_id}/status")
async def update_order_status(
    order_id: int,
    status: str,
    current_user: User = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """Update order status (admin only)."""
    order = db.query(Order).filter(Order.id == order_id).first()
    
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    valid_statuses = ["pending", "processing", "shipped", "delivered", "cancelled"]
    if status not in valid_statuses:
        raise HTTPException(
            status_code=400, 
            detail=f"Invalid status. Must be one of: {valid_statuses}"
        )
    
    order.status = status
    db.commit()
    
    return {"message": f"Order status updated to {status}"}

# Analytics
@router.get("/analytics/overview")
async def get_analytics_overview(
    current_user: User = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """Get analytics overview (admin only)."""
    # Total users
    total_users = db.query(User).count()
    active_users = db.query(User).filter(User.is_active == True).count()
    
    # Total products
    total_products = db.query(Product).count()
    active_products = db.query(Product).filter(Product.is_active == True).count()
    
    # Total orders
    total_orders = db.query(Order).count()
    
    # Revenue
    total_revenue = db.query(func.sum(Order.total_amount)).filter(
        Order.payment_status == "completed"
    ).scalar() or 0
    
    # Recent orders (last 30 days)
    thirty_days_ago = datetime.utcnow() - timedelta(days=30)
    recent_orders = db.query(Order).filter(
        Order.created_at >= thirty_days_ago
    ).count()
    
    return {
        "users": {
            "total": total_users,
            "active": active_users
        },
        "products": {
            "total": total_products,
            "active": active_products
        },
        "orders": {
            "total": total_orders,
            "recent_30_days": recent_orders
        },
        "revenue": {
            "total": float(total_revenue)
        }
    }

@router.get("/analytics/top-products")
async def get_top_products(
    limit: int = 10,
    current_user: User = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """Get top-selling products (admin only)."""
    top_products = db.query(
        Product.name,
        func.sum(OrderItem.quantity).label('total_sold'),
        func.sum(OrderItem.quantity * OrderItem.price).label('total_revenue')
    ).join(OrderItem, Product.id == OrderItem.product_id)\
     .join(Order, OrderItem.order_id == Order.id)\
     .filter(Order.payment_status == "completed")\
     .group_by(Product.id, Product.name)\
     .order_by(desc('total_sold'))\
     .limit(limit)\
     .all()
    
    return [
        {
            "name": product.name,
            "total_sold": product.total_sold,
            "total_revenue": float(product.total_revenue)
        }
        for product in top_products
    ]
