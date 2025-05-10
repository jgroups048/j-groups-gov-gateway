
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import SearchFilterBar from '@/components/SearchFilterBar';
import ServicesGrid from '@/components/ServicesGrid';
import StateNotification from '@/components/StateNotification';
import CategorySelector from '@/components/CategorySelector';
import Footer from '@/components/Footer';
import { services, Service, categories } from '@/data/services';
import { getStateUrl } from '@/data/states';
import { useToast } from '@/hooks/use-toast';
import { FeaturedServices } from '@/components/FeaturedServices';
import { Container } from '@/components/Container';
import { AboutSection } from '@/components/AboutSection';

const HomePage = () => {
  const [filteredServices, setFilteredServices] = useState(services);
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
      
      <main className="flex-grow">
        <Banner />
        
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-center my-8 text-blue-700">
            Government Services Portal
          </h1>
          
          <AboutSection />
          
          <div className="my-10">
            <h2 className="text-2xl font-bold mb-6 text-blue-700">
              Featured Services
            </h2>
            <FeaturedServices onServiceClick={handleServiceClick} />
          </div>
          
          <div className="my-10">
            <h2 className="text-2xl font-bold mb-6 text-blue-700">
              All Government Services
            </h2>
            
            <SearchFilterBar 
              onSearch={handleSearch}
              selectedState={selectedState}
              onStateSelect={handleStateSelect}
            />
            
            <div className="mt-6">
              <CategorySelector 
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
              />
            </div>
            
            <StateNotification selectedState={selectedState} />
            
            <ServicesGrid 
              services={filteredServices} 
              onServiceClick={handleServiceClick}
              selectedState={selectedState}
              selectedCategory={selectedCategory}
            />
          </div>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
