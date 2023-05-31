import { Box, Burger, Code, Group, Header, MediaQuery, useMantineTheme } from '@mantine/core'
import { HeaderNotification } from '@/features/App/components/HeaderNotification'
import { SearchForm } from '@/features/App/components/SearchForm'
import { UserMenu } from '@/features/Auth/components/UserMenu'
import { Logo } from '../../../components/Logo'

export const AdminHeader = ({ opened, setOpened }) => {
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
						<UserMenu isAdminLayout={true} />
					</MediaQuery>
				</div>
			</Group>
		</Header>
	)
}
