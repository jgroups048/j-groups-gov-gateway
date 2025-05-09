
import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';

const ServicePromptInterface: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  
  // Check if the user has paid the platform fee
  const hasPaid = localStorage.getItem('jgroups_payment_status') === 'paid';

  const handlePromptSubmission = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter your request.",
        variant: "destructive",
      });
      return;
    }

    if (!hasPaid) {
      toast({
        title: "Payment Required",
        description: "Please pay the platform fee before submitting your request.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsProcessing(true);
      setCurrentStep('Analyzing your request...');
      setProgress(10);
      
      // Simulate AI processing with timeouts
      await new Promise(resolve => setTimeout(resolve, 1500));
      setCurrentStep('Identifying required service...');
      setProgress(30);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      setCurrentStep('Preparing service workflow...');
      setProgress(60);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      setCurrentStep('Generating service pathway...');
      setProgress(90);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Determine the service from the prompt (placeholder for actual AI logic)
      const detectedService = detectServiceFromPrompt(prompt);
      
      setProgress(100);
      
      toast({
        title: "Request Processed",
        description: `We've prepared your ${detectedService} service. Please proceed to the next step.`,
      });
      
      // In a complete implementation, this is where you'd redirect to the appropriate service flow
      setTimeout(() => {
        setIsProcessing(false);
        setCurrentStep(null);
        setProgress(0);
      }, 2000);
      
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
  
  // Simple service detection logic (placeholder for ML/AI implementation)
  const detectServiceFromPrompt = (input: string): string => {
    const promptLower = input.toLowerCase();
    
    if (promptLower.includes('aadhaar')) return 'Aadhaar Card';
    if (promptLower.includes('pan')) return 'PAN Card';
    if (promptLower.includes('voter')) return 'Voter ID';
    if (promptLower.includes('driving') || promptLower.includes('license')) return 'Driving License';
    if (promptLower.includes('passport')) return 'Passport';
    if (promptLower.includes('certificate') || promptLower.includes('caste') || 
        promptLower.includes('income') || promptLower.includes('domicile')) return 'Certificate';
    if (promptLower.includes('exam') || promptLower.includes('result') || 
        promptLower.includes('admission')) return 'Educational Service';
    
    return 'General Government Service';
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
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicePromptInterface;
