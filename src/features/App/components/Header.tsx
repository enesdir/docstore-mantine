import { type FC, type ReactNode } from 'react'
import { Box, Group, rem } from '@mantine/core'
import { UserMenu } from '@/features/Auth/components/UserMenu'
import { HeaderNotification } from './HeaderNotification'
import { SearchForm } from './SearchForm'

export const Header: FC<{ left: ReactNode }> = ({ left }) => (
	<Box
		component='header'
		sx={{
			paddingRight: rem(8),
			paddingLeft: rem(1),
			borderBottom: `${rem(1)} solid`,
		}}
		h={50}
	>
		<Group noWrap position='apart'>
			{left}
			<SearchForm />
			<Box>
				<HeaderNotification />
				<UserMenu />
			</Box>
		</Group>
	</Box>
)
