
import React from 'react';
import { Shield, User, Building } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="my-8 bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Welcome to J GROUPS Enterprises</h2>
      <p className="text-gray-600 mb-6">
        Your trusted Digital Seva Partner since 2020. We provide access to essential government services, 
        document processing, and assistance for all citizens. Select from our comprehensive range of 
        official government services below.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="font-semibold text-lg mt-3 mb-2">Official Portals</h3>
          <p className="text-gray-600 text-sm">
            Direct access to legitimate government websites and services
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full">
            <User className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="font-semibold text-lg mt-3 mb-2">Easy Access</h3>
          <p className="text-gray-600 text-sm">
            Simplified navigation to services for identity, certificates, jobs, and more
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full">
            <Building className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="font-semibold text-lg mt-3 mb-2">State-Specific</h3>
          <p className="text-gray-600 text-sm">
            Access services specific to your state with our location filter
          </p>
        </div>
      </div>
    </div>
  );
};
