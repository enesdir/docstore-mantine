import type { FC } from 'react'
import { Text } from '@mantine/core'

export const CopyrightText: FC = () => {
	const date = new Date()
	return (
		<Text color='dimmed' size='sm'>
			© {date.getFullYear()} DocStore. All rights reserved.
		</Text>
	)
}
