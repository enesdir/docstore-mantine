import { Box, Burger, Container, Group, Header, createStyles } from '@mantine/core'
import { useClickOutside, useDisclosure } from '@mantine/hooks'
import { Logo } from '@/components/Logo/Logo'
import { headerLinks } from '@/features/Landing/constants/headerLinks'
import { HEADER_HEIGHT } from '@/features/Landing/styles/UIConstants'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'

const useStyles = createStyles((theme) => ({
	root: {
		position: 'relative',
		// zIndex: 0,
	},

	hiddenDesktop: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	inner: {
		height: HEADER_HEIGHT,
	},
}))

export function LandingHeader() {
	const [opened, { toggle, close }] = useDisclosure(false)
	const ref = useClickOutside(() => close())
	const { classes } = useStyles()

	return (
		<Box pb={120} ref={ref}>
			<Header height={HEADER_HEIGHT} px='md'>
				<Container>
					<div className={classes.inner}>
						<Group position='apart' spacing={0} h='100%'>
							<Logo logoText='DocStore' />

							<DesktopMenu data={headerLinks} close={close} />
							<Burger opened={opened} onClick={toggle} className={classes.hiddenDesktop} size='sm' />
						</Group>
					</div>
				</Container>
				<MobileMenu data={headerLinks} close={close} opened={opened} />
			</Header>
		</Box>
	)
}
