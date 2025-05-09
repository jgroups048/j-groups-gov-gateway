
import React from 'react';
import Header from '@/components/Header';
import ServicePromptInterface from '@/components/ServicePromptInterface';
import WhatsAppSupport from '@/components/WhatsAppSupport';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  IdCard, FileSearch, Award, User, CreditCard, 
  GraduationCap, Briefcase, File 
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  const serviceCategories = [
    {
      id: 'identity',
      name: 'Identity Documents',
      description: 'Aadhaar, PAN, Voter ID, Passport, Driving License',
      icon: IdCard,
      color: 'bg-blue-100 text-blue-600',
      services: [
        { id: 'aadhaar', name: 'Aadhaar Card', url: '/service/aadhaar' },
        { id: 'pan', name: 'PAN Card', url: '/service/pan' },
        { id: 'voter', name: 'Voter ID', url: '/service/voter-id' },
        { id: 'passport', name: 'Passport', url: '/service/passport' },
        { id: 'driving-license', name: 'Driving License', url: '/service/driving-license' }
      ]
    },
    {
      id: 'certificates',
      name: 'Certificates',
      description: 'Income, Caste, Domicile, Birth, Death, Marriage',
      icon: Award,
      color: 'bg-green-100 text-green-600',
      services: [
        { id: 'income', name: 'Income Certificate', url: '/service/income-certificate' },
        { id: 'caste', name: 'Caste Certificate', url: '/service/caste-certificate' },
        { id: 'domicile', name: 'Domicile Certificate', url: '/service/domicile-certificate' },
        { id: 'birth', name: 'Birth Certificate', url: '/service/birth-certificate' },
        { id: 'death', name: 'Death Certificate', url: '/service/death-certificate' }
      ]
    },
    {
      id: 'education',
      name: 'Education Services',
      description: 'Results, Admissions, Scholarships, Transcripts',
      icon: GraduationCap,
      color: 'bg-purple-100 text-purple-600',
      services: [
        { id: 'results', name: 'Exam Results', url: '/service/exam-results' },
        { id: 'admission', name: 'College Admissions', url: '/service/college-admission' },
        { id: 'scholarship', name: 'Scholarships', url: '/service/scholarship' },
        { id: 'transcripts', name: 'Transcripts & Marksheets', url: '/service/transcripts' }
      ]
    },
    {
      id: 'employment',
      name: 'Employment & Benefits',
      description: 'E-Shram, UDYAM, Job Applications, Labor Cards',
      icon: Briefcase,
      color: 'bg-amber-100 text-amber-600',
      services: [
        { id: 'eshram', name: 'E-Shram Card', url: '/service/eshram' },
        { id: 'udyam', name: 'UDYAM Registration', url: '/service/udyam' },
        { id: 'labour', name: 'Labor Card', url: '/service/labour-card' },
        { id: 'job', name: 'Government Job Forms', url: '/service/job-forms' }
      ]
    },
    {
      id: 'financial',
      name: 'Financial Services',
      description: 'Bank Account, Insurance, Pension, Tax Filing',
      icon: CreditCard,
      color: 'bg-red-100 text-red-600',
      services: [
        { id: 'bank', name: 'Bank Account KYC', url: '/service/bank-kyc' },
        { id: 'insurance', name: 'Govt Insurance Schemes', url: '/service/insurance' },
        { id: 'pension', name: 'Pension Applications', url: '/service/pension' },
        { id: 'tax', name: 'Tax Filing Assistance', url: '/service/tax-filing' }
      ]
    },
    {
      id: 'records',
      name: 'Records & Documentation',
      description: 'Land Records, Property, Legal Documents',
      icon: FileSearch,
      color: 'bg-teal-100 text-teal-600',
      services: [
        { id: 'land', name: 'Land Records', url: '/service/land-records' },
        { id: 'property', name: 'Property Registration', url: '/service/property' },
        { id: 'legal', name: 'Legal Affidavits', url: '/service/legal' },
        { id: 'police', name: 'Police Verification', url: '/service/police-verification' }
      ]
    }
  ];
  
  const navigateToService = (url: string) => {
    navigate(url);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto mb-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              What service do you need help with?
            </h2>
            <p className="text-gray-600">
              Use our AI assistant to help you with any government service
            </p>
          </div>
          
          <ServicePromptInterface />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Browse Services by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceCategories.map((category) => (
              <Card key={category.id} className="overflow-hidden h-full hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className={`p-4 ${category.color}`}>
                    <div className="flex items-center">
                      <category.icon className="h-6 w-6 mr-2" />
                      <h3 className="font-semibold">{category.name}</h3>
                    </div>
                    <p className="text-sm mt-1">{category.description}</p>
                  </div>
                  
                  <div className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.services.map((service) => (
                        <Button
                          key={service.id}
                          variant="outline"
                          className="justify-start h-auto py-2 px-3 text-sm"
                          onClick={() => navigateToService(service.url)}
                        >
                          <File className="h-4 w-4 mr-2" />
                          {service.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-6">
                <User className="h-10 w-10 text-blue-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  Need assistance with multiple services?
                </h3>
                <p className="text-blue-700">
                  Our team can help you complete all your government service needs at once. 
                  Get personalized support for complex requirements.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">J GROUPS Enterprises</h3>
              <p className="text-sm text-gray-600">Your Trusted Digital Seva Partner Since 2020</p>
              <p className="text-sm text-gray-600 mt-2">© 2025 All rights reserved.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Contact Us</h3>
              <p className="text-sm text-gray-600">Email: info@jgroups.in</p>
              <p className="text-sm text-gray-600">Phone: +91 9876543210</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Disclaimer</h3>
              <p className="text-sm text-gray-600">
                All government trademarks and links belong to their respective owners. 
                J GROUPS is a service platform.
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      <WhatsAppSupport />
    </div>
  );
};

export default Dashboard;
