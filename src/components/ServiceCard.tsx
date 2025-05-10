
import React from 'react';
import { LucideIcon, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

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
    <Card 
      className={cn(
        "service-card overflow-hidden h-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-l-4",
        color.replace('bg-', 'border-'),
        requiresState && !selectedState ? "opacity-70" : ""
      )}
      onClick={onClick}
    >
      <CardContent className="p-4 sm:p-5 flex flex-col h-full">
        <div className="flex items-start mb-3">
          <div className={cn("p-2 sm:p-3 rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center", color)}>
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold ml-3 mt-1">{title}</h3>
        </div>
        
        <p className="text-gray-600 text-xs sm:text-sm flex-grow">{description}</p>
        
        {requiresState && (
          <div className="mt-3 mb-2">
            {selectedState ? (
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full inline-flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {selectedState}
              </span>
            ) : (
              <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full inline-flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                Select state first
              </span>
            )}
          </div>
        )}
        
        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
          <span className="text-blue-600 text-xs sm:text-sm font-medium inline-flex items-center">
            Visit Portal
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          
          {url && (
            <span className="text-xs text-gray-500 bg-gray-100 px-1 sm:px-2 py-1 rounded-full">
              official portal
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
