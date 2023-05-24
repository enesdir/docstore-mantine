'use client'

import type { PropsWithChildren } from 'react'

import { CacheProvider } from '@emotion/react'
import { type ColorScheme, MantineProvider } from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import { Notifications } from '@mantine/notifications'

import { useGluedEmotionCache } from '@/lib/emotionNextjsGlue'

export default function EmotionProvider({ children }: PropsWithChildren) {
  const cache = useGluedEmotionCache()
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'docstore-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || colorScheme === 'dark' ? 'light' : 'dark')
  }
  useHotkeys([['mod+J', () => toggleColorScheme()]])
  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={cache}
        theme={{ colorScheme: colorScheme }}
      >
        <Notifications />
        {children}
      </MantineProvider>
    </CacheProvider>
  )
}
