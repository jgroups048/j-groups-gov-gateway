
import React from 'react';
import ServiceCard from './ServiceCard';
import { Service } from '@/data/services';
import { MapPin } from 'lucide-react';

interface ServicesGridProps {
  services: Service[];
  onServiceClick: (service: Service) => void;
  selectedState?: string;
  selectedCategory?: string;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, onServiceClick, selectedState, selectedCategory }) => {
  // Filter services by selected category
  const filteredServices = selectedCategory 
    ? services.filter(service => service.category === selectedCategory)
    : services;
  
  // Check if any services in this category require state selection
  const hasStateRequiredServices = filteredServices.some(service => service.requiresState);
  
  return (
    <>
      {hasStateRequiredServices && !selectedState && (
        <div className="mb-6 p-4 rounded-lg bg-blue-50 border border-blue-200 flex items-center">
          <MapPin className="h-5 w-5 text-blue-500 mr-2" />
          <p className="text-blue-700">
            <strong>Select your state</strong> to access state-specific services like certificates, records, and local portals.
          </p>
        </div>
      )}
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            url={service.url}
            icon={service.icon}
            color={service.color}
            onClick={() => onServiceClick(service)}
            requiresState={service.requiresState}
            selectedState={service.requiresState ? selectedState : undefined}
          />
        ))}
        
        {filteredServices.length === 0 && (
          <div className="col-span-full text-center py-12">
            <div className="bg-gray-100 inline-block p-4 rounded-full mb-3">
              <SearchIcon className="h-7 w-7 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-600">No services found</h3>
            <p className="text-sm text-gray-500 mt-1">Try adjusting your search or category selection</p>
          </div>
        )}
      </div>
    </>
  );
};

// Add this SearchIcon component at the bottom of the file
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export default ServicesGrid;
