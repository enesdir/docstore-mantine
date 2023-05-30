import { useRouter } from 'next/navigation'
import { Group, Text, ThemeIcon, UnstyledButton, createStyles, rem } from '@mantine/core'
import { AppNavLinks } from '@/features/App/constants/AppNavLinks'
import { useAppUI } from '@/features/App/providers/AppUIProvider'
import type { SideNavActions } from '@/features/App/types/SideNavActions'

const useStyles = createStyles<string, { collapsed?: boolean }>((theme, params) => ({
	link: {
		width: '100%',
		// padding: `${theme.spacing.xs} ${theme.spacing.md}`,
		borderRadius: theme.radius.md,
		padding: params?.collapsed
			? `calc(${theme.spacing.sm}*1) calc(${theme.spacing.xs}*1)`
			: `${theme.spacing.xs} ${theme.spacing.md}`,
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
	linkLabel: params?.collapsed ? { display: 'none' } : {},
}))

type SideNavItemsProps = SideNavActions & {
	collapsed: boolean
}

export function SideNavItems({ collapsed, close, isMobile }: SideNavItemsProps) {
	const { classes, theme, cx } = useStyles({ collapsed })
	const router = useRouter()
	const { activeLink, setActiveLink } = useAppUI()
	const links = AppNavLinks.map((item) => (
		<UnstyledButton
			// @ts-expect-error linkActive defined in classes
			className={cx(classes.link, { [classes.linkActive]: activeLink === item.link })}
			key={item.title}
			onClick={(event) => {
				event.preventDefault()
				setActiveLink(item.link)
				router.push(item.link)
				isMobile && close?.()
			}}
		>
			<Group align='center' position='apart'>
				<ThemeIcon size={34} variant='default' radius='md'>
					<item.icon size={rem(22)} color={theme.fn.primaryColor()} />
				</ThemeIcon>

				<Text size='sm' fw={600} align='center' className={classes.linkLabel}>
					{item.title}
				</Text>
			</Group>
		</UnstyledButton>
	))

	return <>{links}</>
}
