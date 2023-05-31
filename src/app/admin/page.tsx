import type { Metadata } from 'next'
import { AdminHome } from '@/features/AdminHome'

export const metadata: Metadata = {
	title: 'Admin ',
}
export default function AdminHomePage() {
	return <AdminHome />
}
