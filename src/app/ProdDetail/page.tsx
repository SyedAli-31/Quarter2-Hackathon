"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { TbTruckDelivery } from "react-icons/tb";
import ProdNav from "../component/ProdNav";
import Aboutlast from "../component/Aboutlast";
import AboutFooter from "../component/AboutFooter";
import Image from "next/image";
import Link from "next/link";
import Thirdhero from "../component/Thirdhero";

interface Product {
  name: string;
  price: string;
  description: string;
  tags: string;
  dimensions: string;
  imageUrl: string | null;
}

const ProdDetail = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    price: "",
    description: "",
    tags: "",
    dimensions: "",
    imageUrl: null,
  });

  // Ensure this code only runs on the client side
  const searchParams = typeof window !== "undefined" ? useSearchParams() : null;

  useEffect(() => {
    if (searchParams) {
      const name = searchParams.get("name");
      const price = searchParams.get("price");
      const description = searchParams.get("description");
      const tags = searchParams.get("tags");
      const dimensions = searchParams.get("dimensions");
      const imageUrl = searchParams.get("imageUrl");

      setProduct({
        name: name || "Product Name",
        price: price || "0",
        description: description || "No Description Available",
        tags: tags || "No Tags Available",
        dimensions: dimensions || "No Dimensions Specified",
        imageUrl: imageUrl || null,
      });
    }
  }, [searchParams]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const productIndex = cart.findIndex((item: any) => item.name === product.name);

    if (productIndex !== -1) {
      cart[productIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="md:w-[1420px] w-[389px]">
      {/* Delivery Banner */}
      <div className="h-[41px] md:w-[1425px] w-[389px] grid grid-cols-[65%_35%] bg-[#2A254B] text-[#FFFFFF] items-center text-[14px] font-normal ">
        <h2 className="flex w-[318px] md:w-auto md:ml-[450px]">
          <TbTruckDelivery className="w-[40px] md:mt-0 mt-2 h-[20px] mr-1" />
          <p className=" text-[14px]">
            Free delivery on all orders over £50 with code easter checkout
          </p>
        </h2>
        <h2 className="text-end md:ml-0 ml-8 mr-2">X</h2>
      </div>
      <ProdNav />
      {/* Product Details */}
      <div className="p-4">
        <div className="flex items-start space-x-6 ">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={720}
              height={800}
              className="md:w-[720px] w-[389px] h-[400px] md:h-[800px] object-cover md:mt-[60px] mt-0"
            />
          ) : (
            <div className="w-[300px] h-[300px] flex items-center justify-center bg-gray-200 rounded-lg">
              <p className="text-gray-500">No Image Available</p>
            </div>
          )}

          <div className="bg-[#F9F9F9] w-[389px] md:w-[720px] h-[800px] md:h-[800px] shadow-lg p-8 flex flex-col md:mt-[60px] mt-0">
            <h1 className="w-[460px] text-[24px] font-normal text-[#2A254B] md:ml-[92px] ml-6">
              {product.name}
              <p className="font-bold text-xl mb-4">Price: £{product.price}</p>
            </h1>
            <h2 className="w-[200px] md:w-[536px] text-[#2A254B] text-[16px] leading-[27px] mt-6 ml:4 md:ml-[92px] ml-6">
              <p>Description</p>
              <br />
              {product.description}
            </h2>
            <h3 className="w-[200px] md:w-[536px] text-[#2A254B] text-[16px] leading-[27px] mt-6 ml:4 md:ml-[92px] ml-6">
              <ul className="list-disc list-inside">
                {product.tags.split(",").map((tag, index) => (
                  <li key={index}>{tag.trim()}</li>
                ))}
              </ul>

              <p className="mt-5">
                <strong>Dimensions:</strong> <br />
                <br />
                {product.dimensions || "No Dimensions Specified"}
              </p>
            </h3>

            <div className="grid justify-center md:mt-[60px]">
              <button
                onClick={addToCart}
                className="w-[140px] mt-[30px] md:mt-0 bg-[#2A254B] text-[#FFFFFF] px-6 py-3 shadow hover:bg-red-500 ml-[70px] md:ml-[92px]"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#2A254B] font-normal h-[80px] text-[20px] md:text-[32px] ml-[100px] mt-6">
        You Might Also Like
      </div>
      <Thirdhero />
      <Aboutlast />
      <AboutFooter />
    </div>
  );
};

export default ProdDetail;
