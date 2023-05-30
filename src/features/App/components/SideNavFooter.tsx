import { type FC } from 'react'
import { MediaQuery, Navbar, UnstyledButton, createStyles, rem } from '@mantine/core'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'

const useStyles = createStyles((theme) => {
	return {
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
	}
})
type SideNavFooterProps = { toggle: () => void; collapsed: boolean }
export const SideNavFooter: FC<SideNavFooterProps> = ({ toggle, collapsed }) => {
	const { classes } = useStyles()

	return (
		<MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
			<Navbar.Section className={classes.footer} p='md'>
				<UnstyledButton className={classes.link} onClick={toggle}>
					{collapsed ? (
						<IconArrowRight />
					) : (
						<>
							<IconArrowLeft />
							<span>Collapse</span>
						</>
					)}
				</UnstyledButton>
			</Navbar.Section>
		</MediaQuery>
	)
}
