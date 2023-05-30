import { type FC } from 'react'
import { Group, Navbar, Text, UnstyledButton, createStyles, getStylesRef, rem } from '@mantine/core'
import { IconDeviceAnalytics } from '@tabler/icons-react'

const useStyles = createStyles<string, { collapsed?: boolean }>((theme, params) => {
	const icon: string = getStylesRef('icon')

	return {
		subLink: {
			width: '100%',
			paddingTop: theme.spacing.md,
			paddingLeft: params?.collapsed ? rem(2) : rem(10),
			borderRadius: theme.radius.md,
		},

		header: {
			borderBottom: `${rem(1)} solid`,
		},
	}
})

type SideNavHeaderProps = { title: string; collapsed?: boolean }

export const SideNavHeader: FC<SideNavHeaderProps> = ({ title, collapsed }) => {
	const { classes } = useStyles({ collapsed })

	return (
		<Navbar.Section className={classes.header} h={50} pb='lg' px='xl'>
			<UnstyledButton className={classes.subLink}>
				<Group align='center' position='apart'>
					<IconDeviceAnalytics size={rem(22)} />

					{!collapsed && (
						<Text size='sm' fw={600} align='center'>
							{title}
						</Text>
					)}
				</Group>
			</UnstyledButton>
		</Navbar.Section>
	)
}
