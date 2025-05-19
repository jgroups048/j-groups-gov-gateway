import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, UserCheck, FileCheck, Car, User } from 'lucide-react';

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

const ManualServices = () => {
  const services = [
    {
      title: 'Aadhaar Portal',
      description: 'Update, download, or check Aadhaar status',
      icon: <User className="h-6 w-6" />,
      url: 'https://myaadhaar.uidai.gov.in/'
    },
    {
      title: 'PAN Card Apply',
      description: 'Apply for new PAN or correct existing PAN',
      icon: <FileText className="h-6 w-6" />,
      url: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html'
    },
    {
      title: 'Voter ID Registration',
      description: 'Registration, correction, and download of voter ID',
      icon: <UserCheck className="h-6 w-6" />,
      url: 'https://voters.eci.gov.in/'
    },
    {
      title: 'Passport Services',
      description: 'Apply for passport or check application status',
      icon: <FileCheck className="h-6 w-6" />,
      url: 'https://www.passportindia.gov.in/'
    },
    {
      title: 'Driving License',
      description: 'Apply for license, RC, and other vehicle services',
      icon: <Car className="h-6 w-6" />,
      url: 'https://parivahan.gov.in/'

    }
  ];

  return (
    <section className="py-16 bg-background" id="manual-services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Manual Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Direct access to official government portals and services. Quick links to essential document processing and registration platforms.
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

export default ManualServices;