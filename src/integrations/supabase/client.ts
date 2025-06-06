
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fwwpidktaanowpaihgzy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3d3BpZGt0YWFub3dwYWloZ3p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxMDIyOTcsImV4cCI6MjA2MDY3ODI5N30.qvUw8w0DAQ8nnqyevugAp0V22fAUAVx9-TSD_gIqRQ0";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: localStorage
  }
});
