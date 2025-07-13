
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { translate } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-primary text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-2">{translate('contact.title')}</h1>
          <p className="font-inter text-lg text-gray-100 max-w-2xl mx-auto">
            {translate('contact.subtitle')}
          </p>
        </div>
      </header>
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-playfair font-bold mb-6 text-primary">{translate('contact.location.title')}</h2>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1908.9101668028038!2d83.3292796!3d17.7407595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943563a713365%3A0xe8f15ecd3f8b426e!2sAcad%C3%A9mie%20de%20Langues%20%C3%A9trang%C3%A8res!5e0!3m2!1sen!2sin!4v1714292135953!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Institute Location"
                ></iframe>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                  <p className="text-gray-700">
                    {translate('contact.location.address')}
                  </p>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                  <p className="text-gray-700">
                    <a href="mailto:iflvizag@gmail.com" className="hover:text-primary">iflvizag@gmail.com</a>
                  </p>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div className="text-gray-700">
                    <p><a href="tel:+919885006061" className="hover:text-primary">+91 98850 06061</a></p>
                    <p><a href="tel:+919393373317" className="hover:text-primary">+91 9393373317</a></p>
                    <p><a href="tel:+919966579228" className="hover:text-primary">+91 9966579228</a></p>
                    <p><a href="tel:+918912556326" className="hover:text-primary">0891 2556326</a></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-playfair font-bold mb-6 text-primary">{translate('contact.form.title')}</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{translate('contact.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={translate('contact.form.namePlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{translate('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={translate('contact.form.emailPlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{translate('contact.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={translate('contact.form.phonePlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">{translate('contact.form.interest')}</label>
                  <select
                    id="course"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">{translate('contact.form.interestPlaceholder')}</option>
                    <option value="french">{translate('contact.form.french')}</option>
                    <option value="german">{translate('contact.form.german')}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{translate('contact.form.message')}</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={translate('contact.form.messagePlaceholder')}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-md transition-colors"
                >
                  {translate('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
