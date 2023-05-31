import type { TablerIconsProps } from '@tabler/icons-react'

export type AdminNavLinkType = {
	label: string
	icon: (props: TablerIconsProps) => JSX.Element
	initiallyOpened?: boolean
	links?: {
		label: string
		link: string
	}[]
}
