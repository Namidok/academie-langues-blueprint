
import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-primary text-white py-6 text-center">
        <div className="container mx-auto px-4">
          <p className="font-inter">© {new Date().getFullYear()} Académie de Langues étrangères. All rights reserved.</p>
          <p className="font-inter text-sm mt-2">* Fees are subject to change</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
