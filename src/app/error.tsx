'use client'

import type { Metadata } from 'next/types'

import { Error500 } from '@/features/Errors'

export const metadata: Metadata = {
  title: 'Something Wrong',
}

export default function ErrorPage() {
  return (
    <>
      <Error500 />
    </>
  )
}
