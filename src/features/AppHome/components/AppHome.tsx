'use client'

import { Button, Stack } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { PageContainer } from '@/components/PageContainer'
import { PageContent } from '@/components/PageContent'
import { SampleTable } from './SampleTable'

export const AppHome = () => (
	<PageContainer title='DashBoard | Home' fluid>
		<Stack spacing='xl'>
			<PageContent title='Table'>
				<SampleTable />
			</PageContent>
			<PageContent title='Notification'>
				<Button onClick={() => showNotification({ message: 'Success' })}>Show Notifications</Button>
			</PageContent>
		</Stack>
	</PageContainer>
)
