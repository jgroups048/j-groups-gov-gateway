
import React from 'react';
import { Service } from '@/data/services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';

interface HelpSectionProps {
  selectedService: Service | null;
}

const HelpSection: React.FC<HelpSectionProps> = ({ selectedService }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mt-10">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <CollapsibleTrigger className="flex items-center justify-center w-full py-3 bg-blue-50 hover:bg-blue-100 rounded-md border border-blue-100 mb-2">
          <span className="flex items-center text-blue-700">
            <HelpCircle className="mr-2 h-5 w-5" />
            <span>Need help with government services?</span>
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
          </span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Support Options</CardTitle>
                <CardDescription>Ways to get help with government services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Call Our Helpline</h4>
                    <p className="text-sm text-gray-600">+91 9876543210 (10 AM - 6 PM, Mon-Sat)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 mr-3 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Join Our WhatsApp Group</h4>
                    <p className="text-sm text-gray-600">Get job alerts and quick assistance</p>
                    <a 
                      href="https://chat.whatsapp.com/example" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline mt-1 inline-block"
                    >
                      Click to join
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Visit our Digital Seva Kendra</CardTitle>
                <CardDescription>For offline assistance with forms and applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">We provide offline assistance for:</p>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Form filling and submission</li>
                  <li>Document uploading and verification</li>
                  <li>Application status tracking</li>
                  <li>Print, scan, and copy services</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">Visit us at: J GROUPS Digital Seva Kendra, Main Road, Patna, Bihar</p>
              </CardContent>
            </Card>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default HelpSection;
