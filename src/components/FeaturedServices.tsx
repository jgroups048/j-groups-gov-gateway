
import React from 'react';
import { Service } from '@/data/serviceTypes';
import { User, FileText, Receipt, Landmark, GraduationCap } from 'lucide-react';
import { Card } from './ui/card';

interface FeaturedServicesProps {
  onServiceClick: (service: Service) => void;
}

const featuredServices: Service[] = [
  {
    id: "aadhaar",
    title: "Aadhaar Portal",
    description: "Update, download, or check Aadhaar status",
    url: "https://myaadhaar.uidai.gov.in/",
    icon: User,
    color: "bg-blue-500",
    category: "identity"
  },
  {
    id: "pan",
    title: "PAN Card Apply",
    description: "Apply for new PAN or correct existing PAN",
    url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
    icon: FileText,
    color: "bg-yellow-500",
    category: "identity"
  },
  {
    id: "gst-portal",
    title: "GST Portal",
    description: "Goods and Services Tax registration and filing",
    url: "https://www.gst.gov.in/",
    icon: Receipt,
    color: "bg-blue-600",
    category: "financial"
  },
  {
    id: "ofss-bihar",
    title: "OFSS Bihar (11th Admission)",
    description: "Online Facilitation System for Students - Bihar",
    url: "http://www.ofssbihar.in/",
    icon: GraduationCap,
    color: "bg-blue-600",
    category: "student"
  },
  {
    id: "eshram",
    title: "E-Shram",
    description: "National Database of Unorganized Workers",
    url: "https://eshram.gov.in/",
    icon: Landmark,
    color: "bg-blue-600",
    category: "jobs"
  }
];

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({ onServiceClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {featuredServices.map((service) => {
        const Icon = service.icon;
        return (
          <Card 
            key={service.id}
            className="service-card overflow-hidden h-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-l-4 p-0"
            style={{ borderLeftColor: service.color.replace('bg-', '').includes('blue') ? '#1d4ed8' : 
              service.color.replace('bg-', '').includes('yellow') ? '#eab308' : 
              service.color.replace('bg-', '').includes('green') ? '#16a34a' : 
              service.color.replace('bg-', '').includes('indigo') ? '#4f46e5' : 
              '#ef4444' }}
            onClick={() => onServiceClick(service)}
          >
            <div className="p-4 flex flex-col h-full">
              <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
              <div className="mt-auto pt-2">
                <span className="text-blue-600 text-sm font-medium flex items-center">
                  Visit Portal
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
