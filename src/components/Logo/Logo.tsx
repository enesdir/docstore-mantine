import { Group } from '@mantine/core'

import { LogoRounded } from './LogoRounded'
import { LogoText } from './LogoText'

export interface LogoProps {
  type?: 'mark' | 'full'
}

export function Logo({ type }: LogoProps) {
  if (type === 'mark') {
    return <LogoRounded />
  }

  return (
    <Group>
      <LogoRounded />
      <LogoText />
    </Group>
  )
}
