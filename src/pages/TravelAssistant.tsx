
import React, { useState } from 'react';
import { BookingProvider } from '@/contexts/BookingContext';
import BookingWizard from '@/components/booking/BookingWizard';
import { Container } from '@/components/Container';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TravelAssistant = () => {
  const { toast } = useToast();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow py-8">
        <Container>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-blue-700 mb-2">
                J Groups Travel Assistant
              </h1>
              <p className="text-gray-600">
                Your one-stop solution for booking train and flight tickets
              </p>
            </div>
            
            <BookingProvider>
              <BookingWizard />
            </BookingProvider>
          </div>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
};

export default TravelAssistant;
