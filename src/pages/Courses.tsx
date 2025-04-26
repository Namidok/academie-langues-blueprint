
import React from 'react';
import CourseSection from '@/components/CourseSection';
import { useLanguage } from '../context/LanguageContext';

const coursesData = {
  french: {
    language: "FRENCH",
    nativeName: "Français",
    courses: [
      {
        type: "Basic (A1)",
        duration: "3 Months",
        fee: "6,800/-*",
        equivalent: "DELF 2 of 4 Levels by Alliance Française"
      },
      {
        type: "Advanced (A2)",
        duration: "3 Months",
        fee: "6,200/-*",
        equivalent: "DELF 2 of 4 Levels by Alliance Française"
      }
    ]
  },
  german: {
    language: "GERMAN",
    nativeName: "Deutsch",
    courses: [
      {
        type: "Basic (A1)",
        duration: "3 Months",
        fee: "7,800/-*",
        equivalent: "Deutsch 2 of 4 Levels by Goethe Institute"
      },
      {
        type: "Advanced (A2)",
        duration: "3 Months",
        fee: "5,200/-*",
        equivalent: "Deutsch 2 of 4 Levels by Goethe Institute"
      }
    ]
  },
  spanish: {
    language: "SPANISH",
    nativeName: "Español",
    courses: [
      {
        type: "Basic (A1)",
        duration: "3 Months",
        fee: "7,800/-*",
        equivalent: "DELE 2 of 4 Levels by Inistituto Cerventes"
      },
      {
        type: "Advanced (A2)",
        duration: "3 Months",
        fee: "5,200/-*",
        equivalent: "DELE 2 of 4 Levels by Inistituto Cerventes"
      }
    ]
  },
  japanese: {
    language: "JAPANESE",
    nativeName: "日本語",
    courses: [
      {
        type: "Level 5",
        duration: "3 Months",
        fee: "-",
        equivalent: "JLPT 2 of 5 Levels"
      }
    ]
  }
};

const Courses = () => {
  const { translate } = useLanguage();
  
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
        {Object.values(coursesData).map((data, index) => (
          <CourseSection
            key={index}
            language={data.language}
            nativeName={data.nativeName}
            courses={data.courses}
          />
        ))}
        
        <div className="container mx-auto px-4 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-primary">{translate('courses.additionalInfo.title')}</h3>
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
