
import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from 'lucide-react';

const languages = [
  { value: 'english', label: 'English' },
  { value: 'french', label: 'Français' },
  { value: 'german', label: 'Deutsch' },
  { value: 'spanish', label: 'Español' },
  { value: 'japanese', label: '日本語' },
];

const Navigation = () => {
  const [language, setLanguage] = React.useState('english');

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    // In a real app, this would trigger a language change throughout the app
    console.log(`Language changed to ${value}`);
  };

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Académie de Langues étrangères" 
            className="h-12 w-auto mr-3"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/120x48?text=Logo';
            }} 
          />
        </Link>
      </div>
      
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/courses">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Courses
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contact">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="flex items-center">
        <Select onValueChange={handleLanguageChange} defaultValue={language}>
          <SelectTrigger className="w-[140px]">
            <span className="flex items-center">
              <Globe className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select Language" />
            </span>
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.value} value={lang.value}>
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </nav>
  );
};

export default Navigation;
