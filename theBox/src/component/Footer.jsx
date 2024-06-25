import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import logo from '../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 ">
      <div className="container mx-auto py-8 px-4 flex flex-wrap flex-col md:flex-row justify-between items-center ">
        <div className="mb-8 md:mb-0 ">
          <address className="not-italic mb-4">
            <p className="text-gray-600">
              <strong className="text-blue-700">ADDRESS:</strong> 6391 Elgin St. Celina, Delaware 10299
            </p>
            <p className="text-gray-600">
              <strong className="text-blue-700">PHONE:</strong> +84 1102 2703
            </p>
            <p className="text-gray-600">
              <strong className="text-blue-700">EMAIL:</strong> hello@thebox.com
            </p>
          </address>
          <div className="flex items-center justify-center">
            <img src={logo} alt="TheBox" className="w-12 h-12 mr-2" /> {/* Replace 'logo.png' with your logo image */}
            <span className="text-2xl font-bold text-blue-700">TheBox</span>
          </div>
        </div>
        <div className='rightside flex flex-col'>

        
        <div className="flex flex-col">
          <h3 className="text-blue-700 font-semibold mb-2">NEWSLETTER:</h3>
          <div className="flex">
            <input
              type="email"
              className="p-2 border border-gray-300 rounded-l-md focus:outline-none"
              placeholder="Your email here"
            />
            <button className="p-2 bg-orange-500 text-white rounded-r-md">Subscribe</button>
          </div>
        </div>
        <div className='pt-3 flex flex-col justify-center items-center'>
          <h3 className="text-blue-700 font-semibold mb-2">SOCIAL:</h3>
          <div className="flex  space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-700">
              <CiFacebook className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700">
              <FaLinkedinIn className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700">
              <FaXTwitter className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      </div>
      <div className="bg-blue-700 text-white py-4">
        <div className="container mx-auto text-center">
          TheBox Company © 2022. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

