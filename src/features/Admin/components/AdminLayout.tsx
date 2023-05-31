'use client'

import { type PropsWithChildren } from 'react'
import { AppShell, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { AdminHeader } from './AdminHeader'
import { NavbarNested } from './NavbarNested'

export function AdminLayout({ children }: PropsWithChildren) {
	const theme = useMantineTheme()
	const [opened, handlers] = useDisclosure(false)

	return (
		<AppShell
			styles={{
				main: {
					background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint='sm'
			navbar={<NavbarNested hidden={!opened} />}
			header={<AdminHeader opened={opened} setOpened={handlers.toggle} />}
		>
			{children}
		</AppShell>
	)
}
