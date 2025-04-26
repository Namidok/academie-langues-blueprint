
import React from 'react';
import { Globe, Calendar, Euro } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface CourseInfo {
  type: string;
  duration: string;
  fee: string;
  equivalent: string;
}

interface CourseSectionProps {
  language: string;
  nativeName: string;
  courses: CourseInfo[];
}

const CourseSection = ({ language, nativeName, courses }: CourseSectionProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-primary">
          {language} <span className="text-secondary">({nativeName})</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-playfair text-xl font-semibold mb-4">{course.type}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Euro className="w-5 h-5" />
                  <span>{course.fee}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Globe className="w-5 h-5" />
                  <span>{course.equivalent}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
