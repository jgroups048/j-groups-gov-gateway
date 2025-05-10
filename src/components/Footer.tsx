
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">J GROUPS Enterprises</h3>
            <p className="text-sm text-gray-600">Your Trusted Digital Seva Partner Since 2020</p>
            <p className="text-sm text-gray-600 mt-2">© 2025 All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Contact Us</h3>
            <p className="text-sm text-gray-600">Email: info@jgroups.in</p>
            <p className="text-sm text-gray-600">Phone: +91 9876543210</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Disclaimer</h3>
            <p className="text-sm text-gray-600">
              All government trademarks and links belong to their respective owners. 
              J GROUPS is a service platform.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
