import { type FC } from 'react'
import { Navbar, createStyles, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { SideNavFooter } from './SideNavFooter'
import { SideNavHeader } from './SideNavHeader'
import { SideNavItems } from './SideNavItems'

const useStyles = createStyles<string, { collapsed?: boolean }>((theme, params) => {
	return {
		navbar: {
			position: 'sticky',
			paddingBottom: 0,
			width: params?.collapsed ? 81 : 264,
			transition: params?.collapsed ? 'width 0.1s linear' : 'none',
		},
	}
})

export const SideNav: FC = ({ className }) => {
	const [collapsed, handlers] = useDisclosure(false)
	const { classes, cx } = useStyles({ collapsed })

	return (
		<Navbar className={cx(classes.navbar, className)}>
			<SideNavHeader collapsed={collapsed} title='App Dashboard' />
			<Navbar.Section grow px='sm' pt={rem(10)}>
				<SideNavItems collapsed={collapsed} isMobile={false} />
			</Navbar.Section>
			<SideNavFooter toggle={handlers.toggle} collapsed={collapsed} />
		</Navbar>
	)
}
