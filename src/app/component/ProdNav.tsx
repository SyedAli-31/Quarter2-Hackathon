"use client"
import { FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FiSearch, FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "./Navbar";
import Link from "next/link";
import { useState } from "react";

const ProdNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Navigation Bar */}
      <div className="w-full md:w-[1350px] grid grid-cols-[50%_50%] md:grid-cols-[90px_1000px_280px] mt-2 items-center mx-auto">
        {/* Logo: Avion */}
        <div className="ml-4 md:ml-0 text-[#22202E] text-[24px] font-normal">
          <Link href="/">Avion</Link>
        </div>

        {/* Desktop Navbar Center */}
        <div className="hidden md:block text-center text-[#22202E]">
          <Navbar />
        </div>

        {/* Icons and Hamburger Menu */}
        <div className="flex gap-4 justify-end items-center mr-4 md:mr-0">
          <FiSearch className="w-[20px] h-[20px] text-[#22202E]" />
          <FaShoppingCart className="w-[20px] h-[20px] text-[#22202E]" />
          <VscAccount className="w-[20px] h-[20px] text-[#22202E]" />
          {/* Hamburger Icon for Mobile */}
          <FiMenu
            className="w-[24px] h-[24px] cursor-pointer md:hidden text-[#22202E]"
            onClick={() => setSidebarOpen(true)}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[#0000001A] w-full mx-auto mt-2" />

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          {/* Sidebar Content */}
          <div className="fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <AiOutlineClose
                className="w-[24px] h-[24px] cursor-pointer text-[#22202E]"
                onClick={() => setSidebarOpen(false)}
              />
            </div>
            {/* Sidebar Links */}
            <ul className="space-y-6 text-lg font-medium text-[#22202E]">
              <li>
                <Link href="/AboutUs">
                  <span className="cursor-pointer hover:text-gray-600">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/Contact">
                  <span className="cursor-pointer hover:text-gray-600">Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/Blog">
                  <span className="cursor-pointer hover:text-gray-600">Blog</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProdNav;

