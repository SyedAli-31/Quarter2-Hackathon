"use client";
import React from "react";
import Carthead from "../component/Carthead";

import { useState } from "react";
import Footer from "../component/footer";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
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
      <div className="bg-white w-[1064px] h-full flex flex-col mt-8 ml-[188px]">
        <h2 className="text-[36px] font-normal mb-4 text-start">
          Your shopping cart
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-[14px] font-normal border border-gray-300 p-4 text-start">
                Product
              </th>
              <th className="text-[14px] font-normal border border-gray-300 p-4">
                Quantity
              </th>
              <th className="text-[14px] font-normal border border-gray-300 p-4">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className=" border border-gray-300 p-4">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[109px] h-[130px] mr-4"
                    />
                    <div className="h-[110px]">
                      <p className="text-[20px] text-[#2A254B] font-normal">
                        {item.name}
                      </p>
                      <p className="text-[#2A254B] w-[185px] ">
                        {item.description}
                      </p>
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
        <div className="mt-8 ">
          <div>
            <p className="text-lg font-bold flex justify-end text-[#4E4D93] ">
              <span>Subtotal:</span> £{calculateSubtotal()}
            </p>
            <p className="text-gray-600 flex justify-end">
              Taxes and shipping are calculated at checkout
            </p>
            <div className="flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[30px]">
        <Footer />
      </div>
    </div>
  );
}

export default ShoppingCart;
