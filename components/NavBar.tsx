
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { GiSofa } from "react-icons/gi";
import { PiShoppingCart } from "react-icons/pi";


export default function NavBar() {
  return (
    
    <header className="bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="bg-blue-950 text-white py-2 text-sm flex justify-between items-center px-6">
        <p className="flex-1 text-center">Free Shipping On All Orders Over $50</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span>English</span>
            <RiArrowDropDownLine className="text-3xl" />
          </div>
          <div className="flex items-center gap-2">
            <span>FAQ's</span>
            <IoIosHelpCircleOutline className="text-xl" />
            <span>Need Help</span>
          </div>
        </div>
      </div>

      

      {/* Main Navigation */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="p-1 border-2 border-yellow-500 rounded">
            <GiSofa className="text-teal-500 text-3xl" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Comforty</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <a href="#" className="text-teal-600 hover:text-teal-800">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Shop
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Product
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Pages
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            About
          </a>
        </nav>

        {/* Cart and Contact Section */}
        <div className="flex items-center gap-6">
          {/* Cart */}
          <div className="flex items-center gap-2">
            <PiShoppingCart className="text-black text-xl" />
            <a href="#" className="text-gray-800 font-medium">
              Cart
            </a>
            <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
              2
            </span>
          </div>

          {/* Contact */}
          <div>
            <a
              href="tel:8085550111"
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Contact: (808) 555-0111
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

