import type { Metadata } from 'next'
import { SettingsRoot } from '@/features/AppSettings'

export const metadata: Metadata = {
	title: 'Sign in to your account ',
}
export default function SettingsRootPage() {
	return <SettingsRoot />
}
