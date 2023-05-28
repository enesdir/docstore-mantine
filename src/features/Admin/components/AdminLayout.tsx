'use client'

import { useState, type PropsWithChildren } from 'react'
import { AppShell, useMantineTheme } from '@mantine/core'
import { AdminHeader } from './AdminHeader'
import { NavbarNested } from './NavbarNested'

export function AdminLayout({ children }: PropsWithChildren) {
	const theme = useMantineTheme()
	const [opened, setOpened] = useState(false)
	return (
		<AppShell
			styles={{
				main: {
					background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint='sm'
			navbar={<NavbarNested hidden={!opened} />}
			// navbar={
			// 	<Navbar p='md' hiddenBreakpoint='sm' hidden={!opened} width={{ sm: 200, lg: 300 }}>
			// 		<Text>Application navbar</Text>
			// 	</Navbar>

			// }
			// navbar={
			// 	<>
			// 		<MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
			// 			<DynamicSideNav />
			// 		</MediaQuery>
			// 		<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
			// 			<DrawerNav opened={opened} handleClose={() => setOpened} />
			// 		</MediaQuery>
			// 	</>
			// }
			header={<AdminHeader opened={opened} setOpened={setOpened} />}
		>
			{children}
		</AppShell>
	)
}
