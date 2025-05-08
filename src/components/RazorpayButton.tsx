
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { CreditCard } from 'lucide-react';

interface RazorpayButtonProps {
  amount?: number; // in rupees
  onSuccess?: () => void;
}

const RazorpayButton: React.FC<RazorpayButtonProps> = ({ 
  amount = 20, 
  onSuccess 
}) => {
  const { toast } = useToast();

  const loadScript = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      toast({
        title: "Payment Failed",
        description: "Razorpay SDK failed to load. Please check your internet connection.",
        variant: "destructive"
      });
      return;
    }

    // This would typically come from your backend
    const options = {
      key: "rzp_test_K3HepJGzeoX3YG", // Replace with your test key
      amount: amount * 100, // Amount in paisa
      currency: "INR",
      name: "J GROUPS Enterprises",
      description: "Platform Fee for Government Services",
      image: "https://i.ibb.co/QJw5JGJ/logo.png", // Replace with your logo URL
      handler: function(response: any) {
        toast({
          title: "Payment Successful",
          description: `Payment ID: ${response.razorpay_payment_id}`,
          duration: 5000,
        });
        if (onSuccess) onSuccess();
      },
      prefill: {
        name: "User",
        contact: "",
        email: ""
      },
      notes: {
        address: "J GROUPS Enterprises"
      },
      theme: {
        color: "#1D4ED8" // Blue color matching the site theme
      }
    };

    // @ts-ignore - Razorpay is loaded via script
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <Button
      onClick={displayRazorpay}
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm transition-all flex items-center gap-2"
    >
      <CreditCard className="h-4 w-4" />
      Click Here to Pay ₹{amount}
    </Button>
  );
};

export default RazorpayButton;
