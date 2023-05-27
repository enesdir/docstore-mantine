import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req: NextRequest) {
	const res = NextResponse.next()

	const supabase = createMiddlewareClient({ req, res })

	const {
		data: { session },
	} = await supabase.auth.getSession()

	// Check auth condition
	if (session) {
		// Authentication successful, forward request to protected route.
		return res
	}
	// Auth condition not met, redirect to home page.
	const redirectUrl = req.nextUrl.clone()
	redirectUrl.pathname = '/login'
	redirectUrl.searchParams.set(`redirectedFrom`, req.url)
	return NextResponse.redirect(redirectUrl)
}

export const config = {
	matcher: ['/app/:path*', '/admin/:path*'],
}
