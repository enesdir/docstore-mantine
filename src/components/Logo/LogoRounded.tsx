import Image from 'next/image'

import { type LogoProps } from './useLogoColors'

export function LogoRounded({ size, color, variant, inverted, ...others }: LogoProps) {
  return (
    <Image
      priority
      alt="Website Logo"
      src="/images/logo.png"
      style={{ borderRadius: '50%' }}
      // width={rem(size)}
      // height={rem(size)}
      width="30"
      height="30"
    />
  )
}
