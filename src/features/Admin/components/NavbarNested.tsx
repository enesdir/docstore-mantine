import type { FC } from 'react'
import { Navbar, ScrollArea, createStyles, rem } from '@mantine/core'
import { adminNavLinks } from '@/features/Admin/constants/adminNavLinks'
import { LinksGroup } from './LinksGroup'
import { NavbarFooter } from './NavbarFooter'

const useStyles = createStyles((theme) => ({
	navbar: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
		paddingBottom: 4,
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
}))

type NavbarNestedProps = { hidden: boolean }
export const NavbarNested: FC<NavbarNestedProps> = ({ hidden }) => {
	const { classes } = useStyles()
	const links = adminNavLinks.map((item) => <LinksGroup {...item} key={item.label} />)

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
			<NavbarFooter />
		</Navbar>
	)
}
