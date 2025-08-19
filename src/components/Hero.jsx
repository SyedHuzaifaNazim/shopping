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
              {['Smartphones', 'Laptops', 'TVs', 'Headphones', 'Cameras', 'Watches', 'Home Appliances', 'Gaming', 'Accessories', 'Fashion', 'Books', 'Toys'].map((category, i) => (
                <li key={i} className="flex items-center justify-between py-1 border-b border-gray-100 hover:text-indigo-700 cursor-pointer">
                  <span>{category}</span>
                  <span>&gt;</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Main Banner */}
          <div className="lg:col-span-3 rounded-lg overflow-hidden relative">
            <div className="bg-cover bg-center h-64 md:h-80 rounded-lg flex items-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'}}>
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
          {[
            {title: 'Electronics', image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'},
            {title: 'Fashion', image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'},
            {title: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'},
            {title: 'Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'}
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-xl mb-2" />
              <span className="text-center">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;