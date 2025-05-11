
import { ServiceRequest } from "@/services/requestService";

/**
 * Extract structured data from a user prompt about government service requests
 * @param prompt The user's natural language prompt
 * @returns Structured data extracted from the prompt
 */
export async function extractDataFromPrompt(prompt: string): Promise<ServiceRequest> {
  try {
    // Simple rule-based extraction for demo purposes
    // In production, you would use an actual NLP service or LLM API
    const data: ServiceRequest = {
      full_name: '',
      service_type: '',
      action_type: 'apply',
    };
    
    // Extract full name - look for common patterns
    const nameMatch = prompt.match(/my name is ([A-Za-z\s]+)[,\.]/i) || 
                     prompt.match(/([A-Za-z\s]+) wants to apply/i);
    if (nameMatch && nameMatch[1]) {
      data.full_name = nameMatch[1].trim();
    }
    
    // Extract service type
    if (prompt.toLowerCase().includes('aadhaar')) {
      data.service_type = 'Aadhaar';
    } else if (prompt.toLowerCase().includes('pan')) {
      data.service_type = 'PAN';
    } else if (prompt.toLowerCase().includes('voter')) {
      data.service_type = 'Voter ID';
    } else if (prompt.toLowerCase().includes('driving') || prompt.toLowerCase().includes('license')) {
      data.service_type = 'Driving License';
    } else if (prompt.toLowerCase().includes('passport')) {
      data.service_type = 'Passport';
    } else {
      data.service_type = 'Other';
    }
    
    // Extract action type
    if (prompt.toLowerCase().includes('update')) {
      data.action_type = 'update';
    } else if (prompt.toLowerCase().includes('correct')) {
      data.action_type = 'correct';
    } else if (prompt.toLowerCase().includes('renew')) {
      data.action_type = 'renew';
    }
    
    // Extract DOB if present (DD-MM-YYYY or similar formats)
    const dobMatch = prompt.match(/born on (\d{1,2})[-\/\s](\d{1,2}|[A-Za-z]+)[-\/\s](\d{4})/i) ||
                    prompt.match(/dob[\s:]*(\d{1,2})[-\/\s](\d{1,2}|[A-Za-z]+)[-\/\s](\d{4})/i);
    
    if (dobMatch) {
      let day = dobMatch[1];
      let month = dobMatch[2];
      const year = dobMatch[3];
      
      // Convert month name to number if needed
      if (isNaN(parseInt(month))) {
        const months = {
          'january': '01', 'february': '02', 'march': '03', 'april': '04',
          'may': '05', 'june': '06', 'july': '07', 'august': '08',
          'september': '09', 'october': '10', 'november': '11', 'december': '12',
          'jan': '01', 'feb': '02', 'mar': '03', 'apr': '04',
          'jun': '06', 'jul': '07', 'aug': '08', 'sep': '09', 'oct': '10',
          'nov': '11', 'dec': '12'
        };
        month = months[month.toLowerCase()] || '01';
      }
      
      // Pad day and month with leading zeros if needed
      day = day.padStart(2, '0');
      month = month.padStart(2, '0');
      
      data.dob = `${year}-${month}-${day}`; // YYYY-MM-DD format for database
    }
    
    // Extract Aadhaar number if present (12 digits)
    const aadhaarMatch = prompt.match(/aadhaar[\s:]*(\d{4}\s?\d{4}\s?\d{4})/i) ||
                         prompt.match(/(\d{4}\s?\d{4}\s?\d{4})/);
    if (aadhaarMatch) {
      data.aadhaar = aadhaarMatch[1].replace(/\s/g, '');
    }
    
    // Extract mobile number (10 digits, possibly with country code)
    const mobileMatch = prompt.match(/mobile[\s:]*(\+?\d{1,3}?[\s-]?\d{10})/i) ||
                       prompt.match(/phone[\s:]*(\+?\d{1,3}?[\s-]?\d{10})/i) ||
                       prompt.match(/(\+?\d{1,3}?[\s-]?\d{10})/);
    if (mobileMatch) {
      data.mobile = mobileMatch[1].replace(/[\s+-]/g, '').slice(-10); // Keep last 10 digits
    }
    
    // Extract father's name
    const fatherMatch = prompt.match(/father(?:'s)? name[\s:]*([A-Za-z\s]+)[,\.]/i);
    if (fatherMatch) {
      data.father_name = fatherMatch[1].trim();
    }
    
    // Extract address (simple pattern, could be enhanced)
    const addressMatch = prompt.match(/address[\s:]*([^\.]+)[\.]/i) || 
                        prompt.match(/live(?:s)? at[\s:]*([^\.]+)[\.]/i);
    if (addressMatch) {
      data.address = addressMatch[1].trim();
    }
    
    return data;
  } catch (error) {
    console.error("Error extracting data from prompt:", error);
    // Return a valid ServiceRequest object with minimum required fields
    return {
      full_name: '',
      service_type: 'Unknown',
      action_type: 'apply'
    };
  }
}
