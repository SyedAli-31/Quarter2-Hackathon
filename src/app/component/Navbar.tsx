"use client";
import React, { useState, useEffect } from "react";
import SanityClient from "@sanity/client";
import Link from "next/link"; // For navigation

const sanity = SanityClient({
  projectId: "gvgizwoi",
  dataset: "production",
  apiVersion: "2024-01-04",
  useCdn: true,
});

interface Category {
  _id: string;
  name: string;
}

const Navbar = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  // Fetch categories from Sanity
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await sanity.fetch<Category[]>(`*[_type == 'category']{
          _id,
          name
        }`);
        setCategories(data);
      } catch (error) {
        console.error("Error Fetching Categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="hidden lg:flex bg-[#FFFFFF] text-center gap-12 justify-center py-4">
      {categories.map((category) => (
        <Link key={category._id} href={`/ProdListing?category=${category.name}`}>
          <span className="text-sm font-normal">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
