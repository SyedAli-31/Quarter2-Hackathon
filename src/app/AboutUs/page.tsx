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
  return <div className="">
    
    <div className="h-[41px] md:w-[1425px] w-[340px] grid grid-cols-[65%_35%] bg-[#2A254B] text-[#FFFFFF] items-center text-[14px] font-normal ">
        <h2 className="flex text-end md:ml-[450px] "><TbTruckDelivery className='w-[30px] md:w-[20px] md:mt-0 mt-2 h-[20px] mr-1'/>Free delivery on all orders over £50 with code easter checkout</h2>
        <h2 className="md:text-end md:ml-0 ml-8 mr-2">X</h2>
    </div>
    <Abouthead/>
    <div className="grid md:grid-cols-[70%_30%]">
    <span className=" md:text-[36px] md:w-full w-[240px] text-[20px] font-normal mt-[60px] ml-6 md:ml-0 md:mt-[120px] md:text-center ">A brand built on the love of craftmanship,<br />
    quality and outstanding customer service</span>
    <span> <button className="w-[170px]  bg-gray-100 text-[#2A254B] px-6 py-3 rounded-lg shadow hover:bg-red-200 mt-[60px] md:mt-[120px] ml-[100px] ">
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
