
import React, { useState } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import ServicesGrid from '@/components/ServicesGrid';
import HelpSection from '@/components/HelpSection';
import { services, Service } from '@/data/services';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [filteredServices, setFilteredServices] = useState(services);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const { toast } = useToast();

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredServices(services);
      return;
    }

    const filtered = services.filter(
      (service) =>
        service.title.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredServices(filtered);
  };

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    
    // Open in new tab
    window.open(service.url, '_blank');
    
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
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Government Services Portal</h2>
            <p className="text-gray-600">
              Access all essential government services through our user-friendly portal. 
              Click on any service to visit the official website.
            </p>
          </div>

          <SearchBar onSearch={handleSearch} />
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-10">
              <h3 className="text-xl text-gray-600">No services found matching your search.</h3>
              <p className="text-gray-500 mt-2">Please try a different search term.</p>
            </div>
          ) : (
            <ServicesGrid 
              services={filteredServices} 
              onServiceClick={handleServiceClick} 
            />
          )}
          
          <HelpSection selectedService={selectedService} />
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

export default Index;
