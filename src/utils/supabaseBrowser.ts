import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'

import { type Database } from '@/types/dbTypes'

export const createBrowserClient = () => createBrowserSupabaseClient<Database>()
