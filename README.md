# SketchyStore - E-Commerce Web Application

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-12.0.0-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-2.8.2-764ABC?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A modern, responsive e-commerce platform built with React, featuring user authentication, shopping cart functionality, wishlist management, and order tracking. The application provides a seamless shopping experience across all devices with a clean and intuitive interface.

## 📸 Screenshots

<details>
<summary><strong>🖥️ Desktop Views</strong> - Click to expand</summary>

### Homepage & Navigation
![Desktop Homepage](./screenshots/desktop-home.png)
*Homepage featuring hero section and product navigation*

### Product Catalog
![Product Grid](./screenshots/desktop-products.png)
*Product grid with category filtering and sorting options*

### Product Details
![Product Details](./screenshots/desktop-product-detail.png)
*Detailed product view with image carousel and specifications*

### Shopping Cart
![Desktop Cart](./screenshots/desktop-cart.png)
*Shopping cart with quantity management and checkout options*

</details>

<details>
<summary><strong>📱 Mobile Views</strong> - Click to expand</summary>

### Mobile Layout Comparison
![Mobile Homepage](./screenshots/mobile-home.png) | ![Mobile Products](./screenshots/mobile-products.png) | ![Mobile Cart](./screenshots/mobile-cart.png)
:---:|:---:|:---:
*Mobile Homepage* | *Product Grid* | *Shopping Cart*

### Mobile Navigation
![Mobile Navigation](./screenshots/mobile-navigation.png)
*Bottom navigation bar for mobile devices*

</details>

<details>
<summary><strong>👤 User Dashboard</strong> - Click to expand</summary>

### Profile Management
![User Profile](./screenshots/user-profile.png)
*User profile management with address and contact information*

### Order History
![Order History](./screenshots/order-history.png)
*Complete order history with status tracking*

### Wishlist
![Wishlist](./screenshots/wishlist.png)
*User wishlist with saved products*

</details>

<details>
<summary><strong>🛒 E-commerce Features</strong> - Click to expand</summary>

### Checkout Process
![Checkout](./screenshots/checkout.png)
*Complete checkout flow with address and payment information*

### Order Success
![Order Success](./screenshots/order-success.png)
*Order confirmation and success page*

### Authentication
![Login](./screenshots/login.png) | ![Signup](./screenshots/signup.png)
:---:|:---:
*Login Page* | *Registration Page*

</details>

## 🚀 Features

### 🛍️ Core E-commerce Features
- **Product Catalog**: Browse products with pagination and category filtering
- **Product Search & Sort**: Advanced filtering by price, title, and discount percentage
- **Product Details**: Comprehensive product views with image carousels, reviews, and specifications
- **Shopping Cart**: Add, remove, and manage cart items with real-time quantity updates
- **Wishlist**: Save favorite products for later purchase
- **Checkout Process**: Streamlined checkout with address validation and order confirmation

### 👤 User Management
- **Authentication**: Email/password and Google OAuth sign-in
- **User Profiles**: Manage personal information, addresses, and contact details
- **Order History**: Track all orders with detailed status information
- **Payment Methods**: Secure payment method management (UI ready)

### 📱 User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Progressive Web App**: Mobile-first design with native app-like experience
- **Real-time Updates**: Instant cart updates and order status changes
- **Toast Notifications**: User feedback for all actions
- **Loading States**: Smooth loading animations and skeleton screens

### 🔒 Security & Performance
- **Firebase Authentication**: Secure user authentication and session management
- **Protected Routes**: Private routes for authenticated users only
- **Data Persistence**: User data stored securely in Firestore
- **Optimized Performance**: Code splitting and lazy loading

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern React with latest features
- **Vite 6.3.5** - Fast build tool and development server
- **React Router DOM 7.6.3** - Client-side routing
- **Redux Toolkit 2.8.2** - State management
- **TailwindCSS 4.1.11** - Utility-first CSS framework

### Backend & Services
- **Firebase 12.0.0** - Authentication and Firestore database
- **DummyJSON API** - Product data source

