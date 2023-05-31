import { Fragment, useState, type FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Avatar, Group, Menu, Text, UnstyledButton, createStyles, rem } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { IconChevronDown, IconLogout } from '@tabler/icons-react'
import { useSupabase } from '@/providers/SupabaseProvider'
import { getPath } from '@/utils/getPath'
import { userMenuLinks } from '../constants/userMenuLinks'

const useStyles = createStyles<string, { isAdminLayout?: boolean }>((theme, params) => ({
	user: {
		color: theme.white,
		padding: params.isAdminLayout ? `${theme.spacing.xs} ${theme.spacing.sm}` : rem(-2),
		borderRadius: theme.radius.sm,
		transition: 'background-color 100ms ease',

		'&:hover': {
			backgroundColor: theme.fn.darken(
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
type UserMenuProps = {
	isAdminLayout?: boolean
}
export const UserMenu: FC<UserMenuProps> = ({ isAdminLayout }) => {
	const { classes, theme, cx } = useStyles({ isAdminLayout })
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
	const links = userMenuLinks?.map((group, groupIndex) => {
		const items = group.links.map((item, index) => (
			<Menu.Item icon={<item.icon size={16} />} key={index} disabled={item.isDisabled}>
				<Text component={Link} href={item.link}>
					{item.title}
				</Text>
			</Menu.Item>
		))
		return (
			<Fragment key={groupIndex}>
				<Menu.Label>{group.title}</Menu.Label>
				{items}
			</Fragment>
		)
	})
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
				{/* @ts-expect-error userActive defined */}
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
				{links}
				<Menu.Divider />
				<Menu.Item icon={<IconLogout size={16} />} onClick={handleLogout}>
					Log Out
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	)
}
