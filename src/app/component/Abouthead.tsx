"use client";
import { FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "./Navbar";
import Link from "next/link";
import React, { useState } from "react";

export default function Abouthead() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Top Header */}
      <div className="flex justify-between items-center px-4 mt-2">
        {/* Left Section: Logo */}
        <div className="text-[24px] text-[#22202E] font-normal">
          <Link href="/">Avion</Link>
        </div>

        {/* Right Section: Mobile Icons */}
        <div className="flex items-center gap-4 text-[#22202E] lg:hidden">
          <FiSearch className="w-5 h-5 cursor-pointer" />
          <FiMenu className="w-6 h-6 cursor-pointer" onClick={toggleSidebar} />
        </div>

        {/* Right Section: Links (Desktop only) */}
        <div className="hidden lg:flex gap-8 text-[#22202E] items-center">
          <Link href="/AboutUs">About Us</Link>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <div className="flex gap-4 mt-1">
            <FiSearch className="w-5 h-5" />
            <FaShoppingCart className="w-5 h-5" />
            <VscAccount className="w-5 h-5" />
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
              className="w-6 h-6 cursor-pointer"
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
                <Link href="/Cart">Cart</Link>
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
