
import React, { useState } from 'react';
import RazorpayButton from './RazorpayButton';
import { useToast } from '@/hooks/use-toast';

const WelcomePaymentBanner: React.FC = () => {
  const { toast } = useToast();
  const [hasPaid, setHasPaid] = useState(false);

  const handlePaymentSuccess = () => {
    setHasPaid(true);
    toast({
      title: "Platform Fee Paid",
      description: "You can now use all services. Please type your request below.",
      duration: 5000,
    });
    
    // Store payment status in localStorage to persist between visits
    localStorage.setItem('jgroups_payment_status', 'paid');
    localStorage.setItem('jgroups_payment_time', new Date().toISOString());
  };

  // Check if the user has already paid (when component mounts)
  React.useEffect(() => {
    const paymentStatus = localStorage.getItem('jgroups_payment_status');
    const paymentTime = localStorage.getItem('jgroups_payment_time');
    
    if (paymentStatus === 'paid' && paymentTime) {
      const paymentDate = new Date(paymentTime);
      const currentDate = new Date();
      const daysSincePayment = (currentDate.getTime() - paymentDate.getTime()) / (1000 * 3600 * 24);
      
      // If paid within the last 30 days, consider it valid
      if (daysSincePayment < 30) {
        setHasPaid(true);
      }
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-md mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600 opacity-20 pattern-grid-lg"></div>
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-3">Welcome to J GROUPS Enterprises</h2>
        {hasPaid ? (
          <div className="bg-green-600/80 p-4 rounded-md mt-4 shadow-sm">
            <p className="font-medium">
              ✅ Platform fee paid. Please type what you want like:
            </p>
            <ul className="mt-2 text-sm space-y-1">
              <li>• "I want to update my Aadhaar card"</li>
              <li>• "Apply for PAN card"</li>
              <li>• "Check Bihar Board 12th result"</li>
            </ul>
          </div>
        ) : (
          <div className="mt-4">
            <p className="mb-3 text-blue-100">
              Before we begin your selected service (Aadhaar, PAN, Driving License, Exam Forms, etc.), please pay a one-time ₹20 platform fee to continue.
            </p>
            <RazorpayButton onSuccess={handlePaymentSuccess} buttonText="Pay ₹20 to Continue" />
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomePaymentBanner;
