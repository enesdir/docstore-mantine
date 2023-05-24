import type { Metadata } from 'next'

import { LoginPage } from '@/features/Auth/'

export const metadata: Metadata = {
  title: 'Sign in to your account ',
}

export default function Login() {
  return <LoginPage />
}
