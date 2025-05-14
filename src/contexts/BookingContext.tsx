
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BookingDetails, TicketType, BookingMode, PaymentMethod, TravelClass, Passenger } from '@/types/bookingTypes';

type BookingContextType = {
  bookingDetails: Partial<BookingDetails>;
  updateBookingDetails: (details: Partial<BookingDetails>) => void;
  resetBooking: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  bookingCompleted: boolean;
  completeBooking: () => void;
  // Added properties to match what's used in PassengerDetailsStep
  bookingData: Partial<BookingDetails>;
  updateBooking: (details: Partial<BookingDetails>) => void;
  goToNextStep: (step?: number) => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [bookingDetails, setBookingDetails] = useState<Partial<BookingDetails>>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingCompleted, setBookingCompleted] = useState(false);

  const updateBookingDetails = (details: Partial<BookingDetails>) => {
    setBookingDetails(prev => ({ ...prev, ...details }));
  };

  // Alias for compatibility with existing components
  const updateBooking = updateBookingDetails;

  const resetBooking = () => {
    setBookingDetails({});
    setCurrentStep(1);
    setBookingCompleted(false);
  };

  const goToNextStep = (stepIncrement: number = 1) => {
    setCurrentStep(prev => prev + stepIncrement);
  };

  const completeBooking = () => {
    // Generate a random booking ID
    const bookingId = `JG${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
    const bookingTime = new Date().toISOString();
    
    setBookingDetails(prev => ({
      ...prev,
      bookingId,
      bookingTime,
    }));
    
    setBookingCompleted(true);
  };

  return (
    <BookingContext.Provider
      value={{
        bookingDetails,
        updateBookingDetails,
        resetBooking,
        currentStep,
        setCurrentStep,
        bookingCompleted,
        completeBooking,
        // Add aliased properties for compatibility
        bookingData: bookingDetails,
        updateBooking,
        goToNextStep,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
