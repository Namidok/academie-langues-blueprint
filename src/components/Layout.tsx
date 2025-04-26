
import React from 'react';
import Navigation from './Navigation';
import { useLanguage } from '../context/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { translate } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-primary text-white py-6 text-center">
        <div className="container mx-auto px-4">
          <p className="font-inter">© {currentYear} Académie de Langues étrangères. {translate('footer.rights')}</p>
          <p className="font-inter text-sm mt-2">{translate('footer.disclaimer')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
