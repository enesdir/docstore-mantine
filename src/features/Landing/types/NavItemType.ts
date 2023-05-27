import type { LinkIconType } from './LinkIcon'

export type NavItemDetail = {
	links: (LinkIconType & {
		description: string
	})[]
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
