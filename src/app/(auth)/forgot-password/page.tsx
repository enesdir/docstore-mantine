import type { Metadata } from 'next'
import { ForgotPasswordPage } from '@/features/Auth/'

export const metadata: Metadata = {
	title: 'Sign in to your account ',
}
export default function ForgotPassword() {
	return <ForgotPasswordPage />
}
