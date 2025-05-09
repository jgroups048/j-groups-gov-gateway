
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Loader2, Check, AlertTriangle } from 'lucide-react';

interface OTPVerificationProps {
  phoneNumber?: string;
  serviceName: string;
  onVerificationComplete?: () => void;
  onResendOTP?: () => void;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({
  phoneNumber = "xxxxxxxx89", // Masked phone number
  serviceName,
  onVerificationComplete,
  onResendOTP
}) => {
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (timer > 0 && !canResend) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    
    return () => clearInterval(interval);
  }, [timer, canResend]);

  const handleVerify = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    
    try {
      // In a real implementation, this would call an API to verify the OTP
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulating verification success
      toast({
        title: "OTP Verified",
        description: "Your identity has been verified successfully.",
      });
      
      if (onVerificationComplete) {
        onVerificationComplete();
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      toast({
        title: "Verification Failed",
        description: "We couldn't verify your OTP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = () => {
    setCanResend(false);
    setTimer(30);
    toast({
      title: "OTP Sent",
      description: `A new OTP has been sent to your phone number ending with ${phoneNumber.slice(-2)}`,
    });
    
    if (onResendOTP) {
      onResendOTP();
    }
  };

  return (
    <Card className="shadow-md border-blue-100 max-w-md mx-auto">
      <CardContent className="pt-6">
        <div className="text-center mb-5">
          <h3 className="text-lg font-semibold text-blue-800">OTP Verification</h3>
          <p className="text-gray-600 text-sm mt-1">
            Enter the OTP sent to your phone number
            ending in {phoneNumber.slice(-2)} for {serviceName} service
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex justify-center my-4">
            <InputOTP maxLength={6} value={otp} onChange={setOtp} disabled={isVerifying}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          
          <div className="flex flex-col gap-3">
            <Button 
              onClick={handleVerify} 
              disabled={otp.length !== 6 || isVerifying}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isVerifying ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Verify OTP
                </>
              )}
            </Button>
            
            <Button
              variant="outline"
              onClick={handleResend}
              disabled={!canResend || isVerifying}
              className="w-full"
            >
              {!canResend ? (
                `Resend OTP in ${timer}s`
              ) : (
                "Resend OTP"
              )}
            </Button>
          </div>
          
          <div className="flex justify-center">
            <p className="text-xs flex items-center text-gray-500">
              <AlertTriangle className="h-3 w-3 mr-1" />
              Never share your OTP with anyone
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OTPVerification;
