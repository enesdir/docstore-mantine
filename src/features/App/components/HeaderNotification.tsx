import { type FC } from 'react'
import Link from 'next/link'
import { ActionIcon, Indicator, rem } from '@mantine/core'
import { IconBellFilled } from '@tabler/icons-react'
import { getPath } from '@/utils/getPath'

type HeaderNotificationProps = {
	disabled?: boolean
}
export const HeaderNotification: FC<HeaderNotificationProps> = ({ disabled }) => (
	<Indicator inline size={12} offset={8} color='red' withBorder disabled={disabled}>
		<Link href={getPath('APP_NOTIFICATION')} passHref legacyBehavior>
			<ActionIcon component='a' variant='hover' radius='lg' size={40}>
				<IconBellFilled size={rem(22)} />
			</ActionIcon>
		</Link>
	</Indicator>
)
