
import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Header: React.FC = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    // Show a toast notification
    toast({
      title: "Downloading App",
      description: "Your download will start automatically. Once downloaded, you can install it for app mode.",
      duration: 5000,
    });

    // Create a manifest.json file URL
    const manifestUrl = `${window.location.origin}/manifest.json`;

    // Simulate app download by opening a new tab
    // In a real PWA, this would be handled by the service worker
    const newTab = window.open(manifestUrl, '_blank');
    if (newTab) {
      newTab.focus();
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold animate-[glow_2s_ease-in-out_infinite]">
            <Link to="/">J GROUPS Enterprises</Link>
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline">Government Services Portal</span>
          <Link to="/about" className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-md text-sm font-medium transition-colors">
            About Us
          </Link>
          <Button 
            variant="outline" 
            className="flex items-center gap-1 text-white border-white hover:bg-blue-500" 
            onClick={handleDownload}
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download App</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
