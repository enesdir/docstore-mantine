import type { ReactElement, ReactNode } from 'react'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import type { ColorScheme } from '@mantine/core'

type PageAttributes = { getLayout?: (page: ReactElement) => ReactNode }
type NextAppProps = {
  // session: Session;
  initialColorScheme: ColorScheme
}

export type CustomLayout = NonNullable<PageAttributes['getLayout']>
export type CustomNextPage<P = {}, IP = P> = NextPage<P, IP> & PageAttributes

export type CustomAppProps = AppProps<NextAppProps> & {
  Component: CustomNextPage
}
