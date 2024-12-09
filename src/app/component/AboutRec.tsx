import Image from "next/image";
import React from "react";
import SecHero from "./SecHero";

const AboutRecent = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2  ">
        {/* Image Section */}
        <div className="mt-[60px] md:h-[450px] flex items-center">
          <Image
            src="/about1.png"
            alt="block"
            width={700}
            height={450}
            className="md:w-[710px] w-[389px] h-full object-cover"
          />
        </div>
        {/* Text Box */}
        <div className=" bg-[#F9F9F9] w-[389px] md:w-[720px] md:h-[450px] shadow-lg p-8 flex flex-col mt-[60px] ">
          <h2 className="md:w-[460px] text-[24px] font-normal text-[#2A254B] md:ml-[92px] ">
            Our service isn’t just personal, it’s actually hyper personally
            exquisite
          </h2>
          <p className="md:w-[536px] text-[#2A254B] text-[16px] leading-[27px] mt-6 md:ml-[92px] ">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market. <br />{" "}
            <br /> Handmade, and lovingly crafted furniture and homeware is what
            we live, breathe and design so our Chelsea boutique become the
            hotbed for the London interior design community.
          </p>
          <span>
            {" "}
            <button className="md:w-[170px] w-[389px]  bg-gray-100 text-[#2A254B] px-6 py-3 rounded-lg shadow hover:bg-red-200 mt-[60px] md:mt-[120px] md:ml-[100px] ">
              View Our Products
            </button>
          </span>
        </div>
      </div>
      <SecHero />
    </div>
  );
};

export default AboutRecent;
