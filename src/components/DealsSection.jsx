// src/components/DealsSection.jsx
import React from 'react';
import { FiClock } from 'react-icons/fi';

const DealsSection = () => {
  const deals = [
    { name: 'Smartphones', discount: 'Up to 40% off' },
    { name: 'Laptops', discount: 'Up to 30% off' },
    { name: 'Headphones', discount: 'Up to 60% off' },
    { name: 'Smart Watches', discount: 'Up to 55% off' },
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
              <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
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