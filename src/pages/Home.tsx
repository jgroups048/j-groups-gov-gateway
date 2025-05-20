import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, MessageSquare, FileSearch } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
              Welcome to J GROUPS Enterprises
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Your trusted partner for government services and smart automation solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="button-glow">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Manual Services */}
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Manual Services</h3>
                <p className="text-muted-foreground mb-4">
                  Traditional government services with expert assistance
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>

              {/* Smart Automation */}
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Automation</h3>
                <p className="text-muted-foreground mb-4">
                  AI-powered solutions for faster service processing
                </p>
                <Button variant="outline" className="w-full">
                  Try Now
                </Button>
              </div>

              {/* Track Application */}
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileSearch className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Track Application</h3>
                <p className="text-muted-foreground mb-4">
                  Real-time tracking of your service applications
                </p>
                <Button variant="outline" className="w-full">
                  Track Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the convenience of our government services platform
            </p>
            <Button size="lg" className="button-glow">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;