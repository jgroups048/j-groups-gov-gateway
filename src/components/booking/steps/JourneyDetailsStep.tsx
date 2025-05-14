
import React, { useState } from 'react';
import { useBooking } from '@/contexts/BookingContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { cn } from '@/lib/utils';

interface JourneyDetailsStepProps {
  onNext: () => void;
  onBack: () => void;
}

const JourneyDetailsStep = ({ onNext, onBack }: JourneyDetailsStepProps) => {
  const { bookingDetails, updateBookingDetails } = useBooking();
  const [date, setDate] = useState<Date | undefined>(
    bookingDetails.journeyDate ? new Date(bookingDetails.journeyDate) : undefined
  );
  const [fromLocation, setFromLocation] = useState(bookingDetails.fromLocation || '');
  const [toLocation, setToLocation] = useState(bookingDetails.toLocation || '');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!fromLocation || !toLocation || !date) {
      setError('Please fill all fields');
      return;
    }
    
    updateBookingDetails({
      fromLocation,
      toLocation,
      journeyDate: date.toISOString(),
    });
    
    onNext();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Enter Journey Details
      </h2>
      
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="from">From {bookingDetails.ticketType === 'Train' ? 'Station' : 'Airport'}</Label>
          <Input 
            id="from" 
            placeholder={`Enter departure ${bookingDetails.ticketType === 'Train' ? 'station' : 'airport'}`}
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="to">To {bookingDetails.ticketType === 'Train' ? 'Station' : 'Airport'}</Label>
          <Input 
            id="to" 
            placeholder={`Enter arrival ${bookingDetails.ticketType === 'Train' ? 'station' : 'airport'}`}
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label>Journey Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      {error && <p className="text-red-500 text-sm">{error}</p>}
      
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
};

export default JourneyDetailsStep;
