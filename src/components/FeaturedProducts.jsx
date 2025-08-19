// src/components/FeaturedProducts.jsx
import React from 'react';
import { FiStar } from 'react-icons/fi';

const FeaturedProducts = () => {
  const products = [
    { name: 'Wireless Bluetooth Headphones', price: '₹1,299', originalPrice: '₹2,499', rating: 4.5 },
    { name: 'Smart Fitness Band', price: '₹1,799', originalPrice: '₹3,999', rating: 4.2 },
    { name: 'Portable Power Bank', price: '₹999', originalPrice: '₹1,799', rating: 4.7 },
    { name: 'Wireless Mouse', price: '₹499', originalPrice: '₹899', rating: 4.0 },
    { name: 'Mechanical Keyboard', price: '₹2,199', originalPrice: '₹3,499', rating: 4.8 },
    { name: 'USB-C Hub Adapter', price: '₹1,099', originalPrice: '₹1,999', rating: 4.3 },
    { name: 'Bluetooth Speaker', price: '₹1,499', originalPrice: '₹2,299', rating: 4.6 },
    { name: 'Gaming Controller', price: '₹1,899', originalPrice: '₹2,999', rating: 4.1 },
  ];

  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <button className="text-indigo-700 font-medium">View All</button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border border-gray-200 rounded-lg hover:shadow-md transition overflow-hidden">
              <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
              <div className="p-4">
                <h3 className="font-medium mb-1 line-clamp-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                        size={16} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-lg">{product.price}</span>
                  <span className="text-gray-500 line-through text-sm ml-2">{product.originalPrice}</span>
                  <span className="text-green-600 font-medium text-sm ml-2">
                    {Math.round((1 - parseInt(product.price.replace(/\D/g, '')) / 
                     parseInt(product.originalPrice.replace(/\D/g, '')) * 100}% off
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;