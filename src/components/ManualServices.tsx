import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, UserCheck, FileCheck2, Passport, FileSignature, GraduationCap } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, url }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full transition-transform hover:scale-[1.02]">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-100 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <Button variant="outline" className="w-full group" onClick={() => window.open(url, '_blank')}>
        Visit Portal
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
      icon: <UserCheck className="h-6 w-6 text-blue-600" />,
      url: 'https://uidai.gov.in/'
    },
    {
      title: 'PAN Card Apply',
      description: 'Apply for new PAN or correct existing PAN',
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      url: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html'
    },
    {
      title: 'GST Portal',
      description: 'Goods and Services Tax registration and filing',
      icon: <FileCheck2 className="h-6 w-6 text-blue-600" />,
      url: 'https://www.gst.gov.in/'
    },
    {
      title: 'OFSS Bihar',
      description: 'Online Facilitation System for Students - Bihar',
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
      url: 'https://ofssbihar.in/'
    },
    {
      title: 'E-Shram',
      description: 'National Database of Unorganized Workers',
      icon: <FileSignature className="h-6 w-6 text-blue-600" />,
      url: 'https://register.eshram.gov.in/'
    },
    {
      title: 'Passport Services',
      description: 'Apply for passport or check application status',
      icon: <Passport className="h-6 w-6 text-blue-600" />,
      url: 'https://www.passportindia.gov.in/'
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="manual-services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Manual Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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