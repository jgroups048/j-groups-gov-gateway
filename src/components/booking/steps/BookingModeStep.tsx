
import React from 'react';
import { useBooking } from '@/contexts/BookingContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Zap } from 'lucide-react';
import { BookingMode } from '@/types/bookingTypes';
import { useToast } from '@/hooks/use-toast';

interface BookingModeStepProps {
  onNext: () => void;
  onBack: () => void;
}

const BookingModeStep = ({ onNext, onBack }: BookingModeStepProps) => {
  const { bookingDetails, updateBookingDetails } = useBooking();
  const { toast } = useToast();
  
  const handleSelect = (mode: BookingMode) => {
    updateBookingDetails({ bookingMode: mode });
    
    if (mode === 'Tatkal') {
      toast({
        title: "Tatkal mode enabled",
        description: "Your ticket will be confirmed with high priority.",
        duration: 3000,
      });
    }
    
    onNext();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Is it a Normal or Tatkal (urgent) ticket?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card 
          className={`p-6 cursor-pointer transition-all hover:shadow-lg border-2 ${
            bookingDetails.bookingMode === 'Normal' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
          onClick={() => handleSelect('Normal')}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <Clock className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-medium">Normal</h3>
            <p className="text-center text-gray-600">Regular booking process</p>
          </div>
        </Card>
        
        <Card 
          className={`p-6 cursor-pointer transition-all hover:shadow-lg border-2 ${
            bookingDetails.bookingMode === 'Tatkal' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
          onClick={() => handleSelect('Tatkal')}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-orange-100 p-4 rounded-full">
              <Zap className="h-12 w-12 text-orange-600" />
            </div>
            <h3 className="text-xl font-medium">Tatkal (Urgent)</h3>
            <p className="text-center text-gray-600">Priority booking for urgent travel</p>
          </div>
        </Card>
      </div>
      
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>Back</Button>
      </div>
    </div>
  );
};

export default BookingModeStep;
