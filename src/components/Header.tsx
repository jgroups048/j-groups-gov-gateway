
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ExternalLink, User, LogOut, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
  const { toast } = useToast();
  const { user, signOut, isAdmin } = useAuth();

  const handleDownload = () => {
    // Show a toast notification
    toast({
      title: "Downloading App",
      description: "Your download will start automatically. Once downloaded, you can install it for app mode.",
      duration: 5000,
    });
  };

  return (
    <header className="sticky top-0 z-10 bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold animate-[glow_2s_ease-in-out_infinite] relative">
            <Link to="/" className="flex items-center">
              <span className="mr-2">🏛️</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                J GROUPS Enterprises
              </span>
            </Link>
            <div className="absolute h-1 w-1/2 bottom-0 left-0 bg-gradient-to-r from-transparent to-white/40 rounded"></div>
          </h1>
          <p className="hidden md:block ml-4 text-sm text-blue-100">Your Trusted Digital Seva Partner Since 2020</p>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/about" className="bg-blue-600/80 hover:bg-blue-500 px-3 py-1 rounded-md text-sm font-medium transition-colors flex items-center">
            <ExternalLink className="h-3.5 w-3.5 mr-1" />
            About Us
          </Link>
          <a 
            href="https://raw.githubusercontent.com/jgroups048/j-groups-gov-gateway/main/J%20GROUPS%20Enterprises_1_1.0.apk"
            download="J_GROUPS_Enterprises.apk"
            onClick={handleDownload}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 py-2 rounded-md transition-colors flex items-center"
          >
            <Download className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Download J GROUPS App</span>
          </a>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-white text-white hover:bg-blue-600 hover:text-white">
                  <User className="h-4 w-4 mr-2" />
                  {user.email?.split('@')[0]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/profile" className="flex items-center w-full">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                {isAdmin && (
                  <DropdownMenuItem>
                    <Link to="/admin" className="flex items-center w-full">
                      <Settings className="mr-2 h-4 w-4" />
                      Admin Dashboard
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth/login">
              <Button variant="outline" className="border-white text-white hover:bg-blue-600 hover:text-white">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
