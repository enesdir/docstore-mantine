import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { type Database } from '@/types/dbTypes'

export const createServerClient = () =>
	createServerComponentClient<Database>({
		cookies,
	})
