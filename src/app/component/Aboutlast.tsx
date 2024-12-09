"use client"
import React, { useState } from "react";

const Aboutlast = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission (e.g., send to backend, display success message)
    console.log("Email submitted:", email);
  };

  return (
    <div className="bg-[#F9F9F9] h-[200px] md:h-[450px]">
    <div className="bg-[#FFFFFF] md:w-[1270px] md:h-[360px] flex flex-col justify-center md:items-center md:ml-[90px]  md:translate-y-[45px]">
      <h2 className="text-[#2A254B] text-[20px] md:text-[36px] font-normal md:ml-0 ml-2 mb-4">Join the club and get the benefits</h2>
      <p className="text-[#2A254B] w-[300px] md-w-full text-[10px] md:text-[16px] font-normal md:ml-0 ml-2 md:text-center mb-8">
        Sign up for our newsletter and receive exclusive offers on new <br /> ranges, sales,
        pop-up stores, and more.
      </p>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="md:w-[350px] w-[200px] h-[50px] px-4 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 md:ml-0 ml-2"
        />
        <button
          type="submit"
          className="  bg-[#2A254B] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
        >
          Sign up
        </button>
      </form>
      </div>
    </div>
  );
};

export default Aboutlast;
