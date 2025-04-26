
import React from 'react';
import Header from '@/components/Header';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';

const Home = () => {
  const { translate } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6 text-primary">{translate('home.about.title')}</h2>
              <p className="text-gray-700 mb-4">
                {translate('home.about.description1')}
              </p>
              <p className="text-gray-700 mb-4">
                {translate('home.about.description2')}
              </p>
              <p className="text-gray-700">
                {translate('home.about.description3')}
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-primary">{translate('home.achievements.title')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-gray-700">{translate('home.achievements.item1')}</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-gray-700">{translate('home.achievements.item2')}</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-gray-700">{translate('home.achievements.item3')}</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-gray-700">{translate('home.achievements.item4')}</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-gray-700">{translate('home.achievements.item5')}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-8 text-center text-primary">{translate('home.whyus.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">{translate('home.whyus.reason1.title')}</h3>
              <p className="text-gray-700">{translate('home.whyus.reason1.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">{translate('home.whyus.reason2.title')}</h3>
              <p className="text-gray-700">{translate('home.whyus.reason2.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">{translate('home.whyus.reason3.title')}</h3>
              <p className="text-gray-700">{translate('home.whyus.reason3.description')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
