
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold animate-[glow_2s_ease-in-out_infinite]">
            <Link to="/">J GROUPS Enterprises</Link>
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline">Government Services Portal</span>
          <Link to="/about" className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-md text-sm font-medium transition-colors">
            About Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
