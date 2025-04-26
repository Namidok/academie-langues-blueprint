
import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Académie de Langues étrangères
        </h1>
        <p className="font-inter text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
          Discover the world through language learning: French, Spanish, German, and Japanese courses
        </p>
      </div>
    </header>
  );
};

export default Header;
