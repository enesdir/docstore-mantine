import { useState } from 'react'

export const useLandingUIState = () => {
  const [activeLink, setActiveLink] = useState<string>('')
  return {
    activeLink,
    setActiveLink,
  }
}
