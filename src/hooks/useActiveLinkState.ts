import { useState } from 'react'

export const useActiveLinkState = () => {
	const [activeLink, setActiveLink] = useState<string>('')
	return {
		activeLink,
		setActiveLink,
	}
}
