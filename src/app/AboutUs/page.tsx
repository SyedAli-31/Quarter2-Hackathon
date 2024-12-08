"use client"
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import Abouthead from "../component/Abouthead";
import Recent from "../component/recent";
import AboutRecent from "../component/AboutRec";
import Aboutlast from "../component/Aboutlast";
import AboutFooter from "../component/AboutFooter";
import Link from "next/link";

const AboutUs = () => {
  return <div>
    
    <div className="h-[41px] grid grid-cols-[65%_35%] bg-[#2A254B] text-[#FFFFFF] items-center text-[14px] font-normal">
        <h2 className="flex text-end ml-[450px] "><TbTruckDelivery className='w-[20px] h-[20px] mr-1'/>Free delivery on all orders over £50 with code easter checkout</h2>
        <h2 className="text-end mr-2">X</h2>
    </div>
    <Abouthead/>
    <div className="grid grid-cols-[70%_30%]">
    <span className="text-[36px] font-normal mt-[120px] text-center ">A brand built on the love of craftmanship,<br />
    quality and outstanding customer service</span>
    <span> <button className="w-[170px]  bg-gray-100 text-[#2A254B] px-6 py-3 rounded-lg shadow hover:bg-gray-200 mt-[120px] ml-[100px] ">
          <Link href="/ProdListing">View Our Products</Link>
        </button></span>
    </div>
      <Recent/>
      <AboutRecent/>
      <Aboutlast/>
      <AboutFooter/>
    </div>;
};

export default AboutUs;
