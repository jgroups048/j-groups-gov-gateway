
import React, { useState, useEffect } from 'react';
import { Send, Loader2, Download, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';
import { extractDataFromPrompt } from '@/utils/promptExtractor';
import { saveServiceRequest, triggerRequestProcessing, checkServiceRequestStatus, ServiceRequest } from '@/services/requestService';

const ServicePromptInterface: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [extractedData, setExtractedData] = useState<ServiceRequest | null>(null);
  const [requestId, setRequestId] = useState<string | null>(null);
  const [requestStatus, setRequestStatus] = useState<string>('pending');
  const [receiptUrl, setReceiptUrl] = useState<string | null>(null);
  const { toast } = useToast();
  
  // Poll for updates to the service request status
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (requestId && requestStatus !== 'done' && requestStatus !== 'error') {
      interval = setInterval(async () => {
        const { status, receipt_url } = await checkServiceRequestStatus(requestId);
        setRequestStatus(status);
        
        if (receipt_url) {
          setReceiptUrl(receipt_url);
        }
        
        if (status === 'done' || status === 'error') {
          clearInterval(interval);
          
          // Show toast notification based on status
          if (status === 'done') {
            toast({
              title: "Service Request Complete",
              description: "Your request has been processed successfully!",
              duration: 5000,
            });
          } else if (status === 'error') {
            toast({
              title: "Processing Error",
              description: "There was an error processing your request.",
              variant: "destructive",
              duration: 5000,
            });
          }
        }
      }, 15000); // Poll every 15 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [requestId, requestStatus, toast]);
  
  const handlePromptSubmission = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter your request.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsProcessing(true);
      setCurrentStep('Analyzing your request...');
      setProgress(10);
      
      // Extract data from the prompt
      const extractedData = await extractDataFromPrompt(prompt);
      setExtractedData(extractedData);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCurrentStep('Identifying required service...');
      setProgress(30);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCurrentStep('Preparing service workflow...');
      setProgress(60);
      
      // Save the request to Supabase
      const { data, error } = await saveServiceRequest(extractedData as ServiceRequest);
      
      if (error) {
        throw new Error(`Error saving request: ${error.message}`);
      }
      
      setCurrentStep('Initializing automation...');
      setProgress(80);
      
      // Store the request ID for status polling
      if (data) {
        setRequestId(data.id);
      }
      
      // Trigger the webhook to start processing
      await triggerRequestProcessing(data.id);
      
      setProgress(100);
      setCurrentStep('Request submitted! Waiting for processing...');
      
      toast({
        title: "Request Submitted",
        description: `Your ${extractedData.service_type} request has been submitted for processing.`,
        duration: 5000,
      });
      
      // In a real implementation, we'd poll for status updates
      // For now, we'll just set a timeout to simulate the status change
      setTimeout(() => {
        setRequestStatus('processing');
        setCurrentStep('Your request is being processed...');
        
        // Simulate completion after some time (would be replaced by polling in production)
        setTimeout(() => {
          setRequestStatus('done');
          setReceiptUrl('https://example.com/receipt.pdf'); // Simulated receipt URL
          setCurrentStep('Your request is complete!');
        }, 10000);
      }, 3000);
      
    } catch (error) {
      console.error("Error processing request:", error);
      toast({
        title: "Processing Error",
        description: "We couldn't process your request. Please try again.",
        variant: "destructive",
      });
      setIsProcessing(false);
      setCurrentStep(null);
      setProgress(0);
    }
  };
  
  const resetForm = () => {
    setPrompt('');
    setIsProcessing(false);
    setCurrentStep(null);
    setProgress(0);
    setExtractedData(null);
    setRequestId(null);
    setRequestStatus('pending');
    setReceiptUrl(null);
  };
  
  const downloadReceipt = () => {
    if (receiptUrl) {
      window.open(receiptUrl, '_blank');
    }
  };

  return (
    <Card className="shadow-md border-blue-100">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-800">Tell us what you need</h3>
        <p className="text-gray-600 text-sm mb-4">
          Type your request in simple language, for example: 
          "I want to update my Aadhaar address" or "Apply for PAN card"
        </p>
        
        <div className="space-y-4">
          {requestStatus === 'done' ? (
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-green-800 mb-2">Request Complete!</h4>
              <p className="text-green-700 mb-4">Your {extractedData?.service_type} request has been processed successfully.</p>
              
              {receiptUrl && (
                <Button 
                  onClick={downloadReceipt} 
                  className="bg-green-600 hover:bg-green-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Receipt
                </Button>
              )}
              
              <Button 
                variant="outline"
                onClick={resetForm}
                className="w-full mt-4">
                Submit Another Request
              </Button>
            </div>
          ) : (
            <>
              <Textarea
                placeholder="Type your request here..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                disabled={isProcessing}
                className="min-h-[120px] focus:border-blue-400"
              />
              
              {isProcessing && (
                <div className="space-y-2">
                  <p className="text-sm text-blue-600">{currentStep}</p>
                  <Progress value={progress} className="h-2" />
                  
                  {extractedData && requestStatus !== 'pending' && (
                    <div className="bg-blue-50 p-4 rounded-md mt-4 border border-blue-100">
                      <h4 className="text-sm font-semibold text-blue-700 mb-2">Extracted Information:</h4>
                      <ul className="space-y-1 text-sm">
                        <li><span className="font-medium">Name:</span> {extractedData.full_name}</li>
                        <li><span className="font-medium">Service:</span> {extractedData.service_type}</li>
                        <li><span className="font-medium">Action:</span> {extractedData.action_type}</li>
                        {extractedData.dob && <li><span className="font-medium">Date of Birth:</span> {extractedData.dob}</li>}
                        {extractedData.mobile && <li><span className="font-medium">Mobile:</span> {extractedData.mobile}</li>}
                        {extractedData.aadhaar && <li><span className="font-medium">Aadhaar:</span> {extractedData.aadhaar}</li>}
                        {extractedData.father_name && <li><span className="font-medium">Father's Name:</span> {extractedData.father_name}</li>}
                        {extractedData.address && <li><span className="font-medium">Address:</span> {extractedData.address}</li>}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              
              <Button 
                onClick={handlePromptSubmission} 
                disabled={isProcessing || !prompt.trim()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Request
                  </>
                )}
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicePromptInterface;
