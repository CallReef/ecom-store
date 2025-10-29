from fastapi import APIRouter, Request, HTTPException, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import Order, User
import stripe
import os
from dotenv import load_dotenv
import logging

load_dotenv()

# Configure Stripe
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")
webhook_secret = os.getenv("STRIPE_WEBHOOK_SECRET")

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter()

@router.post("/stripe")
async def stripe_webhook(request: Request, db: Session = Depends(get_db)):
    """Handle Stripe webhook events."""
    payload = await request.body()
    sig_header = request.headers.get('stripe-signature')
    
    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, webhook_secret
        )
    except ValueError as e:
        logger.error(f"Invalid payload: {e}")
        raise HTTPException(status_code=400, detail="Invalid payload")
    except stripe.error.SignatureVerificationError as e:
        logger.error(f"Invalid signature: {e}")
        raise HTTPException(status_code=400, detail="Invalid signature")
    
    # Handle the event
    if event['type'] == 'payment_intent.succeeded':
        payment_intent = event['data']['object']
        await handle_payment_success(payment_intent, db)
    elif event['type'] == 'payment_intent.payment_failed':
        payment_intent = event['data']['object']
        await handle_payment_failure(payment_intent, db)
    else:
        logger.info(f"Unhandled event type: {event['type']}")
    
    return {"status": "success"}

async def handle_payment_success(payment_intent, db: Session):
    """Handle successful payment."""
    try:
        # Find the order by payment intent ID
        order = db.query(Order).filter(
            Order.stripe_payment_intent_id == payment_intent['id']
        ).first()
        
        if not order:
            logger.error(f"Order not found for payment intent: {payment_intent['id']}")
            return
        
        # Update order status
        order.payment_status = "completed"
        order.status = "processing"
        db.commit()
        
        logger.info(f"Payment successful for order {order.id}")
        
        # TODO: Send confirmation email
        # await send_order_confirmation_email(order)
        
    except Exception as e:
        logger.error(f"Error handling payment success: {e}")
        raise HTTPException(status_code=500, detail="Error processing payment")

async def handle_payment_failure(payment_intent, db: Session):
    """Handle failed payment."""
    try:
        # Find the order by payment intent ID
        order = db.query(Order).filter(
            Order.stripe_payment_intent_id == payment_intent['id']
        ).first()
        
        if not order:
            logger.error(f"Order not found for payment intent: {payment_intent['id']}")
            return
        
        # Update order status
        order.payment_status = "failed"
        order.status = "cancelled"
        db.commit()
        
        logger.info(f"Payment failed for order {order.id}")
        
        # TODO: Send failure notification email
        # await send_payment_failure_email(order)
        
    except Exception as e:
        logger.error(f"Error handling payment failure: {e}")
        raise HTTPException(status_code=500, detail="Error processing payment failure")

@router.post("/stripe/create-payment-intent")
async def create_payment_intent(
    order_id: int,
    db: Session = Depends(get_db)
):
    """Create a Stripe payment intent for an order."""
    order = db.query(Order).filter(Order.id == order_id).first()
    
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    if order.payment_status != "pending":
        raise HTTPException(
            status_code=400, 
            detail="Order payment status is not pending"
        )
    
    try:
        # Create payment intent
        intent = stripe.PaymentIntent.create(
            amount=int(order.total_amount * 100),  # Convert to cents
            currency='usd',
            metadata={
                'order_id': str(order.id),
                'user_id': str(order.user_id)
            }
        )
        
        # Update order with payment intent ID
        order.stripe_payment_intent_id = intent.id
        db.commit()
        
        return {
            "client_secret": intent.client_secret,
            "payment_intent_id": intent.id
        }
        
    except stripe.error.StripeError as e:
        logger.error(f"Stripe error: {e}")
        raise HTTPException(status_code=400, detail=f"Payment error: {str(e)}")
    except Exception as e:
        logger.error(f"Error creating payment intent: {e}")
        raise HTTPException(status_code=500, detail="Error creating payment intent")
