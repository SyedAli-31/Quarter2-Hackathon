"use client"; // For Next.js to handle this as a client-side component

import React, { useState, useEffect } from "react";
import SanityClient from "@sanity/client";
import Image from "next/image";
import Link from "next/link"; // For "View Collection" button

const sanity = SanityClient({
  projectId: "gvgizwoi",
  dataset: "production",
  apiVersion: "2024-01-04",
  useCdn: true,
});

interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  // price: number;
  // description: string;
  imageUrl: string;
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // Fetch products from Sanity
  const fetchProducts = async () => {
    try {
      const query = `*[_type == 'product'] {
        _id,
        name,
        slug,
        price,
        description,
        "imageUrl": image.asset->url,
        tags
      }`;
      const data = await sanity.fetch(query);
      setProducts(data.slice(0, 4)); // Limit to only 4 products
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to cart array
  };

  // Fetch products once when the component is mounted
  useEffect(() => {
    fetchProducts(); // Fetch the products on component mount
  }, []);

  return (
    <div className="text-black">
      <h1 className="text-center text-2xl font-semibold mb-6 ">Products</h1>
      {/* Product Grid Layout with 4 items per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mx-auto  ">
        {products.map((product) => (
          <div
            key={`${product._id}-${product.slug.current}-${product.name}`}
            className="product-card border p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-lg font-medium mb-2">{product.name}</h2>
            {/* <p className="text-sm text-gray-600 mb-2">{product.description}</p> */}
            {/* <p className="font-bold text-xl mb-2">${product.price}</p> */}
            {product.imageUrl && (
              <div className="relative w-full h-[200px] mb-4">
                <Image
                  src={product.imageUrl} // Image URL from Sanity
                  alt={product.name}
                  layout="fill"
                  objectFit="cover" // Ensure image covers the area without distortion
                  className="rounded-lg"
                />
              </div>
            )}
            <p className="text-sm text-black mb-4">
              <strong>Tags:</strong> {product.tags.join(", ")}
            </p>
            {/* Add to Cart button */}
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-[#e4ee8d] text-[#2A254B] text-sm px-6 py-2 rounded-lg shadow hover:bg-gray-200"
            >
              View Product
            </button>
          </div>
        ))}
      </div>
      {/* View Collection button */}
      <div className="flex justify-center mt-6">
        <Link href="/AllProducts">
          <button className="bg-[#e4ee8d] text-[#2A254B] text-lg px-6 py-3 rounded-lg shadow hover:bg-gray-200">
            View Collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCards;
