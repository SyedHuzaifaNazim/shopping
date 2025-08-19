// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
          <div className="bg-white rounded-lg shadow p-4 hidden lg:block">
            <h3 className="font-bold text-lg mb-4">All Categories</h3>
            <ul className="space-y-2">
              {[...Array(12)].map((_, i) => (
                <li key={i} className="flex items-center justify-between py-1 border-b border-gray-100 hover:text-indigo-700 cursor-pointer">
                  <span>Category {i + 1}</span>
                  <span>&gt;</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Main Banner */}
          <div className="lg:col-span-3 rounded-lg overflow-hidden relative">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-64 md:h-80 rounded-lg flex items-center">
              <div className="pl-10 text-white max-w-md">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Big Billion Days Sale!</h2>
                <p className="mb-4">Up to 70% off on electronics, fashion and more</p>
                <button className="bg-white text-indigo-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Small Banners */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
              <span className="text-center">Deal of the Day</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;