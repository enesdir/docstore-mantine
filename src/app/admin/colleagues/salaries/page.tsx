import type { Metadata } from 'next'
import { AdminSalaries } from '@/features/AdminSalaries'

export const metadata: Metadata = {
	title: 'Admin ',
}
export default function AdminHomePage() {
	return <AdminSalaries />
}
