import { useState, type FC } from 'react'
import { useRouter } from 'next/navigation'
import { Anchor, Avatar, Group, Menu, Text, UnstyledButton, createStyles, rem } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { IconChevronDown, IconLogout, IconSettings } from '@tabler/icons-react'
import { useSupabase } from '@/providers/SupabaseProvider'
import { getPath } from '@/utils/getPath'

const useStyles = createStyles((theme) => ({
	user: {
		color: theme.white,
		padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
		borderRadius: theme.radius.sm,
		transition: 'background-color 100ms ease',

		'&:hover': {
			backgroundColor: theme.fn.lighten(
				theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
				0.1
			),
		},

		[theme.fn.smallerThan('md')]: {
			display: 'none',
		},
	},

	userActive: {
		backgroundColor: theme.fn.lighten(
			theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
			0.1
		),
	},
}))

export const UserMenu: FC = () => {
	const { classes, theme, cx } = useStyles()
	const { supabase, session } = useSupabase()
	const [userMenuOpened, setUserMenuOpened] = useState(false)
	const router = useRouter()

	const fullName = `${session?.user.user_metadata.first_name} ${session?.user.user_metadata.last_name}`
	const handleLogout = async () => {
		await supabase.auth
			.signOut()
			.then(() => {
				showNotification({
					message: 'You have successfully logged out. Thank you for using our service!',
				})
				router.push(getPath('ROOT'))
			})
			.catch((error) => {
				showNotification({
					message: 'Logout failed. Please try again later.',
				})
				console.log(error)
			})
	}

	return (
		<Menu
			width={260}
			position='bottom-end'
			transitionProps={{ transition: 'pop-top-right' }}
			onClose={() => setUserMenuOpened(false)}
			onOpen={() => setUserMenuOpened(true)}
			withinPortal
		>
			<Menu.Target>
				<UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
					<Group spacing={7}>
						<Avatar
							src={session?.user.user_metadata.image ?? session?.user.user_metadata.image}
							alt={fullName}
							radius='xl'
							size={32}
						/>
						<Text weight={500} size='sm' sx={{ lineHeight: 1, color: theme.white }} mr={3} tt='capitalize'>
							{fullName}
						</Text>
						<IconChevronDown size={rem(12)} stroke={1.5} />
					</Group>
				</UnstyledButton>
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Label>Application</Menu.Label>
				<Menu.Item icon={<IconSettings size={16} />} component={Anchor} href='#'>
					Documents
				</Menu.Item>
				<Menu.Divider />
				<Menu.Item icon={<IconLogout size={16} />} onClick={handleLogout}>
					Log Out
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	)
}
