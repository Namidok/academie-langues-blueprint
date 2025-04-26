
import React from 'react';
import { Avatar } from "@/components/ui/avatar";
import { useLanguage } from '../context/LanguageContext';

const AboutUs = () => {
  const { translate } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-playfair font-bold text-primary mb-8">
        {translate('about.title')}
      </h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-2xl font-playfair font-semibold text-secondary">
            {translate('about.director.name')}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {translate('about.director.description')}
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">
              {translate('about.director.achievements.title')}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{translate('about.director.achievements.item1')}</li>
              <li>{translate('about.director.achievements.item2')}</li>
              <li>{translate('about.director.achievements.item3')}</li>
            </ul>
          </div>
        </div>
        
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/lovable-uploads/c07d8740-5565-4518-8810-393c2c147a79.png"
              alt="Director"
              className="w-full h-auto"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="font-semibold text-lg text-primary">{translate('about.director.position')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
