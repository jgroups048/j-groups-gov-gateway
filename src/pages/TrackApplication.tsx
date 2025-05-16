
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { FileSearch, Loader2, AlertCircle, Clock, CheckCircle, RotateCw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface ApplicationStatus {
  id: string;
  service_name: string;
  status: 'Pending' | 'Processing' | 'Done';
  last_updated: string;
  details?: string;
}

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  switch (status) {
    case 'Pending':
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100/10 text-yellow-500 border border-yellow-500/20">
          <Clock className="w-3 h-3 mr-1" />
          Pending
        </span>
      );
    case 'Processing':
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100/10 text-blue-500 border border-blue-500/20">
          <RotateCw className="w-3 h-3 mr-1 animate-spin" />
          Processing
        </span>
      );
    case 'Done':
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100/10 text-green-500 border border-green-500/20">
          <CheckCircle className="w-3 h-3 mr-1" />
          Completed
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100/10 text-gray-500 border border-gray-500/20">
          {status}
        </span>
      );
  }
};

const TrackApplication = () => {
  const [applicationId, setApplicationId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [application, setApplication] = useState<ApplicationStatus | null>(null);
  
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!applicationId.trim()) {
      setError('Please enter an application ID');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // Fetch application status from Supabase
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .eq('id', applicationId)
        .single();
      
      if (error) throw error;
      
      if (data) {
        setApplication({
          id: data.id,
          service_name: data.service_name,
          status: data.status,
          last_updated: new Date(data.updated_at).toLocaleString(),
          details: data.details
        });
      } else {
        setError('No application found with this ID');
        setApplication(null);
      }
    } catch (err) {
      console.error('Error fetching application:', err);
      setError('Application not found or invalid ID');
      setApplication(null);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient flex items-center justify-center">
              <FileSearch className="h-8 w-8 mr-2 text-primary" />
              Track Your Application
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enter your application ID to get real-time status updates.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <form onSubmit={handleSearch} className="space-y-4">
                  <div>
                    <label htmlFor="applicationId" className="block text-sm font-medium mb-1">
                      Application ID
                    </label>
                    <div className="flex space-x-4">
                      <Input
                        id="applicationId"
                        value={applicationId}
                        onChange={(e) => setApplicationId(e.target.value)}
                        placeholder="Enter your application ID"
                        className="flex-1 input-glow"
                      />
                      <Button 
                        type="submit" 
                        className="button-glow"
                        disabled={isLoading}
                      >
                        {isLoading ? 
                          <Loader2 className="h-4 w-4 animate-spin" /> : 
                          'Track Status'}
                      </Button>
                    </div>
                  </div>
                </form>
                
                {error && (
                  <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-md flex items-start">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mr-2" />
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}
                
                {application && (
                  <div className="mt-6 border border-border rounded-md overflow-hidden">
                    <div className="bg-secondary p-4">
                      <h3 className="font-medium">Application Details</h3>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Application ID</p>
                          <p className="font-mono">{application.id}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Service</p>
                          <p>{application.service_name}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Status</p>
                          <div className="mt-1">
                            <StatusBadge status={application.status} />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Last Updated</p>
                          <p>{application.last_updated}</p>
                        </div>
                      </div>
                      
                      {application.details && (
                        <div>
                          <p className="text-sm text-muted-foreground">Details</p>
                          <p className="mt-1 text-sm">{application.details}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="mt-6 text-sm text-muted-foreground">
                  <p>
                    Don't have an application ID? Use our 
                    <a href="/smart-automation" className="text-primary hover:underline ml-1">
                      Smart Automation
                    </a> to start a new application.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TrackApplication;
