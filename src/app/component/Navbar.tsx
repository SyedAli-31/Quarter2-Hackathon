import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0); // Track number of items in the cart

  useEffect(() => {
    // Get cart data from localStorage (assuming it's stored as an array of items)
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(savedCart.length); // Set cart count based on the cart length
  }, []);

  return (
    <div className="hidden lg:flex bg-[#FFFFFF] text-center gap-12 justify-center py-4">
      <span className="text-sm text-[#22202E] font-normal">
        <a href="#">Plant Pots</a>
      </span>
      <span className="text-sm font-normal">
        <a href="#">Ceramics</a>
      </span>
      <span className="text-sm font-normal">
        <a href="#">Tables</a>
      </span>
      <span className="text-sm font-normal">
        <a href="#">Chairs</a>
      </span>
      <span className="text-sm font-normal">
        <a href="#">Crockery</a>
      </span>
      <span className="text-sm font-normal">
        <a href="#">Tableware</a>
      </span>
      <span className="text-sm font-normal">
        <a href="#">Cutlery</a>
      </span>

      {/* Cart Icon with Notification Badge */}
      <div className="relative">
        <a href="/ShoppingCart">
          <span className="text-sm font-normal text-[#22202E]">Cart</span>
          {/* Notification Badge */}
          
           
  
        </a>
      </div>
    </div>
  );
};

export default Navbar;
