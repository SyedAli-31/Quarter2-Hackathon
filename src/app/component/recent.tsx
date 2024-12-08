import Image from "next/image";
import React from "react";

const Recent = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Text Box */}
      <div className="bg-[#2A254B] w-[600px] h-[450px] shadow-lg p-8 flex flex-col justify-center mt-[60px] ml-[100px]">
        <h2 className="text-[32px] font-normal text-[#FFFFFF]">
          It started with a small idea
        </h2>
        <p className="text-[#FFFFFF] text-[18px] leading-[27px] mt-6">
          A global brand with local beginnings, our story began in a small studio in South London in early 2014
        </p>
        <button className="w-[170px] bg-[#F9F9F926] text-[#FFFFFF] px-6 py-3 rounded shadow hover:bg-gray-200 mt-[160px]">
          View Collection
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-[60px] h-[450px] flex items-center">
        <Image
          src="/Block1.png"
          alt="block"
          width={600}
          height={450}
          className="w-[600px] h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Recent;
