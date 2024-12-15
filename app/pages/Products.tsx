"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { IoIosHeartEmpty, IoIosClose } from "react-icons/io"; // IoIosClose for close button
import "./products.css";
import "./page.css";

// Define Product interface
interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]); // State to hold fetched products
  const [showSidebar, setShowSidebar] = useState(false); // Toggle sidebar for small screens

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    // Fetch data from the Fake Store API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <div className="section">
        <h4 className="items">3425 ITEMS</h4>
        <h4 className="hide" onClick={toggleSidebar}>
          {showSidebar ? "Hide Filter" : "Show Filter"}
        </h4>

        <div>
          <select className="random">
            <option>Recommended</option>
            <option>newest first</option>
            <option>popular</option>
            <option>price:high to low</option>
            <option>price:low to high</option>
          </select>
        </div>
      </div>
      <div className="products-container">
        {/* Sidebar */}
        <div className={`sidebar ${showSidebar ? "show" : ""}`}>
          <button className="close-sidebar-btn" onClick={toggleSidebar}>
            <IoIosClose size={24} color="black" />
          </button>
          <Sidebar /> {/* Sidebar Component */}
          
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {products.length === 0 ? (
            <p className="loading-text">Loading products...</p>
          ) : (
            <div className="product-list">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                  <h2 className="product-title">{product.title}</h2>
                  <p className="product-description">
                    Sign in or create an account to see pricing
                    <IoIosHeartEmpty size={20} color="black" />
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
