
import React from 'react';
import { Shield, Bot, Clock } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Secure & Trusted",
      description: "Your data is encrypted and protected with the highest security standards."
    },
    {
      icon: <Bot className="h-6 w-6 text-primary" />,
      title: "AI-Powered",
      description: "Our advanced AI bots handle paperwork and bureaucracy for you."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Time-Saving",
      description: "Complete processes in minutes that would normally take days or weeks."
    }
  ];
  
  return (
    <section className="py-16 bg-card border-y border-border" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">About J GROUPS Enterprises</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-6">
              J GROUPS Enterprises is at the forefront of government service automation in India, 
              helping thousands of citizens navigate complex bureaucratic processes with ease.
            </p>
            <p className="text-muted-foreground mb-6">
              Founded in 2020, our mission is to make government services accessible to everyone 
              through cutting-edge AI technology that simplifies document processing, 
              application tracking, and follow-ups.
            </p>
            <p className="text-muted-foreground">
              With our platform, what used to take weeks can now be completed in minutes, 
              saving you time, effort, and unnecessary stress.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex p-4 bg-background rounded-lg border border-border">
                <div className="mr-4 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
