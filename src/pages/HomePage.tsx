
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import SmartAutomationPreview from '@/components/SmartAutomationPreview';
import HowItWorksSection from '@/components/HowItWorksSection';
import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';
import ImageCarousel from '@/components/ImageCarousel';
import ManualServices from '@/components/ManualServices';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <ImageCarousel 
          images={[
            { src: '/images/digital-seva-portal.svg', alt: 'Digital Seva Portal' },
            { src: '/images/digital-india-logo.svg', alt: 'Digital India - Power To Empower' },
            { src: '/images/digital-india-6-years.svg', alt: '6 Years of Digital India' }
          ]}
        />
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
