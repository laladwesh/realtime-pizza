# 🍕 Realtime Pizza - Full Stack Pizza Ordering Applications

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-orange?style=for-the-badge&logo=vercel)](https://realtime-pizza-flame.vercel.app)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)](https://socket.io/)

*A modern, full-stack real-time pizza ordering application built with Node.js, Express, MongoDB, and Socket.io*

[Features](#-features) •
[Demo](#-demo) •
[Installation](#-installation) •
[Usage](#-usage) •
[API Documentation](#-api-documentation) •
[Contributing](#-contributing)

</div>

---

## 📖 Table of Contents

- [🍕 Realtime Pizza - Full Stack Pizza Ordering Application](#-realtime-pizza---full-stack-pizza-ordering-application)
  - [📖 Table of Contents](#-table-of-contents)
  - [🌟 Overview](#-overview)
  - [✨ Features](#-features)
  - [🎯 Demo](#-demo)
  - [🏗️ Architecture](#️-architecture)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [⚡ Quick Start](#-quick-start)
  - [🔧 Installation](#-installation)
  - [🚀 Usage](#-usage)
  - [📂 Project Structure](#-project-structure)
  - [🔌 API Endpoints](#-api-endpoints)
  - [🎨 Frontend Components](#-frontend-components)
  - [📱 Real-time Features](#-real-time-features)
  - [🔐 Authentication & Security](#-authentication--security)
  - [📊 Database Schema](#-database-schema)
  - [🎯 Environment Variables](#-environment-variables)
  - [🐳 Docker Support](#-docker-support)
  - [📝 Scripts](#-scripts)
  - [🧪 Testing](#-testing)
  - [🚀 Deployment](#-deployment)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)
  - [👨‍💻 Author](#-author)
  - [🙏 Acknowledgments](#-acknowledgments)

---

## 🌟 Overview

**Realtime Pizza** is a comprehensive, full-stack web application that allows users to order pizzas online with real-time order tracking. Built with modern web technologies, it provides a seamless experience from browsing the menu to receiving live updates about order status.

The application features a responsive design, secure user authentication, real-time notifications, and an intuitive admin panel for order management. It is designed to handle the complete pizza ordering workflow with real-time communication between customers and administrators.

### 🎯 Key Highlights

- **Real-time Order Tracking**: Live updates using Socket.io for instant order status changes
- **Secure Authentication**: Passport.js integration with bcrypt password hashing
- **Responsive Design**: Tailwind CSS for mobile-first, responsive UI
- **Admin Dashboard**: Complete order management system for administrators
- **Session Management**: Persistent shopping cart with MongoDB session store
- **Modern Architecture**: Clean MVC architecture with Express.js and EJS templating

---

## ✨ Features

### 🛒 **Customer Features**
- **Browse Menu**: View all available pizzas with images, prices, and descriptions
- **Shopping Cart**: Add/remove items with persistent session storage
- **User Authentication**: Secure login and registration system
- **Order Placement**: Place orders with delivery information
- **Real-time Tracking**: Live order status updates (Placed → Confirmed → Prepared → Delivered)
- **Order History**: View past orders and their details
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 👨‍💼 **Admin Features**
- **Order Management**: View all orders in a comprehensive dashboard
- **Status Updates**: Change order status with real-time customer notifications
- **Real-time Notifications**: Instant alerts for new orders
- **Order Analytics**: View order details, customer information, and timestamps
- **Secure Access**: Admin-only routes with authentication middleware

### 🔧 **Technical Features**
- **Real-time Communication**: WebSocket connections for live updates
- **Session Persistence**: Shopping cart data preserved across sessions
- **Security**: Password hashing, session management, and route protection
- **Database Integration**: MongoDB with Mongoose ODM
- **Asset Compilation**: Laravel Mix for SCSS and JavaScript bundling
- **Deployment Ready**: Configured for Vercel deployment

---

## 🏗️ Architecture

The application follows a traditional MVC (Model-View-Controller) architecture with the following components:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│                 │    │                 │    │                 │
│ • EJS Templates │    │ • Express.js    │    │ • MongoDB       │
│ • Tailwind CSS  │◄──►│ • Socket.io     │◄──►│ • Mongoose      │
│ • Vanilla JS    │    │ • Passport.js   │    │ • Session Store │
│ • Axios         │    │ • Middleware    │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## 🛠️ Tech Stack

### **Backend**
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.io** - Real-time bidirectional communication
- **Passport.js** - Authentication middleware
- **bcrypt** - Password hashing
- **express-session** - Session management
- **connect-mongo** - MongoDB session store

### **Frontend**
- **EJS** - Templating engine
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JavaScript** - Client-side scripting
- **Axios** - HTTP client for API requests
- **Noty** - Notification library
- **Moment.js** - Date manipulation

### **Development Tools**
- **Laravel Mix** - Asset compilation
- **Sass** - CSS preprocessor
- **Nodemon** - Development server
- **cross-env** - Environment variable management

### **Deployment**
- **Vercel** - Hosting platform
- **MongoDB Atlas** - Cloud database

---

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/laladwesh/realtime-pizza.git

# Navigate to project directory
cd realtime-pizza

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev

# Visit http://localhost:3000
```

---

## 🔧 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)
- **MongoDB** (v4.0.0 or higher) or MongoDB Atlas account
- **Git**

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/laladwesh/realtime-pizza.git
   cd realtime-pizza
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   # Database Configuration
   MONGO_CONNECTION_URL=mongodb://localhost:27017/realtime-pizza
   # For MongoDB Atlas:
   # MONGO_CONNECTION_URL=mongodb+srv://username:password@cluster.mongodb.net/realtime-pizza
   
   # Session Secret
   COOKIE_SECRET=your-super-secret-cookie-key
   
   # Application Port
   PORT=3000
   
   # Node Environment
   NODE_ENV=development
   ```

4. **Database Setup**
   
   If using local MongoDB:
   ```bash
   # Start MongoDB service
   mongod
   
   # Create database (optional - will be created automatically)
   mongo
   > use realtime-pizza
   ```

5. **Compile Assets**
   ```bash
   npm run development
   ```

6. **Start the Application**
   ``` bash
   # Development mode with auto-restart
   npm run dev
   
   # Production mode
   npm start
   ```

7. **Access the Application**
   
   Open your browser and navigate to `http://localhost:3000`

---

## 🚀 Usage

### For Customers

1. **Browse Menu**
   - Visit the homepage to view available pizzas
   - Each pizza displays name, image, size, and price

2. **Add to Cart**
   - Click the '+' button to add pizzas to your cart
   - Cart counter updates in real-time

3. **Create Account**
   - Register a new account or login to existing account
   - Required for placing orders

4. **Place Order**
   - Go to cart page and proceed to checkout
   - Fill in delivery details and place order

5. **Track Order**
   - View real-time order status updates
   - Receive notifications for status changes

### For Administrators

1. **Admin Access**
   - Login with admin credentials
   - Access admin dashboard at `/admin/orders`

2. **Manage Orders**
   - View all orders with customer details
   - Update order status using dropdown menus
   - Orders automatically notify customers of changes

---

## 📂 Project Structure

```
realtime-pizza/
├── 📁 app/
│   ├── 📁 config/
│   │   └── passport.js           # Passport authentication configuration
│   ├── 📁 http/
│   │   ├── 📁 controllers/
│   │   │   ├── 📁 admin/
│   │   │   │   ├── orderController.js
│   │   │   │   └── statusController.js
│   │   │   ├── 📁 customers/
│   │   │   │   ├── cartController.js
│   │   │   │   └── orderController.js
│   │   │   ├── authController.js
│   │   │   └── homeController.js
│   │   └── 📁 middleware/
│   │       ├── admin.js          # Admin route protection
│   │       ├── auth.js           # Authentication middleware
│   │       └── guest.js          # Guest route protection
│   └── 📁 models/
│       ├── menu.js               # Pizza menu model
│       ├── order.js              # Order model
│       └── user.js               # User model
├── 📁 public/                    # Compiled assets
│   ├── 📁 css/
│   ├── 📁 js/
│   └── 📁 img/
├── 📁 resources/
│   ├── 📁 js/
│   │   ├── admin.js              # Admin dashboard JavaScript
│   │   └── app.js                # Main application JavaScript
│   ├── 📁 scss/
│   │   └── app.scss              # Main stylesheet
│   └── 📁 views/
│       ├── 📁 admin/
│       ├── 📁 auth/
│       ├── 📁 customers/
│       ├── 📁 errors/
│       ├── 📁 layouts/
│       └── home.ejs
├── 📁 routes/
│   └── web.js                    # Application routes
├── 📄 index.js                   # Main application entry point
├── 📄 package.json               # Dependencies and scripts
├── 📄 webpack.mix.js             # Asset compilation configuration
├── 📄 vercel.json                # Vercel deployment configuration
└── 📄 .env                       # Environment variables
```

---

## 🔌 API Endpoints

### Public Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Homepage with pizza menu |
| GET | `/login` | Login page |
| POST | `/login` | User authentication |
| GET | `/register` | Registration page |
| POST | `/register` | User registration |
| POST | `/logout` | User logout |
| GET | `/cart` | Shopping cart page |
| POST | `/update-cart` | Add items to cart |

### Protected Customer Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/orders` | Place new order |
| GET | `/customer/orders` | View order history |
| GET | `/customer/orders/:id` | View specific order |

### Admin Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/orders` | Admin dashboard |
| POST | `/admin/order/status` | Update order status |

---

## 🎨 Frontend Components

### Main JavaScript Features
- **Cart Management**: Real-time cart updates using Axios
- **Order Tracking**: Live order status updates via Socket.io
- **Notifications**: Toast notifications using Noty library
- **Admin Dashboard**: Dynamic order table with real-time updates

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Custom SCSS**: Additional styling with Sass preprocessing

---

## 📱 Real-time Features

The application uses Socket.io for real-time communication:

### Client-side Events
```javascript
// Join order room for updates
socket.emit('join', `order_${orderId}`)

// Listen for order updates
socket.on('orderUpdated', (data) => {
    // Update order status in real-time
})

// Admin joins admin room
socket.emit('join', 'adminRoom')

// Listen for new orders (admin)
socket.on('orderPlaced', (order) => {
    // Add new order to admin dashboard
})
```

### Server-side Events
```javascript
// Order status update
eventEmitter.on('orderUpdated', (data) => {
    io.to(`order_${data.id}`).emit('orderUpdated', data)
})

// New order placed
eventEmitter.on('orderPlaced', (data) => {
    io.to('adminRoom').emit('orderPlaced', data)
})
```

---

## 🔐 Authentication & Security

### Security Features
- **Password Hashing**: bcrypt with salt rounds
- **Session Management**: Secure session storage in MongoDB
- **Route Protection**: Middleware for authenticated and admin routes
- **CSRF Protection**: Express session-based protection
- **Input Validation**: Server-side validation for all inputs

### User Roles
- **Customer**: Can browse, order, and track pizzas
- **Admin**: Can manage orders and update status

---

## 📊 Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (default: 'customer'),
  timestamps: true
}
```

### Menu Model
```javascript
{
  name: String (required),
  image: String (required),
  price: Number (required),
  size: String (required)
}
```

### Order Model
```javascript
{
  customerId: ObjectId (ref: 'User'),
  items: Object (required),
  phone: Number (required),
  address: String (required),
  paymentType: String (default: 'COD'),
  status: String (default: 'order_placed'),
  timestamps: true
}
```

---

## 🎯 Environment Variables

Create a `.env` file with the following variables:

```env
# Database
MONGO_CONNECTION_URL=mongodb://localhost:27017/realtime-pizza

# Session
COOKIE_SECRET=your-super-secret-key-here

# Application
PORT=3000
NODE_ENV=development

# Optional: Email configuration for notifications
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

---

## 🐳 Docker Support

### Dockerfile
```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

RUN npm run production

EXPOSE 3000

CMD ["npm", "start"]
```

### Docker Compose
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - MONGO_CONNECTION_URL=mongodb://mongo:27017/realtime-pizza
      - COOKIE_SECRET=your-secret-key
    depends_on:
      - mongo
  
  mongo:
    image: mongo:5
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

---

## 📝 Scripts

```json
{
  "start": "node index.js",
  "dev": "nodemon server.js",
  "serve": "node server.js",
  "development": "cross-env NODE_ENV=development webpack",
  "watch": "npm run development -- --watch",
  "production": "cross-env NODE_ENV=production webpack",
  "test": "jest",
  "test:watch": "jest --watch"
}
```

---

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure
- **Unit Tests**: Controller and model testing
- **Integration Tests**: Route and middleware testing
- **E2E Tests**: Complete user flow testing

---

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Environment Variables**
   Set environment variables in Vercel dashboard:
   - `MONGO_CONNECTION_URL`
   - `COOKIE_SECRET`

### Other Platforms

- **Heroku**: Add `Procfile` with `web: node index.js`
- **Railway**: Connect GitHub repository
- **DigitalOcean**: Use App Platform
- **AWS**: Deploy using Elastic Beanstalk

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the Repository**
   ```bash
   git fork https://github.com/laladwesh/realtime-pizza.git
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit Changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

4. **Push to Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Use conventional commit messages

---

## 📄 License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Laladwesh**
- GitHub: [@laladwesh](https://github.com/laladwesh)
- Project Link: [https://github.com/laladwesh/realtime-pizza](https://github.com/laladwesh/realtime-pizza)

---

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Fast, unopinionated web framework.
- [Socket.io](https://socket.io/) - Real-time bidirectional communication
- [MongoDB](https://www.mongodb.com/) - Document database
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Deployment platform
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Passport.js](http://www.passportjs.org/) - Authentication middleware

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Laladwesh](https://github.com/laladwesh)

</div>
