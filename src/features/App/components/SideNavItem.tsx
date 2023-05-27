import { useState } from 'react'
import { Group, Text, ThemeIcon, UnstyledButton, createStyles, rem } from '@mantine/core'

// import { type NavItemActions } from '../types/NavItemActions'
// import { type NavItemDetail } from '../types/NavItemType'

const useStyles = createStyles((theme) => ({
	subLink: {
		width: '100%',
		padding: `${theme.spacing.xs} ${theme.spacing.md}`,
		borderRadius: theme.radius.md,

		...theme.fn.hover({
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
		}),

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

// type HoverNavItemProps = NavItemActions & {
// 	data: NavItemDetail['links']
// }

export function SideNavItem({ data, close }) {
	const { classes, theme, cx } = useStyles()
	const [activeLink, setActiveLink] = useState<boolean>(false)
	const links = data.map((item) => (
		<UnstyledButton
			className={cx(classes.subLink, { [classes.linkActive]: activeLink === item.link })}
			key={item.title}
			onClick={(event) => {
				event.preventDefault()
				setActiveLink(item.link)
				close()
			}}
		>
			<Group noWrap align='flex-start'>
				<ThemeIcon size={34} variant='default' radius='md'>
					<item.icon size={rem(22)} color={theme.fn.primaryColor()} />
				</ThemeIcon>
				<div>
					<Text size='sm' fw={500}>
						{item.label}
					</Text>
					<Text size='xs' color='dimmed'>
						oko
					</Text>
				</div>
			</Group>
		</UnstyledButton>
	))

	return <>{links}</>
}