### UI & Icons
- **Lucide React 0.532.0** - Beautiful SVG icons
- **React Toastify 11.0.5** - Toast notifications

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite** - Fast development and build tooling

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Firebase project with Firestore and Authentication enabled

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/sketchystore.git
cd sketchystore
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4. Firebase Setup
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password and Google providers
3. Create a Firestore database in test mode
4. Add your web app and copy the configuration to your `.env` file

### 5. Run the Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### 6. Build for Production
```bash
npm run build
# or
yarn build
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AccountSidebar.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ImageCarousel.jsx
│   ├── Loading.jsx
│   ├── Pagination.jsx
│   ├── ProductCard.jsx
│   ├── ProfileForm.jsx
│   ├── Sidebar.jsx
│   ├── SplashLoading.jsx
│   └── WishlistButton.jsx
├── contexts/            # React contexts
│   └── AuthContext.jsx
├── firebase/            # Firebase configuration and auth
│   ├── auth.js
│   └── firebase.js
├── layout/              # Layout components
│   └── MainLayout.jsx
├── pages/               # Page components
│   ├── auth/            # Authentication pages
│   ├── Account.jsx
│   ├── Cart.jsx
│   ├── CheckoutPage.jsx
│   ├── Front.jsx
│   ├── Home.jsx
│   ├── OrderSuccess.jsx
│   ├── OrdersPage.jsx
│   ├── PaymentMethod.jsx
│   ├── Product.jsx
│   ├── ProductPage.jsx
│   └── WishlistPage.jsx
├── routes/              # Route protection
│   └── Privateroutes.jsx
├── slice/               # Redux slices
│   ├── CartSlice.js
│   ├── OrderSlice.js
│   ├── ProductAction.js
│   ├── ProductSlice.js
│   └── Wishlist.js
├── store/               # Redux store configuration
│   └── Store.js
├── utils/               # Utility functions
│   └── updateUser.js
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🔧 Configuration

### Firebase Rules
Update your Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Tailwind Configuration
The project uses Tailwind CSS v4 with the new Vite plugin. Custom animations and utilities are defined in `src/index.css`.

## 🚦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌟 Key Features Deep Dive

### Authentication System
- **Email/Password Authentication**: Secure user registration and login
- **Google OAuth**: One-click Google sign-in integration
- **Protected Routes**: Automatic redirection for unauthenticated users
- **User Session Management**: Persistent login state across sessions

### Shopping Cart
- **Real-time Updates**: Instant quantity and price calculations
- **Persistent Storage**: Cart data synced with user profile
- **Multiple Actions**: Add to cart, buy now, remove items
- **Visual Feedback**: Toast notifications for all cart actions

### Product Management
- **Dynamic Loading**: Products loaded from DummyJSON API
- **Category Filtering**: Browse by specific product categories
- **Advanced Sorting**: Sort by price, title, and discount percentage
- **Detailed Views**: Comprehensive product pages with reviews and specifications

### Order Management
- **Order Placement**: Complete checkout process with address validation
- **Order Tracking**: Real-time order status updates
- **Order History**: Complete purchase history with cancellation options
- **Order Details**: Detailed breakdown of order items and pricing

## 🎨 Design System

### Color Palette
- **Primary**: `#FF735C` (Orange)
- **Secondary**: `#111110` (Dark Gray)
- **Success**: `#16A34A` (Green)
- **Error**: `#DC2626` (Red)
- **Gray Scale**: Various shades for text and backgrounds

### Typography
- **Headers**: Bold, modern typography for headings
- **Body Text**: Clean, readable fonts for content
- **Monospace**: For order IDs and technical information

### Responsive Breakpoints
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [DummyJSON](https://dummyjson.com/) for providing the product API
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Firebase](https://firebase.google.com/) for backend services
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities

## 📞 Support

If you have any questions or need help getting started, please:

1. Check the [Issues](https://github.com/CSShubham/SketchyStore-eCommerceWebApp/issues) page
2. Create a new issue if your problem isn't already addressed
3. Reach out to the maintainers

---

**Made with ❤️ by Shubham Raj**

*Star ⭐ this repository if you found it helpful!*
