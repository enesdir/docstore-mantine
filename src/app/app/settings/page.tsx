import type { Metadata } from 'next'

import { SettingsRoot } from '@/features/App/components/SettingsRoot'

export const metadata: Metadata = {
  title: 'Sign in to your account ',
}
export default function SettingsRootPage() {
  return <SettingsRoot />
}
