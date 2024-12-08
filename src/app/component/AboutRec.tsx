import Image from "next/image";
import React from "react";
import SecHero from "./SecHero";

const AboutRecent = () => {
  return (
    <div>
    <div className="grid grid-cols-2  ">
        {/* Image Section */}
      <div className="mt-[60px] h-[450px] flex items-center">
        <Image
          src="/Block1.png"
          alt="block"
          width={700}
          height={450}
          className="w-[710px] h-full object-cover"
        />
      </div>
      {/* Text Box */}
      <div className=" bg-[#F9F9F9] w-[720px] h-[450px] shadow-lg p-8 flex flex-col   mt-[60px] ">
        <h2 className="w-[460px] text-[24px] font-normal text-[#2A254B] ml-[92px] ">
        Our service isn’t just personal, it’s actually
        hyper personally exquisite
        </h2>
        <p className="w-[536px] text-[#2A254B] text-[16px] leading-[27px] mt-6 ml-[92px] ">
        When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br /> <br /> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
        </p>
        <button className="w-[170px] bg-[#F9F9F926] text-[#2A254B] px-6 py-3 rounded shadow hover:bg-gray-200 mt-[80px] ml-[92px]">
          Get In Touch
        </button>
      </div>
      </div>
     <SecHero/>
      
    </div>
  );
};

export default AboutRecent;
