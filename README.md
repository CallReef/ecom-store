# E-Commerce Store

A modern, full-stack e-commerce application built with FastAPI, Next.js 16, PostgreSQL, and Stripe integration.

## ✨ Features

- 🛍️ **Product Catalog**: Browse products with advanced search and filtering
- 🛒 **Shopping Cart**: Add to cart, update quantities, and seamless checkout
- 💳 **Stripe Payments**: Secure payment processing with Stripe integration
- 📦 **Order Management**: Track order history and status updates
- 👨‍💼 **Admin Dashboard**: Manage products, orders, and users
- 🔐 **Authentication**: JWT-based user authentication and authorization
- 📱 **Responsive Design**: Mobile-first, modern UI with Tailwind CSS
- ⚡ **Performance**: Next.js 16 with Turbopack for lightning-fast development

## 🚀 Tech Stack

### Backend
- **FastAPI** - Modern, fast web framework for building APIs
- **PostgreSQL** - Robust relational database
- **SQLAlchemy** - Python SQL toolkit and ORM
- **Stripe API** - Payment processing
- **JWT Authentication** - Secure token-based auth
- **Uvicorn** - ASGI server for FastAPI

### Frontend
- **Next.js 16** - Latest React framework with Turbopack
- **React 19** - Latest React with new features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Bun** - Fast JavaScript runtime and package manager

## 📁 Project Structure

```
ecom-store/
├── backend/              # FastAPI backend
│   ├── routers/          # API route handlers
│   ├── models.py         # SQLAlchemy models
│   ├── schemas.py        # Pydantic schemas
│   ├── database.py       # Database configuration
│   ├── auth.py           # Authentication logic
│   ├── middleware.py      # Custom middleware
│   └── main.py           # FastAPI application
├── frontend/             # Next.js 16 frontend
│   ├── pages/            # Pages Router
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── contexts/     # React contexts
│   │   └── hooks/        # Custom hooks
│   ├── package.json      # Bun dependencies
│   └── next.config.js    # Next.js configuration
├── docker-compose.yml    # Docker services
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## 🚀 Quick Start

### Prerequisites
- **Python 3.12+** for backend
- **Bun** for frontend package management
- **PostgreSQL** database
- **Stripe** account for payments

### 1. Clone the Repository
```bash
git clone https://github.com/CallReef/ecom-store.git
cd ecom-store
```

### 2. Backend Setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python3 main.py
```

### 3. Frontend Setup
```bash
cd frontend
bun install
bun run dev
```

### 4. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

## 🔧 Environment Variables

### Backend (.env)
```env
DATABASE_URL=postgresql://username:password@localhost:5432/ecom_store
JWT_SECRET_KEY=your-super-secret-jwt-key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
SENDGRID_API_KEY=your_sendgrid_api_key
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```

## 🎯 Key Features Explained

### Next.js 16 Benefits
- **Turbopack**: Ultra-fast bundler for development
- **React 19**: Latest React features including View Transitions
- **Improved Performance**: Better caching and navigation
- **Enhanced Developer Experience**: Faster builds and hot reloading

### FastAPI Backend
- **Automatic API Documentation**: Available at `/docs`
- **Type Safety**: Full Pydantic validation
- **Async Support**: High-performance async operations
- **Middleware**: Custom logging and CORS handling

### Modern UI/UX
- **Tailwind CSS**: Utility-first styling
- **Radix UI**: Accessible, unstyled components
- **Responsive Design**: Mobile-first approach
- **Dark Mode Ready**: Built with theme support

## 📚 API Documentation

The API is fully documented with FastAPI's automatic documentation:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

### Core Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile

#### Products
- `GET /api/products` - List products with pagination and filtering
- `GET /api/products/{id}` - Get detailed product information
- `GET /api/products/categories` - List all product categories

#### Shopping Cart
- `GET /api/cart` - Get user's cart items
- `POST /api/cart/add` - Add product to cart
- `PUT /api/cart/{id}` - Update cart item quantity
- `DELETE /api/cart/{id}` - Remove item from cart

#### Orders
- `GET /api/orders` - Get user's order history
- `POST /api/orders` - Create new order
- `GET /api/orders/{id}` - Get specific order details

#### Admin (Protected)
- `GET /api/admin/products` - Manage products
- `GET /api/admin/orders` - Manage orders
- `GET /api/admin/users` - Manage users

## 🐳 Docker Deployment

The application includes Docker configuration for easy deployment:

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Services
- **Backend**: FastAPI with Uvicorn (Port 8000)
- **Frontend**: Next.js with Bun (Port 3000)
- **Database**: PostgreSQL (Port 5432)

## 🚀 Production Deployment

### Environment Setup
1. Set up PostgreSQL database
2. Configure environment variables
3. Set up Stripe webhooks
4. Configure SendGrid for emails

### Recommended Platforms
- **Vercel** (Frontend) - Optimized for Next.js
- **Railway/Render** (Backend) - Easy Python deployment
- **Supabase/PlanetScale** (Database) - Managed PostgreSQL

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **FastAPI** for the excellent Python web framework
- **Stripe** for seamless payment processing
- **Tailwind CSS** for the utility-first CSS framework
- **Radix UI** for accessible component primitives

---

**Built with ❤️ by CallReef**