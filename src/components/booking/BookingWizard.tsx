
import React, { useState } from 'react';
import { useBooking } from '@/contexts/BookingContext';
import { Button } from '@/components/ui/button';
import TicketTypeStep from './steps/TicketTypeStep';
import BookingModeStep from './steps/BookingModeStep';
import JourneyDetailsStep from './steps/JourneyDetailsStep';
import PassengerDetailsStep from './steps/PassengerDetailsStep';
import PaymentMethodStep from './steps/PaymentMethodStep';
import BookingConfirmation from './BookingConfirmation';
import BookingSummary from './BookingSummary';

const BookingWizard = () => {
  const { currentStep, setCurrentStep, bookingCompleted } = useBooking();

  const renderStep = () => {
    if (bookingCompleted) {
      return <BookingConfirmation />;
    }
    
    switch (currentStep) {
      case 1:
        return <TicketTypeStep onNext={() => setCurrentStep(2)} />;
      case 2:
        return <BookingModeStep onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />;
      case 3:
        return <JourneyDetailsStep onNext={() => setCurrentStep(4)} onBack={() => setCurrentStep(2)} />;
      case 4:
        return <PassengerDetailsStep onNext={() => setCurrentStep(5)} onBack={() => setCurrentStep(3)} />;
      case 5:
        return <PaymentMethodStep onNext={() => setCurrentStep(6)} onBack={() => setCurrentStep(4)} />;
      case 6:
        return <BookingSummary onBack={() => setCurrentStep(5)} />;
      default:
        return <TicketTypeStep onNext={() => setCurrentStep(2)} />;
    }
  };

  return (
    <div className="space-y-8">
      {!bookingCompleted && (
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-8">
          <div 
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${(currentStep / 6) * 100}%` }}
          ></div>
        </div>
      )}
      
      {renderStep()}
    </div>
  );
};

export default BookingWizard;
