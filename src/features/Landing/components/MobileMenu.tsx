import { Fragment } from 'react'
import {
	Box,
	Center,
	Collapse,
	Divider,
	Group,
	Paper,
	Transition,
	UnstyledButton,
	createStyles,
	rem,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import { type NavItemActions } from '@/features/Landing/types/NavItemActions'
import { type NavItemsType } from '@/features/Landing/types/NavItemType'
import { HoverNavItemLink } from './HoverNavItemLink'
import { NavItem } from './NavItem'
import SessionButtons from './SessionButtons'

const HEADER_HEIGHT = rem(60)
const useStyles = createStyles((theme) => ({
	dropdown: {
		position: 'absolute',
		top: HEADER_HEIGHT,
		left: 0,
		right: 0,
		zIndex: 1000000,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderTopWidth: 0,
		overflow: 'hidden',

		[theme.fn.largerThan('sm')]: {
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

type MobileMenuProps = NavItemActions & {
	data: NavItemsType[]
	opened: boolean
}
export function MobileMenu({ data, close, opened }: MobileMenuProps) {
	const { classes, theme } = useStyles()

	const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
	const renderLinks = data.map((item) => {
		if (item.detail) {
			return (
				<Fragment key={item.link}>
					<UnstyledButton className={classes.link} onClick={toggleLinks}>
						<Center inline>
							<Box component='span' mr={5}>
								{item.label}
							</Box>
							<IconChevronDown size={16} color={theme.fn.primaryColor()} />
						</Center>
					</UnstyledButton>
					<Collapse in={linksOpened}>
						<HoverNavItemLink data={item.detail.links} close={close} />
					</Collapse>
				</Fragment>
			)
		}
		return <NavItem key={item.label} href={item.link} label={item.label} close={close} />
	})
	return (
		<>
			<Transition transition='pop-top-right' duration={200} mounted={opened}>
				{(styles) => (
					<Paper
						className={classes.dropdown}
						withBorder
						style={styles}
						// h={`calc(100vh - ${rem(60)})`}
					>
						{renderLinks}
						<Divider my='sm' color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

						<Group position='center' grow pb='xl' px='md'>
							<SessionButtons />
						</Group>
					</Paper>
				)}
			</Transition>
		</>
	)
}
