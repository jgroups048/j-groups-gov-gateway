
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  color: string;
  onClick: () => void;
  requiresState?: boolean;
  selectedState?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  url,
  icon: Icon,
  color,
  onClick,
  requiresState = false,
  selectedState,
}) => {
  return (
    <div 
      className={cn(
        "service-card bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 h-full cursor-pointer",
        requiresState && !selectedState ? "opacity-70" : ""
      )}
      onClick={onClick}
    >
      <div className="p-5 flex flex-col h-full">
        <div className={cn("p-3 rounded-lg w-12 h-12 mb-4 flex items-center justify-center", color)}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
        
        {requiresState && (
          <div className="mt-2 mb-2">
            {selectedState ? (
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                {selectedState}
              </span>
            ) : (
              <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                Select state first
              </span>
            )}
          </div>
        )}
        
        <div className="mt-4">
          <span className="text-blue-600 text-sm font-medium inline-flex items-center">
            Visit Portal
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
