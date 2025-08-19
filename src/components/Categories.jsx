// src/components/Categories.jsx
import React from 'react';

const Categories = () => {
  const categories = [
    { name: 'Mobile & Tablets', count: 120 },
    { name: 'Electronics', count: 85 },
    { name: 'TVs & Appliances', count: 64 },
    { name: 'Fashion', count: 230 },
    { name: 'Beauty', count: 42 },
    { name: 'Home & Kitchen', count: 156 },
    { name: 'Furniture', count: 73 },
    { name: 'Grocery', count: 99 },
  ];

  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Shop By Category</h2>
          <button className="text-indigo-700 font-medium">View All</button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition cursor-pointer"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
              <span className="font-medium text-center">{category.name}</span>
              <span className="text-sm text-gray-500">{category.count} items</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;