import { cookies, headers } from 'next/headers'

import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'

import { type Database } from '@/types/dbTypes'

export const createServerClient = () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
