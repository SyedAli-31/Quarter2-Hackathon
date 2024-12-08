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
    <div className="bg-[#F9F9F9] h-[450px]">
    <div className="bg-[#FFFFFF] w-[1270px] h-[360px] flex flex-col justify-center items-center ml-[90px]  translate-y-[45px]">
      <h2 className="text-[#2A254B] text-[36px] font-normal mb-4">Join the club and get the benefits</h2>
      <p className="text-[#2A254B] text-[16px] font-normal text-center mb-8">
        Sign up for our newsletter and receive exclusive offers on new <br /> ranges, sales,
        pop-up stores, and more.
      </p>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-[350px] h-[50px] px-4 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
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
