import { type FC, type ReactNode } from 'react'
import Link from 'next/link'
import { Anchor, Breadcrumbs, Container, Space, Title, type ContainerProps } from '@mantine/core'

type PageContainerProps = {
	children: ReactNode
	title: string
	items?: { label: string; href: string }[]
} & Pick<ContainerProps, 'fluid'>

export const PageContainer: FC<PageContainerProps> = ({ children, title, items, fluid }) => (
	<Container px={0} fluid={fluid}>
		{items && items.length > 0 ? (
			<Breadcrumbs>
				{items.map((item) => (
					<Link key={item.label} href={item.href} passHref legacyBehavior>
						<Anchor>{item.label}</Anchor>
					</Link>
				))}
			</Breadcrumbs>
		) : null}

		<Title order={1}>{title}</Title>

		<Space h='xl' />

		{children}
	</Container>
)
