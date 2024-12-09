import React from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="md:w-full w-[340px] bg-gray-900 text-white py-8">
      <div className="container md:mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[200px_200px_200px_600px] gap-8">
          <div>
            <h3 className="font-bold mb-4 text-[16px] ">Menu</h3>
            <ul className='text-[14px] space-y-2'>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Recently Viewed</a></li>
              <li><a href="#">Popular This Week</a></li>
              <li><a href="#">All Products</a></li>
            </ul>
          </div>

          <div>
            <h3 className=" font-bold mb-4 text-[16px]  ">Categories</h3>
            <ul className='text-[14px] space-y-2'>
              <li><a href="#">Crockery</a></li>
              <li><a href="#">Furniture</a></li>
              <li><a href="#">Homeware</a></li>
              <li><a href="#">Plant Pots</a></li>
              <li><a href="#">Chairs</a></li>
              <li><a href="#">Crockery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-[16px] ">Our Company</h3>
            <ul className='text-[14px] space-y-2 '>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Vacancies</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Returns Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Join Our Mailing List</h3>
            <form className='flex'>
              <input type="email" placeholder="your@email.com" className="md:w-[590px] h-[55px] border border-gray-700 rounded-l-md px-4 py-2 mb-4" />
              <button type="submit" className="w-[60px] md:w-[90px] h-[55px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:px-4 rounded-r">SignUp</button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="flex justify-between items-center">
            <p>&copy; 2022 Avion LTD</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300"><FaLinkedin />
              </a>
              <a href="#" className="text-white hover:text-gray-300"><IoLogoFacebook /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaInstagram /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaSkype />
              </a>
              <a href="#" className="text-white hover:text-gray-300"><FaTwitter /></a>
              <a href="#" className="text-white hover:text-gray-300"><IoLogoPinterest /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;