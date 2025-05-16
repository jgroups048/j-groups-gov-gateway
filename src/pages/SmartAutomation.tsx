
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, MessageSquare, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const SmartAutomation = () => {
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      toast({
        title: "Empty prompt",
        description: "Please enter what you want to do",
        variant: "destructive",
      });
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // Store query in Supabase
      try {
        await supabase.from('smart_queries').insert([{
          query: prompt,
          timestamp: new Date().toISOString()
        }]);
      } catch (error) {
        console.error('Error storing query:', error);
        // Continue even if storage fails
      }
      
      // Call the automation API
      const response = await fetch(`https://automation-tool-sd41.onrender.com/smart?query=${encodeURIComponent(prompt)}`);
      
      if (!response.ok) {
        throw new Error('API responded with an error');
      }
      
      const data = await response.json();
      
      // If API returns a URL, redirect user
      if (data.redirectUrl) {
        navigate(data.redirectUrl);
      } else if (data.url) {
        // If external URL, open in new tab
        window.open(data.url, '_blank');
        toast({
          title: "Redirecting to service",
          description: "Opening the relevant service in a new tab",
        });
        setPrompt('');
      } else {
        // If no URL, show a generic success message
        toast({
          title: "Request processed",
          description: data.message || "Your request has been processed successfully",
        });
      }
    } catch (error) {
      console.error('Error processing request:', error);
      toast({
        title: "Something went wrong",
        description: "We couldn't process your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 heading-gradient flex items-center justify-center">
              <Sparkles className="h-8 w-8 mr-2 text-primary" />
              Smart Automation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us what you need, we'll automate it.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="prompt" className="block text-lg font-medium mb-2">
                    What do you want to do?
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      id="prompt"
                      value={prompt}
                      onChange={handlePromptChange}
                      placeholder="e.g., Apply for new Voter ID"
                      className="pl-10 py-6 text-lg input-glow"
                      disabled={isProcessing}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Type your request in plain language, like you would ask a human assistant.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm">Examples:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Apply for new PAN card", "Update address in Aadhaar", "Download birth certificate", "Check passport status"].map((example) => (
                      <button
                        key={example}
                        type="button"
                        onClick={() => setPrompt(example)}
                        className="text-xs bg-background rounded-full px-3 py-1.5 border border-border hover:border-primary/50 transition-colors"
                      >
                        {example}
                      </button>
                    ))}
                  </div>
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full button-glow"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Start
                    </>
                  )}
                </Button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="font-medium mb-2">How it works:</h3>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Enter what you want to do in plain language</li>
                  <li>Our AI determines the exact service you need</li>
                  <li>You'll be redirected to the appropriate service</li>
                  <li>Complete your task with guided assistance</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SmartAutomation;
