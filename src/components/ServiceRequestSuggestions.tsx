
import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

const ServiceRequestSuggestions: React.FC = () => {
  return (
    <div className="mt-10 mb-6">
      <Collapsible>
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Common Service Requests</h3>
          <CollapsibleTrigger className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronDown className="h-5 w-5" />
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-blue-700 mb-3">Identity Documents</h4>
                <ul className="space-y-2 text-sm">
                  <li className="p-2 bg-gray-50 rounded-md">"I want to apply for a PAN card."</li>
                  <li className="p-2 bg-gray-50 rounded-md">"Help me update my Aadhaar card address."</li>
                  <li className="p-2 bg-gray-50 rounded-md">"Download my voter ID card."</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-green-700 mb-3">Education & Admissions</h4>
                <ul className="space-y-2 text-sm">
                  <li className="p-2 bg-gray-50 rounded-md">"Check my Bihar Board 10th result."</li>
                  <li className="p-2 bg-gray-50 rounded-md">"Apply for 11th admission using OFSS Bihar."</li>
                  <li className="p-2 bg-gray-50 rounded-md">"Download admit card for BPSC exam."</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-amber-700 mb-3">Certificates</h4>
                <ul className="space-y-2 text-sm">
                  <li className="p-2 bg-gray-50 rounded-md">"Apply for a caste certificate in Bihar."</li>
                  <li className="p-2 bg-gray-50 rounded-md">"I need an income certificate in UP."</li>
                  <li className="p-2 bg-gray-50 rounded-md">"Get a domicile certificate for college."</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-purple-700 mb-3">Employment & Jobs</h4>
                <ul className="space-y-2 text-sm">
                  <li className="p-2 bg-gray-50 rounded-md">"Apply for SSC CHSL exam."</li>
                  <li className="p-2 bg-gray-50 rounded-md">"Register me for an E-Shram card."</li>
                  <li className="p-2 bg-gray-50 rounded-md">"Apply for MSME Udyam certificate."</li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ServiceRequestSuggestions;
