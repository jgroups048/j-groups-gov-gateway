
import React from 'react';
import ServiceCard from './ServiceCard';
import { Service } from '@/data/services';

interface ServicesGridProps {
  services: Service[];
  onServiceClick: (service: Service) => void;
  selectedState?: string;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, onServiceClick, selectedState }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {services.map((service) => (
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
