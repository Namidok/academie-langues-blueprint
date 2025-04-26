
import React from 'react';
import Header from '@/components/Header';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6 text-primary">About Our Institute</h2>
              <p className="text-gray-700 mb-4">
                Founded in 1998, Académie de Langues étrangères has been at the forefront of language education in Visakhapatnam for over 25 years. Our institute is recognized for its excellence in teaching foreign languages with a focus on practical communication skills.
              </p>
              <p className="text-gray-700 mb-4">
                We pride ourselves on our team of native and highly qualified language instructors who bring authentic cultural experiences into the classroom, making learning engaging and effective.
              </p>
              <p className="text-gray-700">
                Our teaching methodology combines traditional classroom learning with modern technology and immersive techniques to ensure students develop strong language skills that are applicable in real-world situations.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-primary">Our Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Recognized as the leading language institute in Visakhapatnam for five consecutive years (2019-2023)</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Over 15,000 students successfully completed our language programs</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">95% success rate in international language proficiency examinations</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Official examination center for DELF (French) and DELE (Spanish) certifications</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Partnership programs with universities in France, Germany, Spain, and Japan</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-8 text-center text-primary">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Expert Teachers</h3>
              <p className="text-gray-700">Our instructors are either native speakers or certified language experts with years of teaching experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Small Class Size</h3>
              <p className="text-gray-700">We maintain small groups of 8-12 students to ensure personalized attention and better learning outcomes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Modern Facilities</h3>
              <p className="text-gray-700">Our classrooms are equipped with audio-visual tools and technology to enhance the learning experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
