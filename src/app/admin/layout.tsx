import type { PropsWithChildren } from 'react'
import { AdminLayout } from '../../features/Admin/components/AdminLayout'

export const dynamic = 'force-dynamic'
export default function AppLayoutContainer({ children }: PropsWithChildren) {
	return (
		<>
			<AdminLayout>{children}</AdminLayout>
		</>
	)
}
