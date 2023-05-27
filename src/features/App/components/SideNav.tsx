import { type FC } from 'react'
import { Group, MediaQuery, Navbar, UnstyledButton, createStyles, getStylesRef } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconArrowLeft, IconArrowRight, IconHome, IconSettings } from '@tabler/icons-react'
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
	{ link: getPath('APP'), label: 'Home', icon: IconHome },
	{ link: getPath('APP_SETTINGS'), label: 'Settings', icon: IconSettings },
]

export const SideNav: FC<{ className?: string }> = ({ className }) => {
	const [collapsed, handlers] = useDisclosure(false)
	const { classes, cx } = useStyles({ collapsed })

	return (
		<Navbar p='md' className={cx(classes.navbar, className)}>
			<Navbar.Section grow>
				<Group className={classes.header} position='apart'>
					{/* <Button
						component={Link}
						href={getPath('APP')}
						// onClick={open}
						variant='ghost'
						leftIcon={<IconDeviceAnalytics size='1.25rem' />}
						sx={(theme) => ({
							[theme.fn.smallerThan('xs')]: { display: 'none' },
						})}
					>
						Admin Dashboard
					</Button> */}
				</Group>
				{/* <Button
					// onClick={open}
					leftIcon={<IconPlus size='1.25rem' />}
					sx={(theme) => ({
						[theme.fn.smallerThan('xs')]: { display: 'none' },
					})}
				>
					f
				</Button>
				<SideNavItem data={ITEMS} close={collapsed} /> */}
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
