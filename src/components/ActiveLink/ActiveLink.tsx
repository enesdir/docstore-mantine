import type { FC, ReactElement } from 'react'
import type { LinkProps } from 'next/link'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = Omit<LinkProps, 'children'> & {
	children: (isActive: boolean) => ReactElement
}

export const ActiveLink: FC<Props> = ({ children, ...linkProps }) => {
	const pathname = usePathname()
	return (
		<Link {...linkProps} legacyBehavior>
			{children(pathname === linkProps.href)}
		</Link>
	)
}
