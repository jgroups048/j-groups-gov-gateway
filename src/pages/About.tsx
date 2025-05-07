
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Headphones, ShoppingCart, House, Briefcase, Wallet } from 'lucide-react';

const About = () => {
  const sectors = [
    {
      id: 'entertainment',
      name: 'J GROUPS Entertainment Hub',
      description: 'An online media & creativity portal offering music, video, film promotion, and digital entertainment services.',
      link: 'https://jgroupsentertainmenthub.netlify.app',
      icon: Headphones,
      online: true,
    },
    {
      id: 'cart',
      name: 'J Click to Cart',
      description: 'A retail and commerce initiative offering a one-stop offline shopping and order placement experience.',
      link: '',
      icon: ShoppingCart,
      online: false,
    },
    {
      id: 'enterprises',
      name: 'J GROUPS Enterprises',
      description: 'A public-facing service hub operating in cyber cafés and digital kiosks. Offers access to government services, form filling, and job updates.',
      link: '/',
      icon: House,
      online: true,
      internal: true,
    },
    {
      id: 'consultant',
      name: 'J BRANDS & Consultant Services',
      description: 'Offline consultancy for branding, business registration, startup assistance, and government project guidance.',
      link: '',
      icon: Briefcase,
      online: false,
    },
    {
      id: 'finance',
      name: 'J GROUPS Finance',
      description: 'Offline financial support and assistance for PAN, GST, loans, UDYAM registration, and more.',
      link: '',
      icon: Wallet,
      online: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700">J GROUPS Be Professional</h1>
            <p className="text-lg text-gray-600 mt-2">Founded in 2020 by Vicky Jha</p>
          </div>
          
          {/* Company Overview */}
          <Card className="mb-10">
            <CardHeader>
              <CardTitle>Company Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                J GROUPS Be Professional is a multi-sector venture started in 2020 by Vicky Jha. 
                It is committed to delivering high-quality services across various industries including 
                entertainment, commerce, consultancy, finance, and digital service delivery.
              </p>
            </CardContent>
          </Card>
          
          {/* Sectors */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sectors of J GROUPS Be Professional</h2>
          
          <div className="space-y-4">
            {sectors.map((sector) => (
              <Card key={sector.id} className="border-l-4 border-blue-500">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <sector.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{sector.name}</CardTitle>
                    <CardDescription>
                      {sector.online ? (
                        <span className="text-green-600 font-medium">Online Service</span>
                      ) : (
                        <span className="text-amber-600 font-medium">Offline Service</span>
                      )}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{sector.description}</p>
                  
                  {sector.online && (
                    <div className="mt-2">
                      {sector.internal ? (
                        <Button variant="outline" asChild>
                          <Link to={sector.link}>
                            Visit Dashboard
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" onClick={() => window.open(sector.link, '_blank')}>
                          Visit Website
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Note */}
          <div className="mt-10 bg-blue-50 border border-blue-200 p-4 rounded-md">
            <h3 className="font-semibold text-blue-800">Note:</h3>
            <p className="text-blue-700">
              All J GROUPS services are currently available offline, except for J GROUPS Entertainment Hub
              and J GROUPS Enterprises, which are accessible online.
            </p>
          </div>
          
          {/* Back to Dashboard */}
          <div className="mt-8 text-center">
            <Button variant="default" asChild>
              <Link to="/">
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© 2025 J GROUPS Enterprises. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
