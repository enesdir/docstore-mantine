import type { FC } from 'react'
import { Text } from '@mantine/core'

export type LogoTextProps = {
	text: string
}
export const LogoText: FC<LogoTextProps> = ({ text }) => {
	return (
		<Text
			sx={(theme) => ({
				textAlign: 'center',
				fontWeight: 900,
				fontSize: 20,
				letterSpacing: 1.4,
				color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[9],
			})}
		>
			{text}
		</Text>
	)
}
