'use client'

import { type ReactNode, useMemo } from 'react'

import { useLandingUIState } from '@/features/Landing/hooks/useLandingUIState'
import { createCtx } from '@/utils/createCtx'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const [useCtx, Provider] = createCtx<any>()

type LandingUIProviderProps = {
  children: ReactNode
}

function LandingUIProvider({ children }: LandingUIProviderProps) {
  const { activeLink, setActiveLink } = useLandingUIState()

  const contextValue = useMemo(
    () => ({
      activeLink,
      setActiveLink,
    }),
    [activeLink, setActiveLink],
  )

  return <Provider value={contextValue}>{children}</Provider>
}

export { LandingUIProvider, useCtx as useLandingUI }
