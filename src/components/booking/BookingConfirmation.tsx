
import React from 'react';
import { useBooking } from '@/contexts/BookingContext';
import { Button } from '@/components/ui/button';
import { format, parseISO } from 'date-fns';
import { CheckCircle, Download, Printer } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const BookingConfirmation = () => {
  const { bookingDetails, resetBooking } = useBooking();
  
  // Generate a dummy PDF URL for demo purposes
  const ticketPdfUrl = "https://example.com/demo-ticket.pdf";
  
  const handlePrint = () => {
    window.print();
  };
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center text-center pb-6">
        <div className="bg-green-100 p-3 rounded-full mb-4">
          <CheckCircle className="text-green-600 h-12 w-12" />
        </div>
        <h2 className="text-2xl font-bold text-green-700 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600">You can now view and download your ticket.</p>
      </div>
      
      <Card className="border-green-200 bg-green-50">
        <CardHeader className="bg-green-100 border-b border-green-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-green-700">Booking ID</p>
              <p className="font-bold text-green-800">{bookingDetails.bookingId}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-green-700">Booking Date</p>
              <p className="text-sm text-green-800">
                {bookingDetails.bookingTime && format(parseISO(bookingDetails.bookingTime), 'PPP')}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">{bookingDetails.ticketType} Details</h3>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">From:</p>
                  <p className="text-sm font-medium">{bookingDetails.fromLocation}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">To:</p>
                  <p className="text-sm font-medium">{bookingDetails.toLocation}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Date:</p>
                  <p className="text-sm font-medium">
                    {bookingDetails.journeyDate && format(parseISO(bookingDetails.journeyDate), 'PPP')}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Class:</p>
                  <p className="text-sm font-medium">{bookingDetails.travelClass}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Booking Type:</p>
                  <p className="text-sm font-medium">{bookingDetails.bookingMode}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Passenger Details</h3>
              <div className="space-y-2">
                {bookingDetails.passengers?.map((passenger, index) => (
                  <div key={index} className="text-sm">
                    <p className="font-medium">{passenger.fullName}</p>
                    <p className="text-gray-600">
                      {passenger.age} years, {passenger.gender}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <a 
          href={ticketPdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" />
            Download Ticket PDF
          </Button>
        </a>
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={handlePrint}
        >
          <Printer className="mr-2 h-4 w-4" />
          Print Ticket
        </Button>
      </div>
      
      <div className="text-center pt-4">
        <p className="text-gray-600 mb-4">Thank you for using J GROUPS Travel Assistant!</p>
        <Button variant="ghost" onClick={resetBooking}>
          Book Another Ticket
        </Button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
