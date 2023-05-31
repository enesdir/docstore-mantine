import { IconMessage, IconSettings } from '@tabler/icons-react'
import type { UserMenuItemType } from '@/features/Auth/types/UserMenuItemType'
import { getPath } from '@/utils/getPath'

export const userMenuLinks: UserMenuItemType[] = [
	{
		title: 'Application',
		links: [
			{
				title: 'Application Settings',
				link: getPath('APP'),
				icon: IconSettings,
			},
			{
				title: 'Messages',
				link: getPath('APP'),
				icon: IconMessage,
				isDisabled: true,
			},
		],
	},
	{
		title: 'Management',
		links: [
			{
				title: 'App Administration',
				link: getPath('ADMIN'),
				icon: IconSettings,
			},
		],
	},
]
