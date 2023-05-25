'use client'

import type { PropsWithChildren } from 'react'
import { Container, rem } from '@mantine/core'
import { LayoutErrorBoundary } from '@/components/'

export const AuthLayout = ({ children }: PropsWithChildren) => (
	<>
		<Container size='xs' pt={rem(100)}>
			<LayoutErrorBoundary>{children}</LayoutErrorBoundary>
		</Container>
	</>
)
