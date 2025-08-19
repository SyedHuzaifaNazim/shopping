// src/components/DealsSection.jsx
import React from 'react';
import { FiClock } from 'react-icons/fi';

const DealsSection = () => {
  const deals = [
    { name: 'Smartphones', discount: 'Up to 40% off', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Laptops', discount: 'Up to 30% off', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Headphones', discount: 'Up to 60% off', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Smart Watches', discount: 'Up to 55% off', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Deals of the Day</h2>
          <div className="flex items-center text-red-600 font-medium">
            <FiClock className="mr-2" />
            <span>23:59:59 left</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {deals.map((deal, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
              <img src={deal.image} alt={deal.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{deal.name}</h3>
                <p className="text-indigo-700 font-medium">{deal.discount}</p>
                <div className="mt-3 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-red-500 h-full rounded-full" 
                    style={{ width: `${70 - index * 10}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">{50 - index * 5} sold</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsSection;