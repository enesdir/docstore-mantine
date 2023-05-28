import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Group, Text, ThemeIcon, UnstyledButton, createStyles, rem } from '@mantine/core'

// import { type NavItemActions } from '../types/NavItemActions'
// import { type NavItemDetail } from '../types/NavItemType'

const useStyles = createStyles<string, { collapsed?: boolean }>((theme, params) => ({
	subLink: {
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
	collapsedLink: { padding: `calc(${theme.spacing.sm}*1) calc(${theme.spacing.xs}*1)` },
	linkActive: {
		'&, &:hover': {
			backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
			color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
		},
	},
	linkLabel: params?.collapsed ? { display: 'none' } : {},
}))

// type HoverNavItemProps = NavItemActions & {
// 	data: NavItemDetail['links']
// }

export function SideNavItem({ data, collapsed }) {
	const { classes, theme, cx } = useStyles({ collapsed })
	const router = useRouter()
	const [activeLink, setActiveLink] = useState<boolean>(false)
	const links = data.map((item) => (
		<UnstyledButton
			className={cx(classes.subLink, { [classes.linkActive]: activeLink === item.link })}
			key={item.title}
			onClick={(event) => {
				event.preventDefault()
				setActiveLink(item.link)
				router.push(item.link)
			}}
		>
			<Group align='center' position='apart'>
				<ThemeIcon size={34} variant='default' radius='md'>
					<item.icon size={rem(22)} color={theme.fn.primaryColor()} />
				</ThemeIcon>

				<Text size='sm' fw={600} align='center' className={classes.linkLabel}>
					{item.label}
				</Text>
			</Group>
		</UnstyledButton>
	))

	return <>{links}</>
}
