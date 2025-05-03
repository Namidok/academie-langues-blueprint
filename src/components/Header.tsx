
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { translate } = useLanguage();
  
  return (
    <header className="bg-primary text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="font-['Old English Text MT'] block mb-2">Académie de Langues étrangères</span>
          {translate('home.title') !== "Académie de Langues étrangères" && (
            <span className="font-playfair">{translate('home.title')}</span>
          )}
        </h1>
        <p className="font-inter text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
          {translate('home.subtitle')}
        </p>
      </div>
    </header>
  );
};

export default Header;
