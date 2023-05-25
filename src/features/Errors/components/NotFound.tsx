'use client'

import { Button, Container, Group, Text, Title, createStyles, rem } from '@mantine/core'
import Balancer from 'react-wrap-balancer'

const useStyles = createStyles((theme) => ({
	root: {
		paddingTop: rem(80),
		paddingBottom: rem(80),
	},

	label: {
		textAlign: 'center',
		fontWeight: 900,
		fontSize: rem(220),
		lineHeight: 1,
		marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

		[theme.fn.smallerThan('sm')]: {
			fontSize: rem(120),
		},
	},

	title: {
		textAlign: 'center',
		fontWeight: 900,
		fontSize: rem(38),

		[theme.fn.smallerThan('sm')]: {
			fontSize: rem(32),
		},
	},

	description: {
		margin: 'auto',
		marginTop: theme.spacing.xl,
		marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
	},
}))

export function NotFound() {
	const { classes } = useStyles()
	// const session = useSession()

	return (
		<Container className={classes.root}>
			<div className={classes.label}>404</div>
			<Title className={classes.title}>
				<Balancer>You have found a secret place.</Balancer>
			</Title>
			<Text color='dimmed' size='lg' align='center' className={classes.description}>
				<Balancer>
					Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been
					moved to another URL.
				</Balancer>
			</Text>
			<Group position='center'>
				<Button
					variant='subtle'
					size='md'
					// component={Link}
					// href={session.status === 'authenticated' ? '/dashboard' : '/'}
				>
					Take me back to home page
				</Button>
			</Group>
		</Container>
	)
}
