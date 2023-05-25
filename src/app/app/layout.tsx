import type { PropsWithChildren } from 'react'
import { AppLayout } from '@/features/App'

export default function AppLayoutContainer({ children }: PropsWithChildren) {
	return (
		<>
			<AppLayout>{children}</AppLayout>
		</>
	)
}
