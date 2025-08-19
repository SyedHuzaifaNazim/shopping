// src/components/FeaturedProducts.jsx
import React from 'react';
import { FiStar } from 'react-icons/fi';

const FeaturedProducts = () => {
  const products = [
    { name: 'Wireless Bluetooth Headphones', price: '₹1,299', originalPrice: '₹2,499', rating: 4.5, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Smart Fitness Band', price: '₹1,799', originalPrice: '₹3,999', rating: 4.2, image: 'https://images.unsplash.com/photo-1575311373936-9a10091b72dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Portable Power Bank', price: '₹999', originalPrice: '₹1,799', rating: 4.7, image: 'https://images.unsplash.com/photo-1598931626145-7eeb1767fcf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Wireless Mouse', price: '₹499', originalPrice: '₹899', rating: 4.0, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Mechanical Keyboard', price: '₹2,199', originalPrice: '₹3,499', rating: 4.8, image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'USB-C Hub Adapter', price: '₹1,099', originalPrice: '₹1,999', rating: 4.3, image: 'https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Bluetooth Speaker', price: '₹1,499', originalPrice: '₹2,299', rating: 4.6, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Gaming Controller', price: '₹1,899', originalPrice: '₹2,999', rating: 4.1, image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  ];

  // Helper function to calculate discount percentage
  const calculateDiscount = (price, originalPrice) => {
    const priceNum = parseInt(price.replace(/[^0-9]/g, ''));
    const originalPriceNum = parseInt(originalPrice.replace(/[^0-9]/g, ''));
    const discount = Math.round(((originalPriceNum - priceNum) / originalPriceNum) * 100);
    return discount;
  };

  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <button className="text-indigo-700 font-medium">View All</button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product, index) => {
            const discount = calculateDiscount(product.price, product.originalPrice);
            
            return (
              <div key={index} className="border border-gray-200 rounded-lg hover:shadow-md transition overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
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
                  <div className="flex items-center flex-wrap">
                    <span className="font-bold text-lg">{product.price}</span>
                    <span className="text-gray-500 line-through text-sm ml-2">{product.originalPrice}</span>
                    <span className="text-green-600 font-medium text-sm ml-2">
                      {discount}% off
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;