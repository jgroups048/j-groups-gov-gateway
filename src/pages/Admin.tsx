import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { ServiceRequest } from '@/services/requestService';
import Header from '@/components/Header';
import { Container } from '@/components/Container';
import { useToast } from '@/hooks/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Check, 
  AlertTriangle, 
  Clock, 
  RefreshCw,
  Download
} from 'lucide-react';

const Admin: React.FC = () => {
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Fetch all service requests
  const fetchRequests = async () => {
    setLoading(true);
    
    try {
      // Type assertion to work around TypeScript issues
      const { data, error } = await supabase
        .from('user_requests')
        .select('*')
        .order('created_at', { ascending: false }) as { data: ServiceRequest[] | null, error: any };
        
      if (error) {
        console.error("Error fetching requests:", error);
        toast({
          title: "Error",
          description: "Failed to load service requests",
          variant: "destructive",
        });
      } else {
        setRequests(data || []);
      }
    } catch (err) {
      console.error("Exception fetching requests:", err);
      toast({
        title: "Error",
        description: "Failed to load service requests",
        variant: "destructive",
      });
    }
    
    setLoading(false);
  };

  // Load requests on component mount
  useEffect(() => {
    fetchRequests();
  }, []);

  // Update request status
  const updateStatus = async (id: string, status: string) => {
    try {
      // Type assertion to work around TypeScript issues
      const { error } = await supabase
        .from('user_requests')
        .update({ 
          status, 
          updated_at: new Date().toISOString() 
        } as any)
        .eq('id', id);
        
      if (error) {
        console.error("Error updating status:", error);
        toast({
          title: "Error",
          description: "Failed to update request status",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Status Updated",
          description: `Request status changed to ${status}`,
        });
        
        // Refresh the requests list
        fetchRequests();
      }
    } catch (err) {
      console.error("Exception updating status:", err);
      toast({
        title: "Error",
        description: "Failed to update request status",
        variant: "destructive",
      });
    }
  };

  // Get badge color based on status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
          <Clock className="w-3 h-3 mr-1" /> Pending
        </Badge>;
      case 'processing':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
          <RefreshCw className="w-3 h-3 mr-1 animate-spin" /> Processing
        </Badge>;
      case 'done':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          <Check className="w-3 h-3 mr-1" /> Completed
        </Badge>;
      case 'error':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
          <AlertTriangle className="w-3 h-3 mr-1" /> Error
        </Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Container>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-800">Admin Dashboard</h1>
          <Button onClick={fetchRequests} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" /> Refresh
          </Button>
        </div>
        
        {loading ? (
          <div className="text-center py-10">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto text-blue-600" />
            <p className="mt-2 text-blue-800">Loading requests...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            {requests.length === 0 ? (
              <div className="text-center py-10 text-gray-500">
                <FileText className="w-10 h-10 mx-auto text-gray-400 mb-2" />
                <p>No service requests found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.full_name}</TableCell>
                        <TableCell>{request.service_type}</TableCell>
                        <TableCell>{request.action_type}</TableCell>
                        <TableCell>{formatDate(request.created_at || '')}</TableCell>
                        <TableCell>{getStatusBadge(request.status || 'pending')}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            {request.status !== 'processing' && (
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => updateStatus(request.id!, 'processing')}
                              >
                                <RefreshCw className="w-3 h-3 mr-1" /> Process
                              </Button>
                            )}
                            
                            {request.status !== 'done' && (
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                                onClick={() => updateStatus(request.id!, 'done')}
                              >
                                <Check className="w-3 h-3 mr-1" /> Complete
                              </Button>
                            )}
                            
                            {request.receipt_url && (
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => window.open(request.receipt_url!, '_blank')}
                              >
                                <Download className="w-3 h-3 mr-1" /> Receipt
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Admin;
