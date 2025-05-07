
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import ServicesGrid from '@/components/ServicesGrid';
import HelpSection from '@/components/HelpSection';
import StateSelector from '@/components/StateSelector';
import CategorySelector from '@/components/CategorySelector';
import { services, Service, categories } from '@/data/services';
import { getStateUrl } from '@/data/states';
import { useToast } from '@/hooks/use-toast';

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
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Government Services Portal</h2>
            <p className="text-gray-600">
              Access all essential government services through our user-friendly portal. 
              Click on any service to visit the official website.
            </p>
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
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                Showing services for <span className="font-medium">{selectedState}</span>. 
                State-specific services will use your state's portal.
              </p>
            </div>
          )}
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-10">
              <h3 className="text-xl text-gray-600">No services found matching your search.</h3>
              <p className="text-gray-500 mt-2">Please try a different search term.</p>
            </div>
          ) : (
            <ServicesGrid 
              services={filteredServices} 
              onServiceClick={handleServiceClick}
              selectedState={selectedState}
              selectedCategory={selectedCategory}
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
