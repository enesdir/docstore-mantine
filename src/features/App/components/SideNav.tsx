import { type FC } from 'react'
import Link from 'next/link'
import { Button, MediaQuery, Navbar, UnstyledButton, createStyles, getStylesRef, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
	IconArrowLeft,
	IconArrowRight,
	IconDeviceAnalytics,
	IconHome,
	IconSettings,
} from '@tabler/icons-react'
import { getPath } from '@/utils/getPath'
import { SideNavItem } from './SideNavItem'

const useStyles = createStyles<string, { collapsed?: boolean }>((theme, params) => {
	const icon: string = getStylesRef('icon')

	return {
		navbar: {
			position: 'sticky',
			paddingBottom: 0,
			width: params?.collapsed ? 81 : 264,
			transition: params?.collapsed ? 'width 0.1s linear' : 'none',
		},

		header: {
			top: 0,
			borderBottom: `${rem(1)} solid`,
			marginLeft: `calc(${theme.spacing.md} * -1)`,
			marginRight: `calc(${theme.spacing.md} * -1)`,
		},

		footer: {
			paddingTop: theme.spacing.xs,
			marginTop: theme.spacing.md,
			borderTop: `${rem(1)} solid`,
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
	{ link: getPath('APP'), label: 'Home', icon: IconHome },
	{ link: getPath('APP_SETTINGS'), label: 'Settings', icon: IconSettings },
]

export const SideNav: FC<{ className?: string }> = ({ className }) => {
	const [collapsed, handlers] = useDisclosure(false)
	const { classes, cx } = useStyles({ collapsed })

	return (
		<Navbar className={cx(classes.navbar, className)}>
			<Navbar.Section className={classes.header} h={50} pb='md'>
				<Button
					component={Link}
					href={getPath('APP')}
					// onClick={open}
					variant='ghost'
					leftIcon={<IconDeviceAnalytics size={rem(22)} />}
					// sx={(theme) => ({
					// 	[theme.fn.smallerThan('xs')]: { display: 'none' },
					// })}
					fw={600}
					pl={rem(46)}
					pt={rem(10)}
				>
					{!collapsed && 'Admin Dashboard'}
				</Button>
			</Navbar.Section>
			<Navbar.Section grow px='sm' pt={rem(10)}>
				<SideNavItem data={ITEMS} collapsed={collapsed} />
			</Navbar.Section>
			<MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
				<Navbar.Section className={classes.footer} p='md'>
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
