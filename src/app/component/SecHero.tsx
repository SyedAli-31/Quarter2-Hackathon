import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";
import Link from 'next/link';
const SecHero = () => {
  return (
    <div>
        <section className= "w-[320px] md:w-full md:h-[450px] text-gray-600 body-font ml-18">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        
        
      </div>
      <p className="w-full leading-[33.6px] text-[22px] md:text-[24px] font-normal text-[#2A254B] text-center">
      What makes our brand different
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className=" md:w-[305px] h-[284px] p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
           
          <h3 className="tracking-widest  text-xs font-medium title-font">
          <TbTruckDelivery className='w-[24px] h-[24px] '/>
          </h3>
          <h2 className="text-[20px] text-[#2A254B] font-normal leading-[28px] mt-4">
          Next day as standard
          </h2>
          <h4 className="leading-relaxed text-base mt-2">
          Order before 3pm and get your order the next day as standard <br /> <p className='text-gray-100'>.</p>
          </h4>
        </div>
      </div>
      <div className="md:w-[305px] h-[244px] p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
           
          <h3 className="tracking-widest font-medium title-font">
          <IoIosCheckmarkCircleOutline className='w-[24px] h-[24px] ' />

          </h3>
          <h2 className="text-[20px] text-[#2A254B] font-normal leading-[28px]  mt-4">
          Made by true artisans
          </h2>
          <p className="leading-relaxed text-base mt-2">
          Handmade crafted goods made with real passion and craftmanship
          </p>
        </div>
      </div>
      <div className="md:w-[305px] h-[244px] p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
           
          <h3 className="tracking-widest   text-xs font-medium title-font">
          <CiCreditCard1 className='w-[24px] h-[24px] ' />

          </h3>
          <h2 className="text-[20px] text-[#2A254B] font-normal leading-[28px] mt-4">
          Unbeatable prices
          </h2>
          <p className="leading-relaxed text-base mt-2">
          For our materials and quality you won’t find better prices anywhere
          </p>
        </div>
      </div>
      <div className="md:w-[305px] h-[244px] p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          
          <h3 className="tracking-widest  text-xs font-medium title-font">
          <LuSprout className='w-[24px] h-[24px] ' />
          </h3>
          <h2 className="text-[20px] text-[#2A254B] font-normal leading-[28px] mt-4">
          Recycled packaging
          </h2>
          <p className="leading-relaxed text-base mt-2">
          We use 100% recycled to ensure our footprint is more manageable
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default SecHero