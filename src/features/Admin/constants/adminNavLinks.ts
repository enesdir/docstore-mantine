import {
	IconAdjustments,
	IconCalendarStats,
	IconFileAnalytics,
	IconGauge,
	IconLock,
	IconNotes,
	IconPresentationAnalytics,
	IconUsersGroup,
} from '@tabler/icons-react'
import type { AdminNavLinkType } from '@/features/Admin/types/AdminNavLinkType'
import { getPath } from '@/utils/getPath'

export const adminNavLinks: AdminNavLinkType[] = [
	{ label: 'Dashboard', icon: IconGauge, link: getPath('ADMIN') },
	{
		label: 'Colleagues',
		icon: IconUsersGroup,
		initiallyOpened: true,
		links: [
			{ label: 'Salaries', link: getPath('ADMIN_COLLEAGUES_SALARIES') },
			{ label: 'Manage', link: '/' },
		],
	},
	{
		label: 'Market news',
		icon: IconNotes,
		initiallyOpened: false,
		links: [
			{ label: 'Overview', link: '/' },
			{ label: 'Forecasts', link: '/' },
			{ label: 'Outlook', link: '/' },
			{ label: 'Real time', link: '/' },
		],
	},
	{
		label: 'Releases',
		icon: IconCalendarStats,
		links: [
			{ label: 'Upcoming releases', link: '/' },
			{ label: 'Previous releases', link: '/' },
			{ label: 'Releases schedule', link: '/' },
		],
	},
	{
		label: 'Analytics',
		icon: IconPresentationAnalytics,
		link: getPath('ADMIN'),
	},
	{ label: 'Contracts', icon: IconFileAnalytics, link: getPath('ADMIN') },
	{ label: 'Settings', icon: IconAdjustments, link: getPath('ADMIN') },
	{
		label: 'Security',
		icon: IconLock,
		links: [
			{ label: 'Enable 2FA', link: '/' },
			{ label: 'Change password', link: '/' },
			{ label: 'Recovery codes', link: '/' },
		],
	},
]
