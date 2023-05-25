import { type FC } from 'react'
import Link from 'next/link'
import { Group, MediaQuery, Navbar, Tooltip, UnstyledButton, createStyles, getStylesRef } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
	IconArrowLeft,
	IconArrowRight,
	IconDeviceAnalytics,
	IconHome,
	IconSettings,
} from '@tabler/icons-react'
import { ActiveLink } from '@/components/'
import { getPath } from '@/utils/getPath'

const useStyles = createStyles<string, { collapsed?: boolean }>((theme, params) => {
	const icon: string = getStylesRef('icon')

	return {
		navbar: {
			position: 'sticky',
			top: 0,
			width: params?.collapsed ? 81 : 264,
			transition: params?.collapsed ? 'width 0.1s linear' : 'none',
		},

		header: {
			paddingBottom: theme.spacing.xs,
			marginBottom: theme.spacing.md,
			borderBottom: `1px solid`,
		},

		footer: {
			paddingTop: theme.spacing.xs,
			marginTop: theme.spacing.md,
			borderTop: `1px solid`,
		},

		logo: {
			...theme.fn.focusStyles(),
			width: '100%',
			display: 'flex',
			alignItems: 'center',
			columnGap: theme.spacing.sm,
			textDecoration: 'none',
			fontSize: theme.fontSizes.sm,
			padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
			borderRadius: theme.radius.sm,
			fontWeight: 700,
		},

		link: {
			...theme.fn.focusStyles(),
			width: '100%',
			display: 'flex',
			alignItems: 'center',
			columnGap: theme.spacing.sm,
			textDecoration: 'none',
			fontSize: theme.fontSizes.sm,
			padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
			borderRadius: theme.radius.sm,
			fontWeight: 500,
		},

		linkIcon: {
			ref: icon,
		},

		linkLabel: params?.collapsed ? { display: 'none' } : {},
	}
})

const ITEMS = [
	{ href: getPath('APP'), label: 'Home', Icon: IconHome },
	{ href: getPath('APP_SETTINGS'), label: 'Settings', Icon: IconSettings },
]

export const SideNav: FC<{ className?: string }> = ({ className }) => {
	const [collapsed, handlers] = useDisclosure(false)
	const { classes, cx } = useStyles({ collapsed })

	return (
		<Navbar p='md' className={cx(classes.navbar, className)}>
			<Navbar.Section grow>
				<Group className={classes.header} position='apart'>
					<Link href={getPath('APP')} legacyBehavior>
						<a className={classes.logo}>
							<IconDeviceAnalytics />
							<span className={classes.linkLabel}>Admin Dashboard</span>
						</a>
					</Link>
				</Group>
				{ITEMS.map(({ label, href, Icon }) => (
					<Tooltip
						key={label}
						label={label}
						disabled={!collapsed}
						position='right'
						withArrow
						sx={{ width: '100%' }}
					>
						<ActiveLink href={href} passHref>
							{(isActive) => (
								<a
									className={cx(classes.link, {
										[classes.linkActive]: isActive,
									})}
								>
									<Icon className={classes.linkIcon} />
									<span className={classes.linkLabel}>{label}</span>
								</a>
							)}
						</ActiveLink>
					</Tooltip>
				))}
			</Navbar.Section>

			<MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
				<Navbar.Section className={classes.footer}>
					<UnstyledButton className={classes.link} onClick={handlers.toggle}>
						{collapsed ? (
							<IconArrowRight className={classes.linkIcon} />
						) : (
							<>
								<IconArrowLeft className={classes.linkIcon} />
								<span>Collapse</span>
							</>
						)}
					</UnstyledButton>
				</Navbar.Section>
			</MediaQuery>
		</Navbar>
	)
}
