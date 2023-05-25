'use client'

import { Container, Space } from '@mantine/core'
import { FAQ, FeaturesCards, HeroWithDots } from '@/features/Landing/'
import { EmailBanner } from './EmailBanner'
import { GetInTouchSimple } from './GetInTouch'

export const WebsiteRoot = () => (
	<>
		<HeroWithDots />

		<Space h='xl' />
		<Container size='lg' py='xl'>
			<FeaturesCards />
			<EmailBanner />
			<FAQ />
			<GetInTouchSimple />
		</Container>
	</>
)
