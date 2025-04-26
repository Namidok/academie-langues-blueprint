
import React from 'react';
import Header from '@/components/Header';
import CourseSection from '@/components/CourseSection';

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

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        {Object.values(coursesData).map((data, index) => (
          <CourseSection
            key={index}
            language={data.language}
            nativeName={data.nativeName}
            courses={data.courses}
          />
        ))}
      </main>
      <footer className="bg-primary text-white py-6 text-center">
        <p className="font-inter">* Fees are subject to change</p>
      </footer>
    </div>
  );
};

export default Index;
