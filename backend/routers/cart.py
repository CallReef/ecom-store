from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import and_
from typing import List
from database import get_db
from models import CartItem, Product, User
from schemas import CartItemCreate, CartItemResponse, CartItemUpdate
from auth import get_current_active_user

router = APIRouter()

@router.get("/", response_model=List[CartItemResponse])
async def get_cart(
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    """Get current user's cart items."""
    cart_items = db.query(CartItem).filter(CartItem.user_id == current_user.id).all()
    return cart_items

@router.post("/add", response_model=CartItemResponse)
async def add_to_cart(
    cart_item: CartItemCreate,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    """Add a product to the cart."""
    # Check if product exists and is active
    product = db.query(Product).filter(
        and_(Product.id == cart_item.product_id, Product.is_active == True)
    ).first()
    
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    # Check if product is in stock
    if product.stock_quantity < cart_item.quantity:
        raise HTTPException(
            status_code=400, 
            detail=f"Not enough stock. Available: {product.stock_quantity}"
        )
    
    # Check if item already exists in cart
    existing_item = db.query(CartItem).filter(
        and_(
            CartItem.user_id == current_user.id,
            CartItem.product_id == cart_item.product_id
        )
    ).first()
    
    if existing_item:
        # Update quantity
        new_quantity = existing_item.quantity + cart_item.quantity
        if new_quantity > product.stock_quantity:
            raise HTTPException(
                status_code=400,
                detail=f"Not enough stock. Available: {product.stock_quantity}, Requested: {new_quantity}"
            )
        existing_item.quantity = new_quantity
        db.commit()
        db.refresh(existing_item)
        return existing_item
    else:
        # Create new cart item
        db_cart_item = CartItem(
            user_id=current_user.id,
            product_id=cart_item.product_id,
            quantity=cart_item.quantity
        )
        db.add(db_cart_item)
        db.commit()
        db.refresh(db_cart_item)
        return db_cart_item

@router.put("/{item_id}", response_model=CartItemResponse)
async def update_cart_item(
    item_id: int,
    cart_item_update: CartItemUpdate,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    """Update cart item quantity."""
    cart_item = db.query(CartItem).filter(
        and_(
            CartItem.id == item_id,
            CartItem.user_id == current_user.id
        )
    ).first()
    
    if not cart_item:
        raise HTTPException(status_code=404, detail="Cart item not found")
    
    # Check stock availability
    if cart_item_update.quantity > cart_item.product.stock_quantity:
        raise HTTPException(
            status_code=400,
            detail=f"Not enough stock. Available: {cart_item.product.stock_quantity}"
        )
    
    cart_item.quantity = cart_item_update.quantity
    db.commit()
    db.refresh(cart_item)
    
    return cart_item

@router.delete("/{item_id}")
async def remove_from_cart(
    item_id: int,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    """Remove item from cart."""
    cart_item = db.query(CartItem).filter(
        and_(
            CartItem.id == item_id,
            CartItem.user_id == current_user.id
        )
    ).first()
    
    if not cart_item:
        raise HTTPException(status_code=404, detail="Cart item not found")
    
    db.delete(cart_item)
    db.commit()
    
    return {"message": "Item removed from cart"}

@router.delete("/")
async def clear_cart(
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    """Clear all items from cart."""
    db.query(CartItem).filter(CartItem.user_id == current_user.id).delete()
    db.commit()
    
    return {"message": "Cart cleared"}

@router.get("/count")
async def get_cart_count(
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    """Get total number of items in cart."""
    count = db.query(CartItem).filter(CartItem.user_id == current_user.id).count()
    return {"count": count}
