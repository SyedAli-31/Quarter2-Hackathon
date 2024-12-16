"use client"
import { FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FiSearch, FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "./Navbar";
import Link from "next/link";
import React, { useState } from "react";

export default function Carthead() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Top Header */}
      <div className="flex justify-between items-center px-4 mt-2">
        {/* Left Section: Search Icon */}
        <div className="hidden lg:block">
          <FiSearch className="w-6 h-6 text-[#22202E] cursor-pointer " />
        </div>

        {/* Center Section: Logo */}
        <div className="text-[24px] font-normal text-center lg:flex-1">
          <Link href="/" className="text-[#22202E]">
            Avion
          </Link>
        </div>

        {/* Right Section: Cart & Account (Desktop) */}
        <div className="hidden lg:flex gap-8 items-center justify-end">
          <Link href="/Cart">
            <FaShoppingCart className="w-6 h-6 text-[#22202E] cursor-pointer" />
          </Link>
          <VscAccount className="w-6 h-6  text-[#22202E] cursor-pointer" />
        </div>

        {/* Right Section: Mobile Icons */}
        <div className="flex gap-4 text-[#22202E] lg:hidden">
          <FiSearch className="w-6 h-6  cursor-pointer" />
          <FiMenu
            className="w-6 h-6 cursor-pointer"
            onClick={toggleSidebar}
          />
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
              className="w-6 h-6 cursor-pointer text-[#22202E]"
              onClick={toggleSidebar}
            />
          </div>
          <div className="p-4">
            <ul className="space-y-4 text-[#22202E]">
              <li>
                <Link href="/" onClick={toggleSidebar}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Cart" onClick={toggleSidebar}>
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/AboutUs" onClick={toggleSidebar}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/Contact" onClick={toggleSidebar}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" onClick={toggleSidebar}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
