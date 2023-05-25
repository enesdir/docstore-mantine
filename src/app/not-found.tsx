import type { Metadata } from 'next/types'
import { NotFound } from '@/features/Errors'

export const metadata: Metadata = {
	title: 'Something Wrong',
}

export default function ErrorPage() {
	return <NotFound />
}
