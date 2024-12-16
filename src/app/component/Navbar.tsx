import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:flex bg-[#FFFFFF] text-center gap-12 justify-center py-4">
      <span className="text-sm text-[#22202E] font-normal">
        <a href="#">Plant Pots</a>
      </span>
      <span className="text-sm font-normal">
        <a href="#">Ceramics</a>
      </span>
      <span className="text-sm font-normal">
        <a href="#">Tables</a>
      </span>
      <span className="text-sm font-normal">
        <a href="#">Chairs</a>
      </span>
      <span className="text-sm font-normal">
        <a href="#">Crockery</a>
      </span>
      <span className="text-sm font-normal">
        <a href="#">Tableware</a>
      </span>
      <span className="text-sm font-normal">
        <a href="#">Cutlery</a>
      </span>
    </div>
  );
};

export default Navbar;
