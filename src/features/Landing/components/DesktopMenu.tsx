import { Group, createStyles, rem } from '@mantine/core'
import { type NavItemActions } from '@/features/Landing/types/NavItemActions'
import { type NavItemsType } from '@/features/Landing/types/NavItemType'
import { HoverNavItem } from './HoverNavItem'
import { NavItem } from './NavItem'
import SessionButtons from './SessionButtons'

const useStyles = createStyles((theme) => ({
	hiddenMobile: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		textDecoration: 'none',
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontWeight: 500,
		fontSize: theme.fontSizes.sm,
		[theme.fn.smallerThan('sm')]: {
			height: rem(42),
			display: 'flex',
			alignItems: 'center',
			width: '100%',
		},

		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		},
	},

	linkActive: {
		'&, &:hover': {
			backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
			color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
		},
	},
}))

type DesktopMenusProps = NavItemActions & {
	data: NavItemsType[]
}
export function DesktopMenu({ data, close }: DesktopMenusProps) {
	const { classes, cx, theme } = useStyles()

	const renderLinks = data.map((item) => {
		if (item.detail) {
			return <HoverNavItem data={item} key={item.label} close={close} />
		}
		return <NavItem key={item.label} href={item.link} label={item.label} close={close} />
	})
	return (
		<>
			<Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
				{renderLinks}
			</Group>
			<Group className={classes.hiddenMobile}>
				<SessionButtons />
			</Group>
		</>
	)
}
