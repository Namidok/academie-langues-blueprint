
import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/coursesData';

const countryInfo = {
  german: {
    countryKey: 'germany',
    keyPoints: [
      "Europe's largest economy",
      "World leader in engineering and technology",
      "Rich cultural and academic heritage",
      "High quality of life and education"
    ],
    image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&q=80"
  },
  french: {
    countryKey: 'france',
    keyPoints: [
      "Cultural and artistic capital",
      "Leading destination for tourism",
      "Excellence in fashion and luxury industry",
      "Rich culinary heritage"
    ],
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80"
  },
  spanish: {
    countryKey: 'spain',
    keyPoints: [
      "Growing global business language",
      "Rich literary and artistic tradition",
      "Gateway to Latin American markets",
      "Vibrant cultural experience"
    ],
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80"
  },
  japanese: {
    countryKey: 'japan',
    keyPoints: [
      "Technological innovation hub",
      "Rich traditional culture",
      "Leader in electronics and automotive",
      "Unique work culture"
    ],
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80"
  }
};

const CourseDetails = () => {
  const { language } = useParams();
  const { translate } = useLanguage();
  
  if (!language || !countryInfo[language as keyof typeof countryInfo]) {
    return <div>{translate('courses.notFound')}</div>;
  }

  const info = countryInfo[language as keyof typeof countryInfo];
  const countryKey = info.countryKey;

  return (
    <div className="min-h-screen bg-white">
      <header 
        className="h-[40vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${info.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">{translate(`country.${countryKey}.title`)}</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">{translate('courseDetails.about')} {translate(`country.${countryKey}.title`)}</h2>
            <p className="text-lg text-gray-700 mb-8">{translate(`country.${countryKey}.description`)}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {info.keyPoints.map((point, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-800">{point}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-primary/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">{translate('courseDetails.availableCourses')}</h2>
            <div className="space-y-6">
              {coursesData[language as keyof typeof coursesData].courses.map((course, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{course.type}</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">{translate('courseDetails.duration')}</p>
                      <p className="font-medium">{course.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{translate('courseDetails.fee')}</p>
                      <p className="font-medium">{course.fee}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{translate('courseDetails.equivalent')}</p>
                      <p className="font-medium">{course.equivalent}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;
