
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ExternalLink, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-foreground">J GROUPS Enterprises</h3>
            <p className="mb-4 text-muted-foreground">
              Your Trusted Digital Seva Partner Since 2020
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span className="text-sm">Authorized Partner</span>
            </div>
            <p className="mt-4 text-muted-foreground">© {currentYear} All rights reserved.</p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-foreground">Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/smart-automation" className="text-muted-foreground hover:text-primary transition-colors">Smart Automation</Link>
              <Link to="/track" className="text-muted-foreground hover:text-primary transition-colors">Track Application</Link>
              <Link to="/admin" className="text-muted-foreground hover:text-primary transition-colors">Admin Panel</Link>
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span>info@jgroups.in</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span>Bihar, India</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
              <p>
                All government trademarks and links belong to their respective owners. 
                J GROUPS is a service platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
