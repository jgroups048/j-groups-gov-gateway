
import { supabase } from "@/integrations/supabase/client";

export interface ServiceRequest {
  id?: string;
  full_name: string;
  dob?: string | null;
  aadhaar?: string | null;
  mobile?: string | null;
  father_name?: string | null;
  address?: string | null;
  service_type: string;
  action_type: string;
  status?: string;
  receipt_url?: string | null;
  created_at?: string;
  updated_at?: string;
}

/**
 * Save a service request to the database
 */
export async function saveServiceRequest(request: ServiceRequest): Promise<{ data: any; error: any }> {
  // Type assertion to work around TypeScript issues
  const { data, error } = await supabase
    .from('user_requests')
    .insert(request as any)
    .select()
    .single();
  
  return { data, error };
}

/**
 * Get a service request by ID
 */
export async function getServiceRequest(id: string): Promise<{ data: ServiceRequest | null; error: any }> {
  // Type assertion to work around TypeScript issues
  const { data, error } = await supabase
    .from('user_requests')
    .select()
    .eq('id', id)
    .single();
  
  return { data: data as ServiceRequest | null, error };
}

/**
 * Poll for updates to a service request
 */
export async function checkServiceRequestStatus(id: string): Promise<{ status: string; receipt_url: string | null }> {
  // Type assertion to work around TypeScript issues
  const { data, error } = await supabase
    .from('user_requests')
    .select('status, receipt_url')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error("Error checking service request status:", error);
    return { status: 'error', receipt_url: null };
  }
  
  return { 
    status: data?.status || 'pending', 
    receipt_url: data?.receipt_url || null 
  };
}

/**
 * Trigger webhook to process the request
 * In a real implementation, this would call your Playwright automation server
 */
export async function triggerRequestProcessing(requestId: string): Promise<boolean> {
  try {
    // Mock implementation - in a real system this would call your webhook endpoint
    console.log(`Triggering processing for request ${requestId}`);
    
    // Simulate a successful webhook call
    return true;
  } catch (error) {
    console.error("Error triggering request processing:", error);
    return false;
  }
}
