
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import ServicePromptInterface from '@/components/ServicePromptInterface';
import OTPVerification from '@/components/OTPVerification';
import DocumentUploader from '@/components/DocumentUploader';
import ProgressTracker from '@/components/ProgressTracker';
import WhatsAppSupport from '@/components/WhatsAppSupport';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Download } from 'lucide-react';
import RazorpayButton from '@/components/RazorpayButton';

const ServicePage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Define service states
  const [currentStep, setCurrentStep] = useState<string>('prompt');
  const [serviceDetails, setServiceDetails] = useState<{
    name: string;
    description: string;
    fee: number;
    processingTime: string;
    requiredDocuments: Array<{
      id: string;
      name: string;
      description: string;
      required: boolean;
      maxSize?: number;
      allowedFormats?: string[];
    }>;
  }>({
    name: serviceId ? 
      serviceId.charAt(0).toUpperCase() + serviceId.slice(1).replace(/-/g, ' ') : 
      'Government Service',
    description: 'Complete your service request by following the steps below',
    fee: 50, // In addition to platform fee
    processingTime: '2-3 business days',
    requiredDocuments: [
      {
        id: 'photo',
        name: 'Passport Size Photo',
        description: 'Recent color photograph with white background',
        required: true,
        maxSize: 2,
        allowedFormats: ['.jpg', '.jpeg', '.png']
      },
      {
        id: 'id_proof',
        name: 'ID Proof',
        description: 'Aadhaar Card, Voter ID, or Passport',
        required: true,
        maxSize: 5,
        allowedFormats: ['.jpg', '.jpeg', '.png', '.pdf']
      },
      {
        id: 'address_proof',
        name: 'Address Proof',
        description: 'Utility Bill, Rent Agreement, or Bank Statement',
        required: true,
        maxSize: 5,
        allowedFormats: ['.jpg', '.jpeg', '.png', '.pdf']
      },
      {
        id: 'additional',
        name: 'Additional Document',
        description: 'Any additional supporting document if required',
        required: false,
        maxSize: 5,
        allowedFormats: ['.jpg', '.jpeg', '.png', '.pdf']
      }
    ]
  });

  // Check if the user has paid the platform fee
  const [hasPaid, setHasPaid] = useState<boolean>(
    localStorage.getItem('jgroups_payment_status') === 'paid'
  );
  
  // Check if the user has paid the service fee
  const [hasServiceFeePaid, setHasServiceFeePaid] = useState<boolean>(false);
  
  // Progress steps
  const progressSteps = [
    { id: 'prompt', label: 'Details', status: currentStep === 'prompt' ? 'current' : currentStep === 'documents' || currentStep === 'payment' || currentStep === 'otp' || currentStep === 'completed' ? 'completed' : 'pending' },
    { id: 'documents', label: 'Documents', status: currentStep === 'documents' ? 'current' : currentStep === 'payment' || currentStep === 'otp' || currentStep === 'completed' ? 'completed' : 'pending' },
    { id: 'payment', label: 'Payment', status: currentStep === 'payment' ? 'current' : currentStep === 'otp' || currentStep === 'completed' ? 'completed' : 'pending' },
    { id: 'otp', label: 'Verification', status: currentStep === 'otp' ? 'current' : currentStep === 'completed' ? 'completed' : 'pending' },
    { id: 'completed', label: 'Complete', status: currentStep === 'completed' ? 'current' : 'pending' }
  ];
  
  const handlePlatformFeeSuccess = () => {
    setHasPaid(true);
    localStorage.setItem('jgroups_payment_status', 'paid');
    localStorage.setItem('jgroups_payment_time', new Date().toISOString());
    
    toast({
      title: "Platform Fee Paid",
      description: "You can now proceed with your service request.",
    });
  };
  
  const handleServiceFeeSuccess = () => {
    setHasServiceFeePaid(true);
    setCurrentStep('otp');
    
    toast({
      title: "Service Fee Paid",
      description: "Your payment was successful. Proceed to verification.",
    });
  };
  
  const handleDocumentsComplete = () => {
    setCurrentStep('payment');
    
    toast({
      title: "Documents Uploaded",
      description: "All required documents have been uploaded successfully.",
    });
  };
  
  const handleVerificationComplete = () => {
    setCurrentStep('completed');
    
    toast({
      title: "Service Submitted",
      description: "Your request has been submitted successfully. You will receive updates shortly.",
    });
  };
  
  const handlePromptComplete = () => {
    setCurrentStep('documents');
    
    toast({
      title: "Details Provided",
      description: "Your details have been recorded. Please upload the required documents.",
    });
  };
  
  const handleDownloadReceipt = () => {
    // In a real implementation, this would generate and download a receipt
    toast({
      title: "Receipt Downloaded",
      description: "Your receipt has been downloaded successfully.",
    });
  };
  
  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Button
              variant="ghost"
              onClick={goBack}
              className="mr-2"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
            <h1 className="text-2xl font-bold text-blue-800">
              {serviceDetails.name}
            </h1>
          </div>
          
          <Card className="mb-6">
            <CardContent className="p-6">
              <ProgressTracker 
                steps={progressSteps}
                currentStepId={currentStep}
              />
            </CardContent>
          </Card>
          
          {!hasPaid && (
            <Card className="mb-6 border-blue-200 shadow-md">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-blue-800 mb-2">Platform Fee Required</h2>
                <p className="text-gray-600 mb-4">
                  Please pay the one-time platform fee to access all services.
                </p>
                <RazorpayButton 
                  amount={20} 
                  onSuccess={handlePlatformFeeSuccess}
                  buttonText="Pay ₹20 Platform Fee"
                />
              </CardContent>
            </Card>
          )}
          
          {hasPaid && currentStep === 'prompt' && (
            <div className="space-y-6">
              <ServicePromptInterface />
              <div className="flex justify-end">
                <Button 
                  onClick={handlePromptComplete}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Continue to Documents
                </Button>
              </div>
            </div>
          )}
          
          {hasPaid && currentStep === 'documents' && (
            <div className="space-y-6">
              <DocumentUploader 
                requiredDocuments={serviceDetails.requiredDocuments}
                onComplete={handleDocumentsComplete}
              />
              <div className="flex justify-between">
                <Button 
                  variant="outline"
                  onClick={() => setCurrentStep('prompt')}
                >
                  Back to Details
                </Button>
                <Button 
                  onClick={() => setCurrentStep('payment')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Continue to Payment
                </Button>
              </div>
            </div>
          )}
          
          {hasPaid && currentStep === 'payment' && (
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-blue-800 mb-2">Service Fee</h2>
                <p className="text-gray-600 mb-4">
                  Please pay the service fee to process your request.
                </p>
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <div className="flex justify-between mb-2">
                    <span>Service Fee:</span>
                    <span>₹{serviceDetails.fee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>GST (18%):</span>
                    <span>₹{(serviceDetails.fee * 0.18).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-medium">
                    <span>Total:</span>
                    <span>₹{(serviceDetails.fee * 1.18).toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentStep('documents')}
                    className="sm:flex-1"
                  >
                    Back
                  </Button>
                  <RazorpayButton 
                    amount={Math.round(serviceDetails.fee * 1.18)} 
                    onSuccess={handleServiceFeeSuccess}
                    buttonText={`Pay ₹${Math.round(serviceDetails.fee * 1.18)} Service Fee`}
                  />
                </div>
              </CardContent>
            </Card>
          )}
          
          {hasPaid && currentStep === 'otp' && (
            <OTPVerification 
              serviceName={serviceDetails.name}
              onVerificationComplete={handleVerificationComplete}
            />
          )}
          
          {hasPaid && currentStep === 'completed' && (
            <Card className="mb-6 border-green-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="mx-auto bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-green-800 mb-2">Service Request Submitted!</h2>
                  <p className="text-gray-600">
                    Your {serviceDetails.name} request has been successfully submitted.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Reference ID:</span>
                    <span className="font-medium">{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Status:</span>
                    <span className="text-green-600 font-medium">Processing</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Estimated Completion:</span>
                    <span className="font-medium">{serviceDetails.processingTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={goBack}
                    variant="outline"
                    className="sm:flex-1"
                  >
                    Back to Home
                  </Button>
                  <Button
                    onClick={handleDownloadReceipt}
                    className="bg-blue-600 hover:bg-blue-700 sm:flex-1"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Receipt
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <footer className="bg-gray-100 border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">J GROUPS Enterprises</h3>
              <p className="text-sm text-gray-600">Your Trusted Digital Seva Partner Since 2020</p>
              <p className="text-sm text-gray-600 mt-2">© 2025 All rights reserved.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Contact Us</h3>
              <p className="text-sm text-gray-600">Email: info@jgroups.in</p>
              <p className="text-sm text-gray-600">Phone: +91 9876543210</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Disclaimer</h3>
              <p className="text-sm text-gray-600">
                All government trademarks and links belong to their respective owners. 
                J GROUPS is a service platform.
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      <WhatsAppSupport />
    </div>
  );
};

export default ServicePage;
