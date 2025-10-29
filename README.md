# E-Commerce Storefront

A full-stack e-commerce application built with FastAPI, Next.js, PostgreSQL, and Stripe.

## Features

- 🛍️ Product catalog with search and filtering
- 🛒 Shopping cart and checkout with Stripe
- 📦 Order history and management
- 👨‍💼 Admin dashboard for product and order management
- ❤️ Wishlist functionality
- ⭐ Product reviews and ratings
- 📧 Email notifications
- 📊 Inventory management
- 🔍 Advanced search capabilities

## Tech Stack

### Backend
- FastAPI
- PostgreSQL
- SQLAlchemy
- Stripe API
- JWT Authentication

### Frontend
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Radix UI components

## Project Structure

```
ecom-store/
├── backend/          # FastAPI backend
├── frontend/         # Next.js frontend
├── docker-compose.yml
├── README.md
└── .env.example
```

## Quick Start

1. Clone the repository
2. Copy `.env.example` to `.env` and configure your environment variables
3. Run `docker-compose up` to start all services
4. Access the application at `http://localhost:3000`

## Development

### Backend
```bash
cd backend
bun install
bun run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

### Backend (.env)
- `DATABASE_URL`: PostgreSQL connection string
- `JWT_SECRET_KEY`: Secret key for JWT tokens
- `STRIPE_SECRET_KEY`: Stripe secret key for payments
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook secret

### Frontend (.env.local)
- `NEXT_PUBLIC_API_URL`: Backend API URL
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripe publishable key

## Next.js Features

- **App Router**: Uses Next.js 14 App Router for modern routing
- **Server Components**: Optimized for performance
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Responsive Design**: Mobile-first approach

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Products
- `GET /api/products` - List products with filtering
- `GET /api/products/{id}` - Get product details
- `GET /api/products/categories` - List categories

### Cart
- `GET /api/cart` - Get cart items
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/{id}` - Update cart item
- `DELETE /api/cart/{id}` - Remove cart item

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `GET /api/orders/{id}` - Get order details

## Deployment

The application is containerized with Docker and can be deployed to any container platform:

- **Backend**: FastAPI with Uvicorn
- **Frontend**: Next.js with Node.js
- **Database**: PostgreSQL
- **Reverse Proxy**: Nginx (optional)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details