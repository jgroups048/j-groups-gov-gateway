// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tizwfarzpmhluycdiwll.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpendmYXJ6cG1obHV5Y2Rpd2xsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMjQyNzgsImV4cCI6MjA2MjYwMDI3OH0.P2JO1Q5wXstYxiAX6Hqhd71Zj3Q2svahHx5Lj8B5COI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);