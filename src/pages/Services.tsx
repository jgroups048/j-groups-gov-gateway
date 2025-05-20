import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, MessageSquare, Clock, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Business Registration',
    description: 'Register your business with government authorities',
    icon: <FileText className="h-6 w-6" />,
    processingTime: '3-5 working days',
    type: 'manual'
  },
  {
    id: 2,
    title: 'License Application',
    description: 'Apply for business licenses and permits',
    icon: <FileText className="h-6 w-6" />,
    processingTime: '5-7 working days',
    type: 'manual'
  },
  {
    id: 3,
    title: 'Smart Business Registration',
    description: 'AI-powered business registration process',
    icon: <MessageSquare className="h-6 w-6" />,
    processingTime: '1-2 working days',
    type: 'smart'
  },
  {
    id: 4,
    title: 'Smart License Application',
    description: 'Automated license application processing',
    icon: <MessageSquare className="h-6 w-6" />,
    processingTime: '2-3 working days',
    type: 'smart'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
              Our Services
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of manual and smart automated services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="ml-4 flex-grow">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          service.type === 'smart' ? 'bg-blue-100/10 text-blue-500 border border-blue-500/20' : 
                          'bg-purple-100/10 text-purple-500 border border-purple-500/20'
                        }`}>
                          {service.type === 'smart' ? 'Smart Service' : 'Manual Service'}
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-2">{service.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {service.processingTime}
                        </div>
                        <Button variant="outline" size="sm">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Need help choosing the right service? Try our smart automation system
            </p>
            <Button size="lg" className="button-glow">
              Try Smart Automation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;