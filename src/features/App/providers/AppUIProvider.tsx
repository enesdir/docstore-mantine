'use client'

import { type ReactNode } from 'react'
import { useActiveLinkState } from '@/hooks/useActiveLinkState'
import { createCtx } from '@/utils/createCtx'

// The types for use with the consumer of the context
type AppUIContextType = {
	activeLink: string
	setActiveLink: (value: string) => void
}

const [useCtx, Provider] = createCtx<AppUIContextType>()

type AppUIProviderProps = {
	children: ReactNode
}

function AppUIProvider({ children }: AppUIProviderProps) {
	const { activeLink, setActiveLink } = useActiveLinkState()

	const contextValue = { activeLink, setActiveLink }

	return <Provider value={contextValue}>{children}</Provider>
}

export { AppUIProvider, useCtx as useAppUI }
