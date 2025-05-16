
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageSquare, Sparkles, ArrowRight } from 'lucide-react';

const SmartAutomationPreview = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <MessageSquare className="h-6 w-6 text-primary mr-2" />
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold ml-2">Try Smart Automation</h2>
              </div>
              <p className="text-muted-foreground">
                Tell us what you need in plain language, and our AI system will handle the rest. 
                No forms to fill out, just describe what you want.
              </p>
            </div>
            
            <Link to="/smart-automation">
              <Button size="lg" className="button-glow">
                Go to Smart Automation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartAutomationPreview;
