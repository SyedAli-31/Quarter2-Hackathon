import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import ProdNav from "../component/ProdNav";
import ProdRec from "../component/ProdRec";
import Aboutlast from "../component/Aboutlast";
import AboutFooter from "../component/AboutFooter";

const ProdListing = () => {
  return (
    <div>
      <div className="h-[41px] md:w-[1425px] w-[340px] grid grid-cols-[65%_35%] bg-[#2A254B] text-[#FFFFFF] items-center text-[14px] font-normal ">
        <h2 className="flex text-end md:ml-[450px] ">
          <TbTruckDelivery className="w-[30px] md:w-[20px] md:mt-0 mt-2 h-[20px] mr-1" />
          Free delivery on all orders over £50 with code easter checkout
        </h2>
        <h2 className="md:text-end md:ml-0 ml-8 mr-2">X</h2>
      </div>
      <ProdNav />
      <ProdRec />
      <Aboutlast />
      <AboutFooter />
    </div>
  );
};

export default ProdListing;
