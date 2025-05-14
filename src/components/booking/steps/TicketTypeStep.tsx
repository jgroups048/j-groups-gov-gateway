
import React from 'react';
import { useBooking } from '@/contexts/BookingContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Train, Plane } from 'lucide-react';
import { TicketType } from '@/types/bookingTypes';

interface TicketTypeStepProps {
  onNext: () => void;
}

const TicketTypeStep = ({ onNext }: TicketTypeStepProps) => {
  const { bookingDetails, updateBookingDetails } = useBooking();
  
  const handleSelect = (type: TicketType) => {
    updateBookingDetails({ ticketType: type });
    onNext();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        What type of ticket would you like to book?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card 
          className={`p-6 cursor-pointer transition-all hover:shadow-lg border-2 ${
            bookingDetails.ticketType === 'Train' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
          onClick={() => handleSelect('Train')}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <Train className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-medium">Train</h3>
            <p className="text-center text-gray-600">Book train tickets for your journey</p>
          </div>
        </Card>
        
        <Card 
          className={`p-6 cursor-pointer transition-all hover:shadow-lg border-2 ${
            bookingDetails.ticketType === 'Flight' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
          onClick={() => handleSelect('Flight')}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <Plane className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-medium">Flight</h3>
            <p className="text-center text-gray-600">Book flight tickets for your journey</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TicketTypeStep;
