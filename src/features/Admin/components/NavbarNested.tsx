import { Navbar, ScrollArea, createStyles, rem } from '@mantine/core'
import {
	IconAdjustments,
	IconCalendarStats,
	IconFileAnalytics,
	IconGauge,
	IconLock,
	IconNotes,
	IconPresentationAnalytics,
} from '@tabler/icons-react'
import { LinksGroup } from './LinksGroup'

const mockdata = [
	{ label: 'Dashboard', icon: IconGauge },
	{
		label: 'Market news',
		icon: IconNotes,
		initiallyOpened: true,
		links: [
			{ label: 'Overview', link: '/' },
			{ label: 'Forecasts', link: '/' },
			{ label: 'Outlook', link: '/' },
			{ label: 'Real time', link: '/' },
		],
	},
	{
		label: 'Releases',
		icon: IconCalendarStats,
		links: [
			{ label: 'Upcoming releases', link: '/' },
			{ label: 'Previous releases', link: '/' },
			{ label: 'Releases schedule', link: '/' },
		],
	},
	{ label: 'Analytics', icon: IconPresentationAnalytics },
	{ label: 'Contracts', icon: IconFileAnalytics },
	{ label: 'Settings', icon: IconAdjustments },
	{
		label: 'Security',
		icon: IconLock,
		links: [
			{ label: 'Enable 2FA', link: '/' },
			{ label: 'Change password', link: '/' },
			{ label: 'Recovery codes', link: '/' },
		],
	},
]

const useStyles = createStyles((theme) => ({
	navbar: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
		paddingBottom: 0,
	},

	header: {
		padding: theme.spacing.md,
		paddingTop: 0,
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		borderBottom: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},

	links: {
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
	},

	linksInner: {
		paddingBottom: theme.spacing.xl,
	},

	footer: {
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},
}))

export function NavbarNested({ hidden }) {
	const { classes } = useStyles()
	const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />)

	return (
		<Navbar
			px='md'
			hiddenBreakpoint='sm'
			hidden={hidden}
			width={{ sm: 200, lg: 300 }}
			className={classes.navbar}
		>
			<Navbar.Section grow className={classes.links} component={ScrollArea}>
				<div className={classes.linksInner}>{links}</div>
			</Navbar.Section>

			<Navbar.Section className={classes.footer} py='md'>
				user
			</Navbar.Section>
		</Navbar>
	)
}
