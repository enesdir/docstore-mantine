import type { FC } from 'react'
import { Group } from '@mantine/core'
import { LogoRounded } from './LogoRounded'
import { LogoText } from './LogoText'

export interface LogoProps {
	logoText?: string
}

export const Logo: FC<LogoProps> = ({ logoText }) => {
	if (!logoText) {
		return <LogoRounded />
	}

	return (
		<Group>
			<LogoRounded />
			<LogoText text={logoText} />
		</Group>
	)
}
