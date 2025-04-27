
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseSection from '@/components/CourseSection';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/coursesData';

const Courses = () => {
  const { translate } = useLanguage();
  const navigate = useNavigate();

  const handleCourseClick = (language: string) => {
    navigate(`/courses/${language.toLowerCase()}`);
  };
  
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-primary text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-2">
            {translate('courses.title')}
          </h1>
          <p className="font-inter text-lg text-gray-100 max-w-2xl mx-auto">
            {translate('courses.subtitle')}
          </p>
        </div>
      </header>
      
      <main className="py-8">
        <div className="container mx-auto px-4 mb-12">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-4">Opportunities Abroad</h2>
            <p className="mb-4">
              Learning a foreign language opens doors to incredible opportunities abroad. Whether you're pursuing education, career advancement, or personal growth, mastering the local language of your destination country is crucial for:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Enhanced career prospects in international companies</li>
              <li>Better integration into local communities</li>
              <li>Access to education at prestigious foreign universities</li>
              <li>Rich cultural understanding and authentic experiences</li>
              <li>Building meaningful relationships with locals</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4 mb-12">
          {Object.entries(coursesData).map(([key, data]) => (
            <div 
              key={key}
              onClick={() => handleCourseClick(data.language)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{data.language}</h3>
                <p className="text-gray-600">{data.nativeName}</p>
                <button className="mt-4 text-primary hover:text-primary-dark">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-primary">
              {translate('courses.additionalInfo.title')}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span>{translate('courses.additionalInfo.item1')}</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span>{translate('courses.additionalInfo.item2')}</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span>{translate('courses.additionalInfo.item3')}</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span>{translate('courses.additionalInfo.item4')}</span>
              </li>
              <li className="flex items-center font-bold">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span>{translate('courses.additionalInfo.item5')}</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Courses;
