"use client";
import React, { useState, useEffect } from "react";
import SanityClient from "@sanity/client";
import { useRouter } from "next/navigation";
import Carthead from "../component/Carthead";
import Footer from "../component/footer";
import Image from "next/image";

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
  dimensions: string;
  category: {
    name: string;
  };
}

const ProdListing = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState<string | null>(null); // Track category name
  const [category, setCategory] = useState<string | null>(null); // Store category fetched from URL
  const router = useRouter();

  // Fetch category from URL after the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const categoryFromURL = new URLSearchParams(window.location.search).get("category");
      setCategory(categoryFromURL);
    }
  }, []);

  const fetchProducts = async (category: string | null) => {
    try {
      const query = category
        ? `*[_type == 'product' && category->name == $category] {
            _id,
            name,
            slug,
            price,
            description,
            "imageUrl": image.asset->url,
            tags,
            "dimensions": dimensions.depth + " x " + dimensions.width + " x " + dimensions.height,
            category->{name} // Fetch category name properly
          }`
        : `*[_type == 'product'] {
            _id,
            name,
            slug,
            price,
            description,
            "imageUrl": image.asset->url,
            tags,
            "dimensions": dimensions.depth + " x " + dimensions.width + " x " + dimensions.height,
            category->{name} // Fetch category name properly
          }`;

      const data = await sanity.fetch(query, { category });
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  useEffect(() => {
    if (category) {
      setCategoryName(category);
      fetchProducts(category);
    } else {
      setCategoryName("All Products"); // Fallback for 'All Products'
      fetchProducts(null);  // Fetch all products
    }
  }, [category]);  // Only depend on 'category'

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
        <h1 className="text-center text-2xl font-semibold mb-6 mt-2">
          {categoryName && categoryName !== "All Products" ? `${categoryName} Products` : "Products"}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mx-auto">
          {products.map((product) => (
            <div
              key={`${product._id}-${product.slug.current}-${product.name}`}
              className="product-card border p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-lg font-medium mb-2">{product.name}</h2>
              {product.imageUrl && typeof product.imageUrl === "string" && (
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
                <strong>🔥{product.category.name}</strong> {product.tags.join(", ")}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Dimensions:</strong> {product.dimensions || "Not Specified"}
              </p>
              <button
                onClick={() => {
                  const url = `/ProdDetail?name=${encodeURIComponent(
                    product.name
                  )}&price=${encodeURIComponent(product.price)}&description=${encodeURIComponent(
                    product.description
                  )}&tags=${encodeURIComponent(product.tags.join(", "))}&dimensions=${encodeURIComponent(
                    product.dimensions
                  )}&imageUrl=${encodeURIComponent(product.imageUrl)}`;
                  router.push(url);
                }}
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

export default ProdListing;
