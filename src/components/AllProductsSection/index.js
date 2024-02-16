import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProductList from "../ProductList";
import CartPage from "../CartPage";
import Home from "../Home";
import "./index.css";

const AllProductsSection = () => {
  return (
    <div className="all-products-section">
      {/* Header */}
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default AllProductsSection;
