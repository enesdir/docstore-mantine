import { Badge, Button, Card, Center, Group, Stack, Text, createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
	},

	imageSection: {
		padding: theme.spacing.md,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
	},

	label: {
		marginBottom: theme.spacing.xs,
		lineHeight: 1,
		fontWeight: 700,
		fontSize: theme.fontSizes.xs,
		letterSpacing: -0.25,
		textTransform: 'uppercase',
	},

	section: {
		padding: theme.spacing.md,
		borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
	},

	icon: {
		marginRight: 5,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
	},
}))

interface FeatureProps {
	features: {
		label: string
	}[]

	details: {
		label: string
		offer: string
		description: string
		price: string
		duration: string
	}
}

export function PricingCard({ features, details }: FeatureProps) {
	const { classes } = useStyles()
	const allfeatures = features.map((feature) => (
		<Center key={feature.label}>
			<Text size='xs'>{feature.label}</Text>
		</Center>
	))

	return (
		<Card withBorder radius='md' className={classes.card}>
			<Group position='apart' mt='md'>
				<Text weight={500}>{details.label}</Text>
				<Badge variant='outline'>{details.offer}</Badge>
			</Group>

			<Card.Section className={classes.section} mt='md'>
				<Text size='sm' color='dimmed' className={classes.label}>
					{details.description}
				</Text>
				<Stack>{allfeatures}</Stack>
			</Card.Section>

			<Card.Section className={classes.section}>
				<Group spacing={30}>
					<div>
						<Text size='xl' weight={700} sx={{ lineHeight: 1 }}>
							{details.price}
						</Text>
						<Text size='sm' color='dimmed' weight={500} sx={{ lineHeight: 1 }} mt={3}>
							{details.duration}
						</Text>
					</div>
				</Group>
			</Card.Section>
			<Center>
				<Button radius='xl' style={{ flex: 1 }}>
					Get Started
				</Button>
			</Center>
		</Card>
	)
}
