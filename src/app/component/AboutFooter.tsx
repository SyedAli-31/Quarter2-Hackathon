import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";

const AboutFooter = () => {
  return (
    <footer className="bg-gray-900 md:w-full w-[389px] text-white py-8 ">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          {/* Left Column: Avion Branding */}
          <div className="space-y-2">
            <h2 className="text-[36px] font-normal">Avion</h2>
            <p className="text-[14px] font-normal">21 New York Street</p>
            <p className="text-[14px] font-normal">New York City</p>
            <p className="text-[14px] font-normal">United States of America</p>
            <p className="text-[14px] font-normal">432 34</p>
          </div>

          {/* Right Column: Links and Social Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-[16px]">
                Social Links
              </h3>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-white hover:text-gray-300">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <IoLogoFacebook />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <FaInstagram />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <FaSkype />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <IoLogoPinterest />
                </a>
              </div>
            </div>

            {/* Our Company Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-[16px]">
                Our Company
              </h3>
              <ul className="space-y-2 text-[14px]">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Vacancies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Returns Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Menu Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-[16px]">Menu</h3>
              <ul className="space-y-2 text-[14px]">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Recently Viewed
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Popular This Week
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    All Products
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-[14px]">&copy; 2022 Avion LTD</p>
        </div>
      </div>
    </footer>
  );
};

export default AboutFooter;
