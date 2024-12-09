import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:items-center md:flex-row md:h-[700px]">
      {/* Background Image */}
      <div className="relative w-[340px] h-[290px] md:w-full md:h-[700px]">
        <Image
          src="/img1.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="rounded shadow-lg"
        />
      </div>

      {/* Text Box */}
      <div className="   md:absolute md:right-10 md:top-1/2 md:transform md:-translate-y-1/2  w-[340px] h-[290px] md:w-[600px] md:h-[450px] bg-white shadow-lg p-8 flex flex-col mt-4 md:mt-0 md:ml-8">
        <h2 className="text-[24px] font-normal text-text md:text-[32px]">
          Luxury homeware for people
        </h2>
        <p className="text-[20px] font-normal mt-1 text-text md:text-[32px]">
          Who love timeless design quality
        </p>
        <p className="text-[#5B5676] text-[16px] leading-[24px] mt-4 md:mt-6">
          Shop the new Spring 2022 collection today
        </p>
        <button className="w-[170px] bg-gray-100 text-[#2A254B] px-6 py-3 rounded-lg shadow hover:bg-red-400 mt-auto">
          <Link href="/ProdListing">View Collection</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
