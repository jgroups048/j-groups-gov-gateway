
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, X, Home, Info, Package, Train, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleDownloadApp = () => {
    // Direct download link to the APK file
    const apkUrl = '/J GROUPS Enterprises_1_1.0.apk';
    
    // Create an anchor element to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = apkUrl;
    downloadLink.download = 'J-GROUPS-Enterprises.apk';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Services', path: '/services', icon: <Package className="w-5 h-5" /> },
    { name: 'Travel', path: '/travel', icon: <Train className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Info className="w-5 h-5" /> },
  ];

  return (
    <header className="bg-blue-700 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center text-xl font-semibold text-white">
          <span className="mr-2 text-2xl">🏛️</span>
          <span className="text-2xl">J GROUPS Enterprises</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="flex items-center text-white hover:text-gray-200 transition-colors">
              {item.icon}
              <span className="ml-1">{item.name}</span>
            </Link>
          ))}

          <div className="flex items-center space-x-4">
            <Link to="/about" className="flex items-center text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
              <Info className="w-5 h-5 mr-2" />
              <span>About Us</span>
            </Link>

            <Button 
              variant="outline" 
              size="sm" 
              className="bg-blue-500 text-white border-white hover:bg-blue-600"
              onClick={handleDownloadApp}
            >
              <Download className="w-4 h-4 mr-2" />
              App
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-blue-600 border-b py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="flex items-center text-white hover:text-gray-200 transition-colors py-2" onClick={closeMenu}>
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            ))}

            <Link to="/about" className="flex items-center text-white hover:text-gray-200 transition-colors py-2" onClick={closeMenu}>
              <Info className="w-5 h-5 mr-2" />
              <span>About Us</span>
            </Link>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="justify-center bg-blue-500 text-white border-white hover:bg-blue-600"
              onClick={handleDownloadApp}
            >
              <Download className="w-4 h-4 mr-2" />
              Download App
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

