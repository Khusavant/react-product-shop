// src/data/products.js
// Plain JS array of product objects used across the application.
// Having product data in a separate file makes it clean and easy to maintain or swap with an API call later.

const products = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    price: 199.99,
    category: "Electronics",
    description: "Immersive sound experience with active noise cancellation and 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    price: 149.50,
    category: "Accessories",
    description: "Classic analog watch with a genuine leather strap and scratch-resistant sapphire glass.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Ergonomic Mechanical Keyboard",
    price: 129.00,
    category: "Electronics",
    description: "RGB customizable mechanical keyboard with tactile switches and wireless connectivity.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 34.99,
    category: "Lifestyle",
    description: "Double-wall insulated bottle that keeps beverages cold for 24 hours or hot for 12 hours.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Smart Fitness Tracker",
    price: 89.95,
    category: "Electronics",
    description: "Track your daily steps, heart rate, sleep quality, and workouts with seamless phone sync.",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Canvas Urban Backpack",
    price: 64.99,
    category: "Accessories",
    description: "Durable canvas backpack with a padded laptop compartment and water-resistant finish.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
  }
];

export default products;
