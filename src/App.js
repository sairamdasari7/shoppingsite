import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProductsSection from "./components/AllProductsSection";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section" element={<AllProductsSection />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
