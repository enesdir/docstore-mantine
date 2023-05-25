import type { TablerIconsProps } from '@tabler/icons-react'

export type NavItemDetail = {
	links: {
		icon: (props: TablerIconsProps) => JSX.Element
		title: string
		description: string
		link: string
	}[]
	footerTitle: string
	footerDescription: string
	footerButtonText: string
	footerButtonLink: string
}

export type NavItemsType = {
	link: string
	label: string
	detail?: NavItemDetail
}
