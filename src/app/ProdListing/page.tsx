import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import ProdNav from "../component/ProdNav";
import ProdRec from "../component/ProdRec";
import Aboutlast from "../component/Aboutlast";
import AboutFooter from "../component/AboutFooter";

const ProdListing = () => {
  return (
    <div className="md:w-[1425px] w-[389px]">
      <div className="h-[41px] md:w-[1425px] w-[389px] grid grid-cols-[65%_35%] bg-[#2A254B] text-[#FFFFFF] items-center text-[14px] font-normal ">
              <h2 className="flex  w-[318px] md:w-auto md:ml-[450px]  ">
                <TbTruckDelivery className="w-[40px] md:mt-0 mt-2 h-[20px] mr-1" />
                <p className=" text-[14px]">Free delivery on all orders over £50 with code easter checkout</p>
              </h2>
              <h2 className="text-end md:ml-0 ml-8 mr-2">X</h2>
            </div>
      <ProdNav />
      <ProdRec />
      <Aboutlast />
      <AboutFooter />
    </div>
  );
};

export default ProdListing;
