'use client'

import type { PropsWithChildren } from 'react'

import dynamic from 'next/dynamic'

import { ActionIcon, AppShell, Box, MediaQuery } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconMenu2 } from '@tabler/icons-react'

import { LayoutErrorBoundary } from '@/components/'

import { DrawerNav } from './DrawerNav'

const DynamicHeader = dynamic(async () => {
  const { Header } = await import('./Header')
  return Header
})

const DynamicSideNav = dynamic(async () => {
  const { SideNav } = await import('./SideNav')
  return SideNav
})

export const AppLayout = ({ children }: PropsWithChildren) => {
  const [opened, handlers] = useDisclosure(false)

  return (
    <AppShell
      padding="md"
      styles={(theme) => ({
        body: { minHeight: '100vh' },
        main: { padding: 0 },
      })}
      navbar={
        <>
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <DynamicSideNav />
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <DrawerNav opened={opened} handleClose={handlers.close} />
          </MediaQuery>
        </>
      }
    >
      <DynamicHeader
        left={
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <ActionIcon variant="hover" radius="xl" size={40} onClick={handlers.open}>
              <IconMenu2 />
            </ActionIcon>
          </MediaQuery>
        }
      />
      <Box py="xl" px="md">
        <LayoutErrorBoundary>{children}</LayoutErrorBoundary>
      </Box>
    </AppShell>
  )
}
