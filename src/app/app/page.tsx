import type { Metadata } from 'next'
import { AppHome } from '@/features/AppHome'

export const metadata: Metadata = {
	title: 'Sign in to your account ',
}
export default function AppHomePage() {
	return <AppHome />
}
