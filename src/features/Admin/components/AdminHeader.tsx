import type { FC } from 'react'
import { Box, Burger, Code, Group, Header, MediaQuery, useMantineTheme } from '@mantine/core'
import { Logo } from '@/components/Logo'
import { HeaderNotification } from '@/features/App/components/HeaderNotification'
import { SearchForm } from '@/features/App/components/SearchForm'
import { UserMenu } from '@/features/Auth/components/UserMenu'

type AdminHeaderProps = { opened: boolean; setOpened: () => void }
export const AdminHeader: FC<AdminHeaderProps> = ({ opened, setOpened }) => {
	const theme = useMantineTheme()

	return (
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
						onClick={() => setOpened()}
						size='sm'
						color={theme.colors.gray[6]}
						mr='xl'
					/>
				</MediaQuery>
				<Box sx={{ sm: 200, width: 300 }} pr='xl'>
					<MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
						<Group position='apart'>
							<Logo logoText='DocStore' />
							<MediaQuery smallerThan='xs' styles={{ display: 'none' }}>
								<Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
							</MediaQuery>
						</Group>
					</MediaQuery>
				</Box>
				<SearchForm />
				<div>
					<HeaderNotification />
					<MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
						<UserMenu isAdminLayout={true} />
					</MediaQuery>
				</div>
			</Group>
		</Header>
	)
}
