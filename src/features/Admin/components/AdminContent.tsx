import { type FC, type ReactNode } from 'react'
import { Box, Paper, Title } from '@mantine/core'

type AdminContentProps = {
	children: ReactNode
	title: string
	className?: string
	outerTitle?: boolean
}

export const AdminContent: FC<AdminContentProps> = ({ children, title, outerTitle, className }) => (
	<Box
		className={className}
		// sx={(theme) => ({
		// 	backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
		// })}
	>
		{outerTitle ? (
			<Title order={2} mb='sm'>
				{title}
			</Title>
		) : null}
		<Paper shadow='xs' p='md' sx={{ backgroundColor: 'transparent' }}>
			{outerTitle ? null : (
				<Title order={2} mb='sm'>
					{title}
				</Title>
			)}
			{children}
		</Paper>
	</Box>
)
