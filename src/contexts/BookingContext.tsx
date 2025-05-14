
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

  const resetBooking = () => {
    setBookingDetails({});
    setCurrentStep(1);
    setBookingCompleted(false);
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
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
