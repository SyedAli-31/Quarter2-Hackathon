"use client";
import React, { useState } from "react";
import Carthead from "../component/Carthead";
import Footer from "../component/footer";
import Image from "next/image";

function ShoppingCart() {
  const [cartItems] = useState([
    {
      id: 1,
      name: "Graystone vase",
      description: "A timeless ceramic vase with a tri color grey glaze.",
      price: 85,
      image: "/cart1.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Basic white vase",
      description: "Beautiful and simple, this is one for the classics.",
      price: 125,
      image: "/cart2.png",
      quantity: 1,
    },
  ]);

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="">
      <Carthead />
      <div className="bg-white w-full max-w-[1064px] mx-auto px-4 py-6">
        <h2 className="md:text-[36px] text-[32px] font-normal mb-4 text-start">
          Your shopping cart
        </h2>

        {/* Table for Desktop */}
        <div className="md:block hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[14px] font-normal border border-gray-300 p-4 text-start">
                  Product
                </th>
                <th className="text-[14px] font-normal border border-gray-300 p-4 text-center">
                  Quantity
                </th>
                <th className="text-[14px] font-normal border border-gray-300 p-4 text-center">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 p-4">
                    <div className="flex items-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={109}
                        height={130}
                        className="mr-4"
                      />
                      <div>
                        <p className="text-[20px] text-[#2A254B] font-normal">
                          {item.name}
                        </p>
                        <p className="text-[#2A254B]">{item.description}</p>
                        <p className="text-[#2A254B]">£{item.price}</p>
                      </div>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-300 p-4 text-right">
                    £{item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 py-6 border-b border-gray-300"
            >
              <div className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={109}
                  height={130}
                  className="mr-4"
                />
                <div className="flex-1">
                  <p className="text-[20px] font-normal text-[#2A254B]">
                    {item.name}
                  </p>
                  <p className="text-[#2A254B]">{item.description}</p>
                  <p className="text-[#2A254B]">£{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtotal Section */}
        <div className="mt-8 mr-2 ">
          <div>
            <p className="text-[24px] font-bold flex justify-end  text-[#4E4D93] ">
              <span>Subtotal:</span> £{calculateSubtotal()}
            </p>
            <p className="text-[14px] text-gray-600 flex justify-end">
              Taxes and shipping are calculated at checkout
            </p>
            <div className="md:flex md:justify-end ">
              <button className="bg-[#2A254B] md:w-[150px] w-[340px] h-[56px] hover:bg-blue-700 text-white font-bold ml-2 py-2 rounded mt-4">
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ShoppingCart;
