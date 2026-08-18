import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@/lib/constants';

let client: SupabaseClient | null = null;

export function getSupabaseBrowserClient() {
  if (!client) {
    client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: false,
        detectSessionInUrl: true,
      },
    });
  }
  return client;
}
