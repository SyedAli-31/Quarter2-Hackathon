"use client";
import React, { useState, useEffect } from "react";
import Carthead from "../component/Carthead";
import Footer from "../component/footer";

const ShoppingCart = () => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const updateQuantity = (index: number, quantity: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = quantity;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;  // Convert to float and fallback to 0 if invalid
      const quantity = item.quantity || 0; // Ensure quantity is a valid number
      return total + price * quantity; // Add total for the current item
    }, 0);
  };

  return (
    <div>
      <Carthead />
      <div className="container mx-auto px-4 py-10 text-black">
        <h1 className="text-3xl font-bold text-center mb-10">YOUR CART</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Product Section */}
          <div className="lg:col-span-8">
            {cart.map((product, index) => (
              <div key={index} className="flex border-b py-4 items-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h2 className="font-semibold text-lg">{product.name}</h2>
                </div>
                <div className="text-right">
                  <p className="font-medium text-lg">Rs.{parseFloat(product.price).toFixed(2)}</p>
                  <div className="mt-2 flex items-center">
                    <button
                      className="border px-2 py-1"
                      onClick={() => updateQuantity(index, Math.max(1, product.quantity - 1))}
                    >
                      -
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button
                      className="border px-2 py-1"
                      onClick={() => updateQuantity(index, product.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="ml-4 text-red-600 underline"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Checkout Section */}
          <div className="lg:col-span-4">
            <div className="border p-4 rounded-lg shadow-lg">
              <h2 className="font-bold text-lg mb-4">SUBTOTAL</h2>
              <p className="font-medium text-lg">Rs.{getTotalPrice().toFixed(2)}</p>
              <div className="mt-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  I agree with the terms and conditions
                </label>
              </div>
              <button
                className="mt-6 w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 disabled:opacity-50"
                disabled
              >
                PROCEED TO CHECKOUT
              </button>
              <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600">
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
