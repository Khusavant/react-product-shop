# 🛍️ React Product Shop — Product Listing & Cart UI

A responsive React e-commerce application demonstrating component-driven architecture, modular state management with React Hooks (`useState`), and CSS Grid/Flexbox layout systems. Users can explore a curated product catalog, manage shopping cart quantities in real-time, and view dynamic order total calculations.

---

## 🚀 Live Demos

- **GitHub Pages**: [https://khusavant.github.io/react-product-shop](https://khusavant.github.io/react-product-shop)
- **Netlify**: [https://comforting-raindrop-e9bc27.netlify.app](https://comforting-raindrop-e9bc27.netlify.app)

---

## 🛠️ Tech Stack

- **Framework**: React (v19, Functional Components & Hooks)
- **Styling**: Vanilla CSS (CSS Grid, Flexbox, Custom CSS Variables)
- **State Management**: React `useState` Hook
- **Deployment**: GitHub Pages (`gh-pages`) & Netlify

---

## ✨ Features

- **Product Grid**: Responsive product listing layout rendered dynamically from structured data (`data/products.js`).
- **Interactive Add to Cart**: Real-time shopping cart state managed in `App.js` using `useState`.
- **Dynamic Quantity Tracking**: Automatically increments quantities when duplicate items are added.
- **Remove & Clear Functionality**: Enables users to decrement quantity or remove items completely from the cart.
- **Cart Summary & Totals**: Computes cart item count badge and real-time total price calculations.
- **Responsive Layout**: Designed for mobile, tablet, and desktop screens.

---

## 📂 Project Structure

```text
src/
├── App.js               # Main layout container & useState manager
├── App.css              # Unified application stylesheet
├── index.js             # React DOM entry point
├── components/
│   ├── ProductCard.js   # Individual product card component
│   ├── ProductList.js   # Maps through products array to render cards
│   └── Cart.js          # Shopping cart sidebar and total price display
└── data/
    └── products.js      # Structured mock product data array
```

---

## 💻 How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Khusavant/react-product-shop.git
   cd react-product-shop
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
