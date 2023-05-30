import { Container, Text, createStyles, rem } from '@mantine/core'
import { Logo } from '@/components/Logo/Logo'
import { footerLinks } from '@/features/Landing/constants/footerLinks'
import { FooterBottom } from './FooterBottom'

const useStyles = createStyles((theme) => ({
	footer: {
		marginTop: rem(80),
		paddingTop: `calc(${theme.spacing.xl} * 1)`,
		paddingBottom: `calc(${theme.spacing.xs} * 1)`,
		// backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
	},

	logo: {
		maxWidth: rem(200),

		[theme.fn.smallerThan('sm')]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	groups: {
		display: 'flex',
		flexWrap: 'wrap',

		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	wrapper: {
		width: rem(160),
	},
}))

export const LandingFooter = () => {
	const { classes } = useStyles()

	const groups = footerLinks?.map((group) => {
		const links = group.links.map((link, index) => (
			<Text<'a'>
				key={index}
				sx={(theme) => ({
					display: 'block',
					color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
					fontSize: theme.fontSizes.sm,
					paddingTop: rem(3),
					paddingBottom: rem(3),

					'&:hover': {
						textDecoration: 'underline',
					},
				})}
				component='a'
				href={link.link}
				onClick={(event) => event.preventDefault()}
			>
				{link.label}
			</Text>
		))

		return (
			<div className={classes.wrapper} key={group.title}>
				<Text
					sx={(theme) => ({
						fontSize: theme.fontSizes.lg,
						fontWeight: 700,
						// fontFamily: `Greycliff CF, ${theme.fontFamily}`,
						marginBottom: `calc(${theme.spacing.xs} / 2)`,
						color: theme.colorScheme === 'dark' ? theme.white : theme.black,
					})}
				>
					{group.title}
				</Text>
				{links}
			</div>
		)
	})

	return (
		<footer className={classes.footer}>
			<Container
				sx={(theme) => ({
					display: 'flex',
					justifyContent: 'space-between',

					[theme.fn.smallerThan('sm')]: {
						flexDirection: 'column',
						alignItems: 'center',
					},
				})}
			>
				<div className={classes.logo}>
					<Logo logoText='DocStore' />
					<Text
						size='xs'
						color='dimmed'
						sx={(theme) => ({
							marginTop: rem(10),
							[theme.fn.smallerThan('sm')]: {
								marginTop: theme.spacing.xs,
								textAlign: 'center',
							},
						})}
					>
						Build fully functional accessible web applications faster than ever
					</Text>
				</div>
				<div className={classes.groups}>{groups}</div>
			</Container>
			<FooterBottom />
		</footer>
	)
}
