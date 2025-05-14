
import React from 'react';
import { useBooking } from '@/contexts/BookingContext';
import { Button } from '@/components/ui/button';
import { format, parseISO } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

interface BookingSummaryProps {
  onBack: () => void;
}

const BookingSummary = ({ onBack }: BookingSummaryProps) => {
  const { bookingDetails, completeBooking } = useBooking();
  const { toast } = useToast();

  const handleConfirm = () => {
    toast({
      title: "Processing Booking",
      description: "Your ticket is now being processed.",
      duration: 2000,
    });
    
    // Simulate processing delay
    setTimeout(() => {
      completeBooking();
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Review Your Booking
      </h2>
      
      <div className="space-y-5">
        <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
          <h3 className="font-medium text-blue-800">Ticket Details</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="text-sm">
              <span className="text-gray-600">Ticket Type:</span>
              <p className="font-medium">{bookingDetails.ticketType}</p>
            </div>
            <div className="text-sm">
              <span className="text-gray-600">Booking Mode:</span>
              <p className="font-medium">{bookingDetails.bookingMode}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
          <h3 className="font-medium text-blue-800">Journey Details</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="text-sm">
              <span className="text-gray-600">From:</span>
              <p className="font-medium">{bookingDetails.fromLocation}</p>
            </div>
            <div className="text-sm">
              <span className="text-gray-600">To:</span>
              <p className="font-medium">{bookingDetails.toLocation}</p>
            </div>
            <div className="text-sm">
              <span className="text-gray-600">Date:</span>
              <p className="font-medium">
                {bookingDetails.journeyDate && format(parseISO(bookingDetails.journeyDate), 'PPP')}
              </p>
            </div>
            <div className="text-sm">
              <span className="text-gray-600">Class:</span>
              <p className="font-medium">{bookingDetails.travelClass}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
          <h3 className="font-medium text-blue-800">Passenger Details</h3>
          {bookingDetails.passengers?.map((passenger, index) => (
            <div key={index} className="border-t border-blue-100 pt-2 mt-2 first:border-0 first:pt-0 first:mt-0">
              <p className="text-sm font-medium">Passenger {index + 1}</p>
              <div className="grid grid-cols-3 gap-2 mt-1">
                <div className="text-sm">
                  <span className="text-gray-600">Name:</span>
                  <p>{passenger.fullName}</p>
                </div>
                <div className="text-sm">
                  <span className="text-gray-600">Age:</span>
                  <p>{passenger.age}</p>
                </div>
                <div className="text-sm">
                  <span className="text-gray-600">Gender:</span>
                  <p>{passenger.gender}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-blue-100 pt-2 mt-2">
            <div className="text-sm">
              <span className="text-gray-600">Mobile:</span>
              <p>{bookingDetails.mobileNumber}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
          <h3 className="font-medium text-blue-800">Payment Method</h3>
          <p className="text-sm mt-1">{bookingDetails.paymentMethod}</p>
        </div>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 text-sm">
        <p className="font-medium text-yellow-800">Note:</p>
        <p className="text-yellow-700">
          This is a simulation. No actual payment will be processed or charged.
        </p>
      </div>
      
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>Back</Button>
        <Button onClick={handleConfirm}>Confirm Booking</Button>
      </div>
    </div>
  );
};

export default BookingSummary;
