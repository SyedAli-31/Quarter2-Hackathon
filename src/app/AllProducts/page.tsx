import React from "react";
import Carthead from "../component/Carthead";
import Image from "next/image";
import Link from "next/link";

import LastThirdhero from "../component/LastThirdhero";
import Footer from "../component/footer";
const AllProducts = () => {
  return (
    <div>
      <Carthead />
      <div className="">
        <Image src={"/Allprod1.png"} alt="allprod" width={1440} height={200} />
        <div className="mt-[80px]">
          <LastThirdhero />
          <div className="mt-[150px]">
            <LastThirdhero />
          </div>
          <div className="mt-[150px]">
            <LastThirdhero />
          </div>
          {/* Center the button */}
          <div className="flex justify-center mt-[150px]">
            <button className="w-[170px] bg-[#F9F9F9] text-[#2A254B]  text-[16px] px-6 py-3 rounded-lg shadow hover:bg-gray-200 flex text-center justify-center">
              <Link href="/AllProducts"> View Collection</Link>
            </button>
            
          </div>
          <div className="mt-[50px]">
          <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
