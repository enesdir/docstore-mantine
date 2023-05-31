import { IconHome, IconSettings } from '@tabler/icons-react'
import { LinkIconType } from '@/features/Landing/types/LinkIcon'
import { getPath } from '@/utils/getPath'

export const appNavLinks: LinkIconType[] = [
	{ link: getPath('APP'), title: 'Home', icon: IconHome },
	{ link: getPath('APP_SETTINGS'), title: 'Settings', icon: IconSettings },
]
