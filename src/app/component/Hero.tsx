import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[700px]">
      {/* Background Image */}
      <Image
        src="/img1.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />

      {/* Centered Box */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white w-[600px] h-[450px] shadow-lg p-8 flex flex-col ">
        <h2 className="text-[32px] font-normal text-text ">
        Luxury homeware for people  
        </h2>
        <p className="text-[32px] font-normal mt-1 text-text ">
          Who love timeless design quality
        </p>
        <p className="text-[#5B5676] text-[18px] leading-[27px] mt-6 ">Shop the new Spring 2022 collection today</p>
        <button className="w-[170px]  bg-gray-100 text-[#2A254B] px-6 py-3 rounded-lg shadow hover:bg-gray-200 mt-[150px]">
          <Link href='/ProdListing'> View Collection</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
