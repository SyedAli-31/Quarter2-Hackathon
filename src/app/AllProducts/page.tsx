"use client";
import React, { useState, useEffect } from "react";
import SanityClient from "@sanity/client";
import Image from "next/image";

import { useRouter } from "next/navigation"; // For navigation
import Carthead from "../component/Carthead";
import Footer from "../component/footer";

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
  price: number;
  description: string;
  imageUrl: string;
  tags: string[];
  dimensions: string; // Dimensions formatted as a string
}

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter(); // Router hook for navigation

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
        tags,
        "dimensions": dimensions.depth + " x " + dimensions.width + " x " + dimensions.height // Format dimensions
      }`;
      const data = await sanity.fetch(query);
      setProducts(data); // Update the state with fetched data
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  // Add product to cart (navigate to ProdListing with product details)
  const addToCart = (product: Product) => {
    const url = `/ProdListing?name=${encodeURIComponent(
      product.name
    )}&price=${encodeURIComponent(product.price)}&description=${encodeURIComponent(
      product.description
    )}&tags=${encodeURIComponent(product.tags.join(", "))}&dimensions=${encodeURIComponent(
      product.dimensions
    )}&imageUrl=${encodeURIComponent(product.imageUrl)}`;
    router.push(url);
  };

  // Fetch products once when the component is mounted
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Carthead />
      <Image
        src={"/Allprod1.png"}
        alt="allprod"
        width={1440}
        height={200}
        className="md:w-[1440px] w-[389px]"
      />
      <div className="text-black">
        <h1 className="text-center text-2xl font-semibold mb-6">Products</h1>
        {/* Product Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mx-auto">
          {products.map((product) => (
            <div
              key={`${product._id}-${product.slug.current}-${product.name}`}
              className="product-card border p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-lg font-medium mb-2">{product.name}</h2>
              {/* <p className="text-sm text-gray-600 mb-2">{product.description}</p> */}
              
              {product.imageUrl && (
                <div className="relative w-full h-[200px] mb-4">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                
              )}
              <p className="font-bold text-xl mb-2">${product.price}</p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>🔥</strong> {product.tags.join(", ")}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Dimensions:</strong> {product.dimensions || "Not Specified"}
              </p>
              {/* Add to Cart button */}
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-[#F9F9F9] text-[#2A254B] text-sm px-6 py-2 rounded-lg shadow hover:bg-gray-200"
              >
                View Product
              </button>
            </div>
          ))}
        </div>
        <div className="mt-[50px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
