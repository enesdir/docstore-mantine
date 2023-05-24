import type { Metadata } from 'next'

import { RegisterPage } from '@/features/Auth/'

export const metadata: Metadata = {
  title: 'Create an account',
}
export default function Register() {
  return <RegisterPage />
}
