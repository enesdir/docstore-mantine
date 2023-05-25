import { Text, createStyles, useMantineTheme } from '@mantine/core'

const useStyles = createStyles((theme) => ({
	logo: {
		textAlign: 'center',
		fontWeight: 900,
		fontSize: 20,
		letterSpacing: 1.4,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
	},
}))
export function LogoText() {
	const theme = useMantineTheme()
	const { classes } = useStyles()
	return (
		<Text color={theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[9]} className={classes.logo}>
			DocStore
		</Text>
	)
}
