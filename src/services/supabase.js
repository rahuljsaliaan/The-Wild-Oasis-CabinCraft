import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rcizndcjqludlczfwbrk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjaXpuZGNqcWx1ZGxjemZ3YnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2NTkwMzQsImV4cCI6MjAxMjIzNTAzNH0.mmHSJ4J8QcbCAr4eeOveL1atwrd2EpAXSQrj9Tzx1jw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
