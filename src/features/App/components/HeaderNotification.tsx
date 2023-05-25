import { type FC } from 'react'
import Link from 'next/link'
import { ActionIcon, Indicator } from '@mantine/core'
import { IconBellFilled } from '@tabler/icons-react'
import { getPath } from '@/utils/getPath'

export const HeaderNotification: FC = () => (
	<Indicator inline size={14} offset={4} color='red' withBorder>
		<Link href={getPath('APP_NOTIFICATION')} passHref legacyBehavior>
			<ActionIcon component='a' variant='hover' radius='xl' size={40}>
				<IconBellFilled />
			</ActionIcon>
		</Link>
	</Indicator>
)
