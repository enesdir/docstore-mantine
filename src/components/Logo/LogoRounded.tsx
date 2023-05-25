import Image from 'next/image'

export function LogoRounded() {
	return (
		<Image
			priority
			alt='Website Logo'
			src='/images/logo.png'
			style={{ borderRadius: '50%' }}
			// width={rem(size)}
			// height={rem(size)}
			width='30'
			height='30'
		/>
	)
}
