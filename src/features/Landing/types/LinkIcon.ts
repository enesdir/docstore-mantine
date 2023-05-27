import type { TablerIconsProps } from '@tabler/icons-react'

export type LinkIconType = {
	icon: (props: TablerIconsProps) => JSX.Element
	title: string
	link: string
}
