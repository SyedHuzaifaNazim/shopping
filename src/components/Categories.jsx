// src/components/Categories.jsx
import React from 'react';

const Categories = () => {
  const categories = [
    { name: 'Mobile & Tablets', count: 120, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Electronics', count: 85, image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'TVs & Appliances', count: 64, image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Fashion', count: 230, image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Beauty', count: 42, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Home & Kitchen', count: 156, image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Furniture', count: 73, image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Grocery', count: 99, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
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
              <img src={category.image} alt={category.name} className="w-16 h-16 object-cover rounded-xl mb-2" />
              <span className="font-medium text-center text-sm">{category.name}</span>
              <span className="text-xs text-gray-500">{category.count} items</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;