'use client'

import { useMemo, type ReactNode } from 'react'
import { useLandingUIState } from '@/features/Landing/hooks/useLandingUIState'
import { createCtx } from '@/utils/createCtx'

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
		[activeLink, setActiveLink]
	)

	return <Provider value={contextValue}>{children}</Provider>
}

export { LandingUIProvider, useCtx as useLandingUI }
