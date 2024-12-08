import React from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";

const AboutFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
        
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[250px_350px_200px_200px_200px] gap-8">
            <div className="space-y-2 ">
                <h2  className='text-[36px] font-normal'>Avion</h2>
                <p className='text-[14px] font-normal'>21 New York Street</p>
                <p  className='text-[14px] font-normal'>New York City</p>
                <p  className='text-[14px] font-normal'>United States of America</p>
                <p  className='text-[14px] font-normal'>432 34</p>
            </div>

             {/* Col 2 mailbox */}

          {/* icons */}
          <div className=""><h2>Social Links</h2>
          <div className="flex space-x-4 mt-6">
            
              <a href="#" className="text-white hover:text-gray-300"><FaLinkedin />
              </a>
              <a href="#" className="text-white hover:text-gray-300"><IoLogoFacebook /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaInstagram /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaSkype />
              </a>
              <a href="#" className="text-white hover:text-gray-300"><FaTwitter /></a>
              <a href="#" className="text-white hover:text-gray-300"><IoLogoPinterest /></a>
            </div></div>
          {/* col1 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[16px] ">Menu</h3>
            <ul className='text-[14px]'>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Recently Viewed</a></li>
              <li><a href="#">Popular This Week</a></li>
              <li><a href="#">All Products</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[16px] ">Categories</h3>
            <ul className='text-[14px]'>
              <li><a href="#">Crockery</a></li>
              <li><a href="#">Furniture</a></li>
              <li><a href="#">Homeware</a></li>
              <li><a href="#">Plant Pots</a></li>
              <li><a href="#">Chairs</a></li>
              <li><a href="#">Crockery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[16px] ">Our Company</h3>
            <ul className='text-[14px]'>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Vacancies</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Returns Policy</a></li>
            </ul>
          </div>
         
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="flex justify-between items-center">
            <p>&copy; 2022 Avion LTD</p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AboutFooter;