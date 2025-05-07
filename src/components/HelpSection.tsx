
import React, { useState } from 'react';
import { helpContent, HelpContent } from '@/data/helpContent';
import { Service } from '@/data/services';
import { ChevronDown, ChevronUp, FileText, CheckCircle } from 'lucide-react';

interface HelpSectionProps {
  selectedService: Service | null;
}

const HelpSection: React.FC<HelpSectionProps> = ({ selectedService }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const getHelpContent = (): HelpContent | undefined => {
    if (!selectedService) return undefined;
    return helpContent.find((content) => content.serviceId === selectedService.id);
  };

  const content = getHelpContent();

  if (!selectedService || !content) {
    return (
      <div className="bg-blue-50 rounded-lg p-6 mt-8 shadow-sm">
        <div className="flex justify-between items-center" onClick={toggleExpand}>
          <h3 className="text-lg font-semibold flex items-center">
            <FileText className="mr-2 h-5 w-5 text-blue-500" />
            Help Section
          </h3>
          <button className="text-blue-500 hover:text-blue-700">
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>
        
        {isExpanded && (
          <div className="mt-4">
            <p className="text-gray-600">Please select a service to see specific help and document requirements.</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-blue-50 rounded-lg p-6 mt-8 shadow-sm">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={toggleExpand}
      >
        <h3 className="text-lg font-semibold flex items-center">
          <FileText className="mr-2 h-5 w-5 text-blue-500" />
          {content.title}
        </h3>
        <button className="text-blue-500 hover:text-blue-700">
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="mt-4 space-y-6">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Instructions:</h4>
            <ol className="list-decimal pl-5 space-y-1">
              {content.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-600">{instruction}</li>
              ))}
            </ol>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Required Documents:</h4>
            <ul className="space-y-1">
              {content.requiredDocuments.map((document, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{document}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpSection;
