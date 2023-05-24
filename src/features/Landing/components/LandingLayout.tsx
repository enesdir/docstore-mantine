'use client'

import type { PropsWithChildren } from 'react'

import { LayoutErrorBoundary } from '@/components/'
import { LandingUIProvider } from '@/features/Landing/providers/LandingUIProvider'

import { LandingFooter } from './LandingFooter'
import { LandingHeader } from './LandingHeader'

export const LandingLayout = ({ children }: PropsWithChildren) => (
  <LandingUIProvider>
    <LandingHeader />
    <LayoutErrorBoundary>{children}</LayoutErrorBoundary>
    <LandingFooter />
  </LandingUIProvider>
)
