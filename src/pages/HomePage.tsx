
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import SmartAutomationPreview from '@/components/SmartAutomationPreview';
import HowItWorksSection from '@/components/HowItWorksSection';
import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <ManualServices />
        <ServicesSection />
        <SmartAutomationPreview />
        <HowItWorksSection />
        <AboutSection />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
