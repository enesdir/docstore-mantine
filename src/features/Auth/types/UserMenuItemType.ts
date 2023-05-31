import type { LinkIconType } from '@/features/Landing/'

export type UserMenuItemType = {
	title: string
	links: (LinkIconType & { isDisabled?: boolean })[]
}
