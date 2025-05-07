
import React from 'react';
import ServiceCard from './ServiceCard';
import { Service } from '@/data/services';

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
  
  return (
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
    </div>
  );
};

export default ServicesGrid;
