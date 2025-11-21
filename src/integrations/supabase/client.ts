
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_KEY;

// Create a safe client instance that won't crash the app if keys are missing
// We'll handle the missing keys check when trying to use the client
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : {
        storage: {
            from: () => ({
                upload: async () => ({ error: new Error("Supabase credentials missing. Please check your .env file.") })
            })
        },
        auth: {
            getUser: async () => ({ data: { user: null }, error: new Error("Supabase credentials missing. Please check your .env file.") })
        }
    } as any;

