
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, CheckCircle } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: 2020, title: "Foundation", description: "J GROUPS Enterprises was established with a vision to simplify government services." },
    { year: 2021, title: "Digital Expansion", description: "Launched our first AI-powered document automation tools." },
    { year: 2022, title: "Growth & Recognition", description: "Expanded services to cover all major government documents and received industry recognition." },
    { year: 2023, title: "AI Innovation", description: "Integrated advanced natural language processing for our Smart Automation system." },
    { year: 2024, title: "Nationwide Presence", description: "Established operations across all Indian states with localized service support." }
  ];

  const team = [
    { name: "Rajesh Kumar", role: "Founder & CEO", bio: "Tech entrepreneur with 15+ years in government service optimization." },
    { name: "Priya Singh", role: "AI Research Lead", bio: "Ph.D. in Computer Science specializing in natural language processing and automation." },
    { name: "Aditya Patel", role: "Operations Director", bio: "Expert in streamlining bureaucratic processes with public sector experience." },
    { name: "Neha Sharma", role: "Customer Experience Head", bio: "Dedicated to making complex processes simple for all citizens." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 heading-gradient">About J GROUPS Enterprises</h1>
            
            <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8 mt-8">
              <p className="text-lg mb-6">
                J GROUPS Enterprises is India's leading government service automation platform, 
                dedicated to transforming how citizens interact with government systems.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Our mission is to eliminate bureaucratic friction through intelligent automation, 
                making essential services accessible to all Indians regardless of technical knowledge or location.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center text-center bg-background p-6 rounded-lg border border-border">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">Trusted Platform</h3>
                  <p className="text-sm text-muted-foreground">Secure processing of over 100,000 applications monthly</p>
                </div>
                
                <div className="flex flex-col items-center text-center bg-background p-6 rounded-lg border border-border">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">Award-Winning</h3>
                  <p className="text-sm text-muted-foreground">Recognized for innovation in public service delivery</p>
                </div>
                
                <div className="flex flex-col items-center text-center bg-background p-6 rounded-lg border border-border">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">National Network</h3>
                  <p className="text-sm text-muted-foreground">Supporting citizens across all 28 states and 8 union territories</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 heading-gradient text-center">Our Journey</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="mb-12 relative">
                    <div className="absolute -left-[37px] bg-background p-1">
                      <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                    </div>
                    
                    <div className="bg-card border border-border rounded-lg p-6">
                      <div className="flex items-start">
                        <span className="text-primary font-bold text-lg mr-3">{milestone.year}</span>
                        <div>
                          <h3 className="font-medium mb-1">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 heading-gradient text-center">Our Leadership</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="bg-card border-border h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">{member.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-lg font-medium text-center mb-1">{member.name}</h3>
                    <p className="text-sm text-primary text-center mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 heading-gradient text-center">Our Commitments</h2>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { title: "Service Excellence", description: "We're committed to providing the highest quality of service to every citizen." },
                { title: "Digital Inclusion", description: "Making digital government services accessible to all Indians, regardless of technical knowledge." },
                { title: "Data Privacy", description: "Maintaining the highest standards of security and privacy for all user information." },
                { title: "Continuous Innovation", description: "Constantly improving our AI and automation systems to provide better, faster service." },
              ].map((commitment, index) => (
                <div key={index} className="flex bg-card border border-border rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-medium mb-1">{commitment.title}</h3>
                    <p className="text-sm text-muted-foreground">{commitment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
