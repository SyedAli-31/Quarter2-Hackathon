import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:items-center md:flex-row md:h-[700px]">
      {/* Background Image */}
      <div className="relative w-[389px] h-[290px] md:w-full md:h-[700px]  ">
        <Image
          src="/img1.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="rounded shadow-lg"
        />
      </div>

      {/* Text Box */}
      <div className="   md:absolute md:right-10 md:top-1/2 md:transform md:-translate-y-1/2 w-[389px] h-[290px] md:w-[600px] md:h-[450px] bg-white shadow-lg  md:p-8 flex flex-col mt-8 md:mt-0 md:ml-8 ">
        <h2 className="text-[24px] md:ml-0 ml-8 font-normal text-text md:text-[32px]">
          Luxury homeware for people
        </h2>
        <p className="text-[24px] md:ml-0 ml-4  font-normal mt-1 text-text md:text-[32px]">
          Who love timeless design quality
        </p>
        <p className="text-[#5B5676] md:ml-0 ml-6 text-[18px] leading-[24px] mt-4 md:mt-6">
          Shop the new Spring 2022 collection today
        </p>
        <button className="w-[370px] md:w-[170px] md:ml-0 ml-2 bg-gray-100 text-[#2A254B] px-6 py-3 rounded-lg shadow hover:bg-red-400 mt-[60px] md:mt-auto ">
          <Link href="/ProdListing">View Collection</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
