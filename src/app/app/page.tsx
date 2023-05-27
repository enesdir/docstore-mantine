import type { Metadata } from 'next'
import { AppHome } from '@/features/AppHome'

export const metadata: Metadata = {
	title: 'App',
}
export default function AppHomePage() {
	return <AppHome />
}
