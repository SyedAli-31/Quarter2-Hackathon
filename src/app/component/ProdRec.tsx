import Image from "next/image";
import React from "react";
import AmountInput from "./AmountInput";
import Link from "next/link";
import SecHero from "./SecHero";
import Thirdhero from "./Thirdhero";

const ProdRec = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2  gap-0">
        {" "}
        {/* Removed gap for mobile */}
        {/* Image Section */}
        <div className="md:mt-[60px] h-[400px] md:h-[800px] flex md:items-center">
          <Image
            src="/prod1.png"
            alt="block"
            width={720}
            height={800}
            className="md:w-[710px] w-[340px] h-[400px] md:h-[800px] object-cover"
          />
        </div>
        {/* Text Box */}
        <div className="bg-[#F9F9F9] w-[340px] md:w-[710px]  h-[800px] md:h-[800px] shadow-lg p-8 flex flex-col md:mt-[60px] mt-0">
          <h2 className="w-[460px] text-[24px] font-normal text-[#2A254B] md:ml-[92px]">
            <span>The Dandy Chair</span> <br />
            <span>£250</span>
          </h2>
          <div className="w-[200px] md:w-[536px] text-[#2A254B] text-[16px] leading-[27px] mt-6 ml:4 md:ml-[92px]">
            Description <br />
            <br />A timeless design, with premium materials features as one of
            our most popular and iconic pieces. The dandy chair is perfect for
            any stylish living space with beech legs and lambskin leather
            upholstery.
            <ul className="list-disc list-inside mt-2">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
            <div>
              <h1>Dimensions</h1>
              <div className="flex gap-12 mt-6">
                <span>Height</span>
                <span>Width</span>
                <span>Depth</span>
              </div>
              <div className="flex gap-12 mt-4">
                <span>110cm</span>
                <span>75cm</span>
                <span>50cm</span>
              </div>
              <div className="grid md:grid-cols-2 md:mt-[60px]">
                <AmountInput />
                <button className="w-[140px] mt-[30px] md:mt-0 bg-[#2A254B] text-[#FFFFFF] px-6 py-3 shadow hover:bg-red-500 ml-5 md:ml-[92px]">
                  <Link href="/Cart"> Add to cart</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#2A254B] font-normal h-[80px] text-[20px] md:text-[32px] ml-[100px] mt-6">
        You Might Also Like
      </div>
      <Thirdhero />
      <SecHero />
    </div>
  );
};

export default ProdRec;
