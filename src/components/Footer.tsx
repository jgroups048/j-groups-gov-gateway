
import React from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">J GROUPS Enterprises</h3>
            <p className="mb-4 text-blue-100">
              Your Trusted Digital Seva Partner Since 2020
            </p>
            <p className="text-blue-100">© {currentYear} All rights reserved.</p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-blue-100">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@jgroups.in</span>
              </li>
              <li className="flex items-center text-blue-100">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center text-blue-100">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Bihar, India</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <p className="text-blue-100 mb-4">
              All government trademarks and links belong to their respective owners. 
              J GROUPS is a service platform.
            </p>
            <a href="/about" className="inline-flex items-center text-blue-200 hover:text-white">
              About Us <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-blue-700 text-center">
          <p className="text-blue-200 text-sm">
            Disclaimer: J GROUPS Enterprises is not affiliated with any government entity. 
            We provide access to official government portals as a service.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
