import type { Metadata } from 'next'
import { AppHome } from '@/features/AppHome'

export const metadata: Metadata = {
	title: 'Admin ',
}
export default function AdminHomePage() {
	return <AppHome />
}
