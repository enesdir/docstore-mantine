'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { AppShell, Box, Burger, Code, Group, Header, MediaQuery, Text, useMantineTheme } from '@mantine/core'
import { HeaderNotification } from '@/features/App/components/HeaderNotification'
import { SearchForm } from '@/features/App/components/SearchForm'
import { UserMenu } from '@/features/Auth/components/UserMenu'
import { Logo } from '../../../components/Logo'
import { NavbarNested } from './NavbarNested'

const DynamicSideNav = dynamic(async () => {
	const { SideNav } = await import('../../App/components/SideNav')
	return SideNav
})
export function AdminLayout({ children }) {
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
			// asideOffsetBreakpoint='sm'
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
			header={
				<Header
					height={{ base: 50, md: 70 }}
					p='md'
					sx={{
						backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
						paddingBottom: 0,
					}}
				>
					<Group
						spacing='lg'
						noWrap
						position='apart'
						style={{ display: 'flex', alignItems: 'center', height: '100%' }}
					>
						<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size='sm'
								color={theme.colors.gray[6]}
								mr='xl'
							/>
						</MediaQuery>
						<Box sx={{ sm: 200, width: 300 }} pr='md'>
							<MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
								<Group position='apart'>
									<Logo logoText='DocStore' />
									<Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
								</Group>
							</MediaQuery>
						</Box>
						<SearchForm />
						<div>
							<HeaderNotification />
							<MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
								<UserMenu />
							</MediaQuery>
						</div>
					</Group>
				</Header>
			}
		>
			{children}
			<Text>Resize app to see responsive navbar in action</Text>
		</AppShell>
	)
}
