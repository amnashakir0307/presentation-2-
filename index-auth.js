import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'

const supabaseUrl = 'https://gshfphlirunwzghugpyh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzaGZwaGxpcnVud3pnaHVncHloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0ODQwMTMsImV4cCI6MjA4MTA2MDAxM30.iR3ubr23CMPsf9TJI-bsXjbnplGOV7yt7nGF8wy59EQ"
const supabase = createClient(supabaseUrl, supabaseKey)
