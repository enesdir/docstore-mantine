import type { PropsWithChildren } from 'react'

import { LandingLayout } from '@/features/Landing'

export default function AppLayoutContainer({ children }: PropsWithChildren) {
  return (
    <>
      <LandingLayout>{children}</LandingLayout>
    </>
  )
}
