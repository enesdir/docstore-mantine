import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'
import SupabaseListener from '@/providers/SupabaseListener'
import SupabaseProvider from '@/providers/SupabaseProvider'
import EmotionProvider from '@/providers/emotion'
import type { Database } from '@/types/dbTypes'
import { createServerClient } from '@/utils/supabaseServer'

export type TypedSupabaseClient = SupabaseClient<Database>

const title = 'Document Management for Modern Validation Teams'
const description =
	'DocStore is an open-source document management tool for modern validation teams to create, track, and review documents.'

export const metadata: Metadata = {
	title: {
		template: '%s | DocStore',
		default: 'Example Site',
	},
	description,
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://docstore.vercel.app',
		siteName: 'DocStore',
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		creator: '@codenuru',
	},
	icons: {
		icon: {
			url: '/favicon/favicon-32x32.png',
			sizes: '32x32',
		},
		apple: '/favicon/apple-icon.png',
		shortcut: '/favicon/favicon.ico',
		other: [
			{
				rel: 'icon',
				url: '/favicon/favicon-16x16.png',
				sizes: '16x16',
			},
		],
	},
	manifest: '/favicon/site.webmanifest',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'cyan' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],

	metadataBase: new URL('https://docstore.io'),
}
export default async function RootLayout({ children }: { children: ReactNode }) {
	const supabase = createServerClient()
	const {
		data: { session },
	} = await supabase.auth.getSession()
	return (
		<html lang='en'>
			<head />
			<body>
				<EmotionProvider>
					<SupabaseProvider session={session}>
						<SupabaseListener serverAccessToken={session?.access_token} />
						{children}
					</SupabaseProvider>
				</EmotionProvider>
			</body>
		</html>
	)
}
