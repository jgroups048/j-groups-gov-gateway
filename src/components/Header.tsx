import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, X, User, LogIn, LogOut, Home, Info, Package, Plane, Train } from 'lucide-react';
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

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Services', path: '/services', icon: <Package className="w-5 h-5" /> },
    { name: 'Travel', path: '/travel', icon: <Train className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Info className="w-5 h-5" /> },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center text-xl font-semibold text-blue-700">
          J Groups
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="flex items-center text-gray-700 hover:text-blue-700 transition-colors">
              {item.icon}
              <span className="ml-1">{item.name}</span>
            </Link>
          ))}

          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-blue-700 transition-colors">
                <User className="w-5 h-5" />
                <span className="ml-1">Dashboard</span>
              </Link>
              <Button variant="outline" size="sm" onClick={signOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          ) : (
            <Link to="/admin" className="flex items-center text-gray-700 hover:text-blue-700 transition-colors">
              <LogIn className="w-5 h-5" />
              <span className="ml-1">Sign In</span>
            </Link>
          )}
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-gray-50 border-b py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="flex items-center text-gray-700 hover:text-blue-700 transition-colors py-2" onClick={closeMenu}>
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            ))}

            {user ? (
              <>
                <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-blue-700 transition-colors py-2" onClick={closeMenu}>
                  <User className="w-5 h-5" />
                  <span className="ml-2">Dashboard</span>
                </Link>
                <Button variant="outline" size="sm" onClick={() => { signOut(); closeMenu(); }} className="w-full justify-center">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/admin" className="flex items-center text-gray-700 hover:text-blue-700 transition-colors py-2" onClick={closeMenu}>
                <LogIn className="w-5 h-5" />
                <span className="ml-2">Sign In</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
