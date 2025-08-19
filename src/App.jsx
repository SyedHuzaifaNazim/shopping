// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import DealsSection from './components/DealsSection';
// import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Categories />
        <DealsSection />
        {/* <FeaturedProducts /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;