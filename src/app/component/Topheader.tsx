"use client";
import { FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FiSearch, FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "./Navbar";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Topheader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // Track the number of items in the cart

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Get cart data from localStorage (assuming cart items are stored in an array)
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(savedCart.length); // Set the cart count based on the length of the cart
  }, []);

  return (
    <div>
      {/* Top Header */}
      <div className="flex justify-between items-center px-4 mt-2">
        {/* Left Section: Search (Desktop only) */}
        <div className="hidden lg:block">
          <FiSearch className="w-6 h-6 cursor-pointer text-[#22202E]" />
        </div>

        {/* Center Section: Logo */}
        <div className="text-[24px] font-normal text-[#22202E] md:text-center flex-1 lg:flex-none">
          Avion
        </div>

        {/* Right Section: Mobile Icons */}
        <div className="flex items-center gap-6 mr-8 lg:hidden">
          <FiSearch className="w-6 h-6 cursor-pointer text-[#22202E]" />
          <FiMenu className="w-6 h-6 cursor-pointer text-[#22202E]" onClick={toggleSidebar} />
        </div>

        {/* Right Section: Links (Desktop only) */}
        <div className="hidden text-[#22202E] lg:flex gap-8 items-center">
          <Link href="/AboutUs">About Us</Link>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <div className="flex gap-4 mt-1">
            <div className="relative">
              <Link href="/ShoppingCart">
                <FaShoppingCart className="w-6 h-6 cursor-pointer text-[#22202E]" />
              </Link>
              {/* Notification Badge */}
              {cartCount > 0 && (
                <span className="absolute top-[-5px] right-[-5px] bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </div>
            <VscAccount className="w-6 h-6 cursor-pointer text-[#22202E]" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-[#0000001A] mt-2" />

      {/* Navbar */}
      <Navbar />

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg z-50">
          <div className="flex justify-between items-center p-4">
            <span className="text-xl text-[#22202E] font-bold">Menu</span>
            <AiOutlineClose
              className="w-6 text-[#22202E] h-6 cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
          <div className="p-4">
            <ul className="space-y-4 text-[#22202E]">
              <li>
                <Link href="/AboutUs">About Us</Link>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <Link href="/ShoppingCart">Cart</Link>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
