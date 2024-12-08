import { FaShoppingCart } from "react-icons/fa";

import { VscAccount } from "react-icons/vsc";

import { FiSearch } from "react-icons/fi";

import Navbar from "./Navbar";

import Link from "next/link";

export default function Topheader() {
  return (
    <div>
      
      <div className="grid lg:grid-cols-[20px_1080px_300px] mt-2 items-center">
       
        <div className="ml-2">
           <FiSearch className="w-[24px] h-[24px]" />
        </div>
        
        <div className="text-center text-[24px] font-normal ml-[100px] text-text">
        Avion 
        </div>
       
        <div className="flex gap-8">
         <Link href="/AboutUs"> About Us  </Link>
         <a href="">Contact</a> <a href="">Blog</a>
          <div className="flex gap-4 mt-1">
            
            <Link href="/Cart">
               <FaShoppingCart />
            </Link>
            <VscAccount />
          </div>
          
        </div>
        
      </div>
      <div className="h-[1px] w-[1350px] ml-5 bg-[#0000001A]" />
      <Navbar />
    </div>
  );
}