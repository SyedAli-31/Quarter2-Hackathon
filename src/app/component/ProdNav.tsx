import { FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import Navbar from "./Navbar";
import Link from "next/link";

const ProdNav = () => {
  return (
    <div>
      <div>
        <div className=" grid lg:grid-cols-[20px_1050px_300px] mt-2 items-center">
          <div className="ml-2 text-[24px] font-normal">
            <Link href="/ ">Avion</Link>
          </div>
          <div className="text-center  ml-[180px] text-text">
            <Navbar />
          </div>

          <div className="flex gap-8 justify-end">
            <div className="flex gap-4 mt-1">
              <FiSearch className="w-[20px] h-[20px]" />
              <FaShoppingCart className="w-[20px] h-[20px]" />
              <VscAccount className="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>

        <div className="h-[1px] w-[1350px] ml-5 bg-[#0000001A]" />
      </div>
    </div>
  );
};

export default ProdNav;
