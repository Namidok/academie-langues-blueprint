
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Menu } from 'lucide-react';
import { useLanguage } from "../context/LanguageContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const languages = [
  { value: 'english', label: 'English' },
  { value: 'french', label: 'Français' },
  { value: 'german', label: 'Deutsch' },
  { value: 'spanish', label: 'Español' },
  { value: 'japanese', label: '日本語' },
];

const Navigation = () => {
  const { language, setLanguage, translate } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (value: string) => {
    setLanguage(value as 'english' | 'french' | 'german' | 'spanish' | 'japanese');
  };

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/5141bf72-bcfe-4850-b610-49d43847b50e.png" 
              alt="Académie de Langues étrangères" 
              className="h-16 w-auto mr-3"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/120x48?text=Logo';
              }} 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {translate('nav.home')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {translate('nav.about')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/courses">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {translate('nav.courses')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {translate('nav.contact')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <Select onValueChange={handleLanguageChange} defaultValue={language} value={language}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Mobile Navigation - Now on the right side */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <Link to="/" className="block px-2 py-1 text-lg hover:text-primary">
                    {translate('nav.home')}
                  </Link>
                  <Link to="/about" className="block px-2 py-1 text-lg hover:text-primary">
                    {translate('nav.about')}
                  </Link>
                  <Link to="/courses" className="block px-2 py-1 text-lg hover:text-primary">
                    {translate('nav.courses')}
                  </Link>
                  <Link to="/contact" className="block px-2 py-1 text-lg hover:text-primary">
                    {translate('nav.contact')}
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
