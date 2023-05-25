import type { FC, ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '@/components/ErrorFallback/ErrorFalback'

export const LayoutErrorBoundary: FC<{ children: ReactNode }> = ({ children }) => (
	<ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
)
