
import React from 'react';
import { CreditCard, Fingerprint, Vote, FileCheck, FileText, BadgeCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, url }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };
  
  return (
    <div className="service-card">
      <div className="service-icon">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 text-sm">{description}</p>
      <Button variant="outline" onClick={handleClick} className="mt-auto group">
        Start Now
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "PAN Card",
      description: "Apply for new PAN card or make corrections to your existing one.",
      icon: <CreditCard className="h-6 w-6" />,
      url: "https://automation-tool-sd41.onrender.com/pan"
    },
    {
      title: "Aadhaar",
      description: "Update your Aadhaar details or apply for a new one.",
      icon: <Fingerprint className="h-6 w-6" />,
      url: "https://automation-tool-sd41.onrender.com/aadhaar"
    },
    {
      title: "Voter ID",
      description: "Register as a voter or update your existing voter ID card.",
      icon: <Vote className="h-6 w-6" />,
      url: "https://automation-tool-sd41.onrender.com/voter"
    },
    {
      title: "Passport",
      description: "Apply for passport or track your existing application.",
      icon: <FileCheck className="h-6 w-6" />,
      url: "https://automation-tool-sd41.onrender.com/passport"
    },
    {
      title: "Birth Certificate",
      description: "Apply for or download your birth certificate.",
      icon: <FileText className="h-6 w-6" />,
      url: "https://automation-tool-sd41.onrender.com/birth"
    },
    {
      title: "Caste & Income Certificate",
      description: "Apply for caste or income certificates.",
      icon: <BadgeCheck className="h-6 w-6" />,
      url: "https://automation-tool-sd41.onrender.com/caste-income"
    },
  ];

  return (
    <section className="py-16 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fast and reliable automation for all your government document needs. No more long queues or complicated procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              url={service.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
