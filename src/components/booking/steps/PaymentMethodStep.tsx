
import React, { useState } from 'react';
import { useBooking } from '@/contexts/BookingContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PaymentMethod } from '@/types/bookingTypes';
import { Wallet, CreditCard, QrCode } from 'lucide-react';

interface PaymentMethodStepProps {
  onNext: () => void;
  onBack: () => void;
}

const PaymentMethodStep = ({ onNext, onBack }: PaymentMethodStepProps) => {
  const { bookingDetails, updateBookingDetails } = useBooking();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | undefined>(
    bookingDetails.paymentMethod
  );
  const [error, setError] = useState('');

  const handleSelect = (method: PaymentMethod) => {
    setSelectedPaymentMethod(method);
    setError('');
  };

  const handleNext = () => {
    if (!selectedPaymentMethod) {
      setError('Please select a payment method');
      return;
    }
    
    updateBookingDetails({ paymentMethod: selectedPaymentMethod });
    onNext();
  };

  const paymentOptions = [
    { 
      id: 'UPI', 
      title: 'UPI', 
      description: 'Pay using UPI apps like Google Pay, PhonePe, etc.',
      icon: <QrCode className="h-8 w-8 text-green-600" />
    },
    { 
      id: 'Wallet', 
      title: 'Wallet', 
      description: 'Pay using digital wallets like Paytm, Amazon Pay, etc.',
      icon: <Wallet className="h-8 w-8 text-purple-600" />
    },
    { 
      id: 'Card', 
      title: 'Card', 
      description: 'Pay using credit/debit cards',
      icon: <CreditCard className="h-8 w-8 text-blue-600" />
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Select Payment Method
      </h2>
      
      <div className="space-y-4">
        {paymentOptions.map((option) => (
          <Card
            key={option.id}
            className={`p-4 cursor-pointer transition-all hover:shadow-md border-2 ${
              selectedPaymentMethod === option.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
            onClick={() => handleSelect(option.id as PaymentMethod)}
          >
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-2 rounded-full">
                {option.icon}
              </div>
              <div>
                <h3 className="font-medium">{option.title}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {error && <p className="text-red-500 text-sm">{error}</p>}
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 text-sm">
        <p className="font-medium text-yellow-800">Note:</p>
        <p className="text-yellow-700">
          This is a simulation. No actual payment will be processed or charged.
        </p>
      </div>
      
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>Back</Button>
        <Button onClick={handleNext}>Review Booking</Button>
      </div>
    </div>
  );
};

export default PaymentMethodStep;
