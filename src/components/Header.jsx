// src/components/Header.jsx
import React, { useState } from 'react';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const categories = [
    'Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Grocery', 
    'Toys & Baby', 'Sports', 'Books', 'Automotive', 'More'
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-indigo-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between">
          <div>Welcome to SASTI Shopping - Pakistan's Most Affordable Online Store</div>
          <div className="flex space-x-4">
            <span>Help</span>
            <span>Track Order</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold text-indigo-700">SASTI</div>
            <span className="ml-1 text-xl font-light">Shopping</span>
          </div>
          
          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and categories..."
                className="w-full py-2 px-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="absolute right-0 top-0 h-full px-4 text-gray-600">
                <FiSearch size={20} />
              </button>
            </div>
          </div>
          
          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center">
              <FiUser size={20} className="text-gray-600" />
              <span className="ml-1">Account</span>
            </button>
            <button className="hidden md:flex items-center">
              <FiHeart size={20} className="text-gray-600" />
              <span className="ml-1">Wishlist</span>
            </button>
            <button className="flex items-center relative">
              <FiShoppingCart size={20} className="text-gray-600" />
              <span className="ml-1 hidden md:inline">Cart</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Categories Navigation */}
        <nav className="hidden md:flex justify-center mt-4">
          <ul className="flex space-x-6">
            {categories.map((category, index) => (
              <li key={index} className="font-medium text-gray-700 hover:text-indigo-700 cursor-pointer">
                {category}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-4 px-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="absolute right-0 top-0 h-full px-4 text-gray-600">
                <FiSearch size={20} />
              </button>
            </div>
            
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index} className="py-2 border-b border-gray-100">
                  {category}
                </li>
              ))}
              <li className="py-2 border-b border-gray-100">Account</li>
              <li className="py-2">Wishlist</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;