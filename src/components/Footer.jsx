import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    
    <footer className="bg-gray-600 text-black py-8 bottom-0 w-full bg-opacity-50 mt-auto">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="./user1.png" alt="Logo" className="h-auto w-auto" />
          <p>&copy; 2022 Harry. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-700 text-xl text-gray-300"><FaFacebook /></a>
          <a href="#" className="hover:text-blue-900 text-xl text-gray-300"><FaTwitter /></a>
          <a href="#" className="hover:text-orange-700 text-xl text-gray-300"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
