import React from 'react';
import { MousePointerClick, Bot, CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <MousePointerClick className="h-8 w-8 text-primary" />,
      title: "Step 1",
      description: "Choose a service or type your request"
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "Step 2", 
      description: "Our AI routes it to the right bot"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Step 3",
      description: "You get automated results"
    }
  ];

  return (
    <section className="py-16 bg-background" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform makes government services simple and fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={index} className="step-card relative text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-card/80 border border-primary/30 mb-4 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowIcon />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" 
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" 
      stroke="currentColor" strokeWidth="2" 
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default HowItWorksSection;
