
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 heading-gradient">
            India's Fastest Government Document Automation Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Automate PAN, Aadhaar, Passport, and more in seconds. Save time and eliminate bureaucratic hassle with our AI-powered solutions.
          </p>
          <Link to="/smart-automation">
            <Button size="lg" className="button-glow text-lg px-8 py-6 h-auto rounded-full">
              Start Automation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="flex items-center bg-card/50 rounded-full px-4 py-2 border border-border">
              <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
              <span className="text-sm text-muted-foreground">24/7 Online Service</span>
            </div>
            <div className="flex items-center bg-card/50 rounded-full px-4 py-2 border border-border">
              <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
              <span className="text-sm text-muted-foreground">100% Secure & Private</span>
            </div>
            <div className="flex items-center bg-card/50 rounded-full px-4 py-2 border border-border">
              <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
              <span className="text-sm text-muted-foreground">AI-Powered Automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
