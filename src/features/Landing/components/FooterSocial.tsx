import type { FC } from 'react'
import Link from 'next/link'
import { ActionIcon, Group, createStyles, rem } from '@mantine/core'
import { footerSocialLinks } from '@/features/Landing/constants/footerSocialLinks'

const useStyles = createStyles((theme) => ({
	socialLinks: {
		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.xs,
		},
	},
}))

export const FooterSocial: FC = () => {
	const { classes, theme } = useStyles()
	const links = footerSocialLinks.map((item, index) => (
		<Link href={item.link} passHref legacyBehavior key={index}>
			<ActionIcon size='md' component='a'>
				<item.icon size={rem(20)} stroke={1.5} color={theme.fn.primaryColor()} />
			</ActionIcon>
		</Link>
	))
	return (
		<Group spacing={0} position='right' noWrap className={classes.socialLinks}>
			{links}
		</Group>
	)
}
