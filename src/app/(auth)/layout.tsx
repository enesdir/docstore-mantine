import type { PropsWithChildren } from 'react'
import { AuthLayout } from '@/features/Auth'

export const dynamic = 'force-dynamic'
export default async function AuthLayoutContainer({ children }: PropsWithChildren) {
	return <AuthLayout>{children}</AuthLayout>
}
