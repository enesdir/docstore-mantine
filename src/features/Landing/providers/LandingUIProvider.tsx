'use client'

import { type ReactNode } from 'react'
import { useActiveLinkState } from '@/hooks/useActiveLinkState'
import { createCtx } from '@/utils/createCtx'

// the types for use with the consumer of the context
export type LandingUIContextType = {
	activeLink: string
	setActiveLink: (value: string) => void
}

const [useCtx, Provider] = createCtx<LandingUIContextType>()

type LandingUIProviderProps = {
	children: ReactNode
}

function LandingUIProvider({ children }: LandingUIProviderProps) {
	const { activeLink, setActiveLink } = useActiveLinkState()

	const contextValue = { activeLink, setActiveLink }

	return <Provider value={contextValue}>{children}</Provider>
}

export { LandingUIProvider, useCtx as useLandingUI }
