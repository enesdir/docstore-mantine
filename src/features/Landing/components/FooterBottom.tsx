import { Container, rem } from '@mantine/core'
import { CopyrightText } from './CopyrightText'
import { FooterSocial } from './FooterSocial'

export const FooterBottom = () => {
	return (
		<Container
			sx={(theme) => ({
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				marginTop: theme.spacing.xl,
				paddingTop: theme.spacing.xl,
				paddingBottom: theme.spacing.xl,
				borderTop: `${rem(1)} solid ${
					theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
				}`,

				[theme.fn.smallerThan('sm')]: {
					flexDirection: 'column',
				},
			})}
		>
			<CopyrightText />
			<FooterSocial />
		</Container>
	)
}
