import { useState } from 'react'
import { Navbar, createStyles, getStylesRef, rem } from '@mantine/core'
import { IconLogout, IconSwitchHorizontal } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
	navbar: {
		backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
	},

	version: {
		backgroundColor: theme.fn.lighten(
			theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
			0.1
		),
		color: theme.white,
		fontWeight: 700,
	},

	header: {
		paddingBottom: theme.spacing.md,
		marginBottom: `calc(${theme.spacing.md} * 1.5)`,
		borderBottom: `${rem(1)} solid ${theme.fn.lighten(
			theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
			0.1
		)}`,
	},

	footer: {
		paddingTop: theme.spacing.md,
		marginTop: theme.spacing.md,
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},

	link: {
		...theme.fn.focusStyles(),
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
		fontSize: theme.fontSizes.sm,
		color: theme.white,
		padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
		borderRadius: theme.radius.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor: theme.fn.lighten(
				theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
				0.1
			),
		},
	},

	linkIcon: {
		ref: getStylesRef('icon'),
		color: theme.white,
		opacity: 0.75,
		marginRight: theme.spacing.sm,
	},

	linkActive: {
		'&, &:hover': {
			backgroundColor: theme.fn.lighten(
				theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
				0.15
			),
			[`& .${getStylesRef('icon')}`]: {
				opacity: 0.9,
			},
		},
	},
}))

export function NavbarFooter() {
	const { classes, cx } = useStyles()
	const [active, setActive] = useState('Billing')

	return (
		<Navbar.Section className={classes.footer}>
			<a href='#' className={classes.link} onClick={(event) => event.preventDefault()}>
				<IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
				<span>Change account</span>
			</a>

			<a href='#' className={classes.link} onClick={(event) => event.preventDefault()}>
				<IconLogout className={classes.linkIcon} stroke={1.5} />
				<span>Logout</span>
			</a>
		</Navbar.Section>
	)
}
