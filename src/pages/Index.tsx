
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import ImageSlider from '@/components/ImageSlider';
import SearchBar from '@/components/SearchBar';
import ServicesGrid from '@/components/ServicesGrid';
import HelpSection from '@/components/HelpSection';
import StateSelector from '@/components/StateSelector';
import CategorySelector from '@/components/CategorySelector';
import { services, Service, categories } from '@/data/services';
import { getStateUrl } from '@/data/states';
import { useToast } from '@/hooks/use-toast';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

// Define slider images
const sliderImages = [
  {
    src: '/lovable-uploads/c9d627ba-a002-49d3-b05d-1b1007a62f01.png',
    alt: 'Digital India Initiative'
  },
  {
    src: '/lovable-uploads/002488bb-3ca1-405e-81ec-86819c8eeaf5.png',
    alt: 'Digital India Services'
  },
  {
    src: '/lovable-uploads/010d08a8-a659-453c-8eee-62302e1645f6.png',
    alt: 'Digital Seva Portal'
  },
  {
    src: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1074',
    alt: 'Government Services Online'
  },
  {
    src: 'https://images.unsplash.com/photo-1485452499676-62ab02c20e83?q=80&w=1170',
    alt: 'Digital Documentation'
  }
];

const Index = () => {
  const [filteredServices, setFilteredServices] = useState(services);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { toast } = useToast();

  // Filter services when search query or category changes
  useEffect(() => {
    let result = services;
    
    // Apply search filter if query exists
    if (searchQuery) {
      result = result.filter(
        (service) =>
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredServices(result);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    toast({
      title: "State Selected",
      description: `You've selected ${state}. State-specific services are now available.`,
      duration: 3000,
    });
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    toast({
      title: "Category Selected",
      description: `Showing ${categories.find(c => c.id === category)?.name} services.`,
      duration: 2000,
    });
  };

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    
    // Check if service requires state selection
    if (service.requiresState && !selectedState) {
      toast({
        title: "State Required",
        description: "Please select your state first to access this service.",
        duration: 3000,
      });
      return;
    }

    // Determine the correct URL to use
    let serviceUrl = service.url;
    if (service.requiresState && selectedState) {
      const stateUrl = getStateUrl(selectedState);
      if (stateUrl) {
        serviceUrl = stateUrl;
      }
    }
    
    // Open in new tab
    window.open(serviceUrl, '_blank');
    
    toast({
      title: "Opening Portal",
      description: `Redirecting to ${service.title} in a new tab.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="max-w-screen-xl mx-auto">
          {/* Image Slider */}
          <div className="mb-8">
            <ImageSlider images={sliderImages} autoSlideInterval={5000} />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="w-full md:w-2/3">
              <SearchBar onSearch={handleSearch} />
            </div>
            
            <div className="w-full md:w-auto">
              <StateSelector 
                selectedState={selectedState}
                onStateSelect={handleStateSelect}
              />
            </div>
          </div>
          
          <div className="mb-6">
            <CategorySelector 
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />
          </div>
          
          {selectedState && (
            <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
              <p className="text-sm text-blue-800 flex items-center">
                <span className="font-medium mr-2">📍 {selectedState}</span> 
                services are active. State-specific portals will use your state's official website.
              </p>
            </div>
          )}
          
          <ServicesGrid 
            services={filteredServices} 
            onServiceClick={handleServiceClick}
            selectedState={selectedState}
            selectedCategory={selectedCategory}
          />
          
          <div className="mt-10 mb-6">
            <Collapsible>
              <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Common Service Requests</h3>
                <CollapsibleTrigger className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <ChevronDown className="h-5 w-5" />
                </CollapsibleTrigger>
              </div>
              
              <CollapsibleContent>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-medium text-blue-700 mb-3">Identity Documents</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="p-2 bg-gray-50 rounded-md">"I want to apply for a PAN card."</li>
                        <li className="p-2 bg-gray-50 rounded-md">"Help me update my Aadhaar card address."</li>
                        <li className="p-2 bg-gray-50 rounded-md">"Download my voter ID card."</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-green-700 mb-3">Education & Admissions</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="p-2 bg-gray-50 rounded-md">"Check my Bihar Board 10th result."</li>
                        <li className="p-2 bg-gray-50 rounded-md">"Apply for 11th admission using OFSS Bihar."</li>
                        <li className="p-2 bg-gray-50 rounded-md">"Download admit card for BPSC exam."</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-amber-700 mb-3">Certificates</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="p-2 bg-gray-50 rounded-md">"Apply for a caste certificate in Bihar."</li>
                        <li className="p-2 bg-gray-50 rounded-md">"I need an income certificate in UP."</li>
                        <li className="p-2 bg-gray-50 rounded-md">"Get a domicile certificate for college."</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-purple-700 mb-3">Employment & Jobs</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="p-2 bg-gray-50 rounded-md">"Apply for SSC CHSL exam."</li>
                        <li className="p-2 bg-gray-50 rounded-md">"Register me for an E-Shram card."</li>
                        <li className="p-2 bg-gray-50 rounded-md">"Apply for MSME Udyam certificate."</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          <HelpSection selectedService={selectedService} />
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
    </div>
  );
};

export default Index;
