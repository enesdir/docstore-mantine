import type { PropsWithChildren } from 'react'
import { AppLayout } from '@/features/App'

export const dynamic = 'force-dynamic'
export default function AppLayoutContainer({ children }: PropsWithChildren) {
	return (
		<>
			<AppLayout>{children}</AppLayout>
		</>
	)
}
