
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const AdminPanel = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // This is just a placeholder for demo purposes
    // In a real application, you would connect to Supabase auth
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        toast({
          title: "Login successful",
          description: "Welcome to the admin panel",
        });
        navigate('/admin/dashboard'); // This route doesn't exist yet
      } else {
        toast({
          title: "Login failed",
          description: "Invalid credentials. Try admin/admin123 for demo.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow py-16 flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold heading-gradient">Admin Panel</h1>
            <p className="text-muted-foreground mt-2">
              Log in to access the administrative dashboard
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium mb-1">
                  Username
                </label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-glow"
                  placeholder="Enter admin username"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-glow"
                  placeholder="Enter password"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full button-glow"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
            
            <div className="mt-4 text-sm text-center text-muted-foreground">
              <p>For demo: use admin/admin123</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminPanel;
