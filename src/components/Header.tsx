
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold animate-[glow_2s_ease-in-out_infinite]">
            J GROUPS Enterprises
          </h1>
        </div>
        <div className="text-sm md:text-base">
          <span className="hidden md:inline">Government Services Portal</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
