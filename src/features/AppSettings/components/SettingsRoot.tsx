'use client'

import { Button, SimpleGrid, Stack, TextInput } from '@mantine/core'
import { IconAt, IconLetterCase } from '@tabler/icons-react'
import { PageContainer } from '@/components/PageContainer'
import { PageContent } from '@/components/PageContent'
import { ColorSchemeSwitch } from './ColorSchemeSwitch'

export const SettingsRoot = () => (
	<PageContainer
		title='Settings'
		items={[
			{ label: 'Home', href: '#' },
			{ label: 'User', href: '#' },
			{ label: 'Settings', href: '#' },
		]}
	>
		<Stack spacing='xl'>
			<PageContent outerTitle title='	User Settings'>
				User Settings
			</PageContent>
			<SimpleGrid
				cols={2}
				breakpoints={[
					{ maxWidth: 'md', cols: 2 },
					{ maxWidth: 'xs', cols: 1 },
				]}
			>
				<PageContent title='Profile Settings'>
					<form>
						<Stack spacing='md'>
							<TextInput
								placeholder='Enter your first name'
								withAsterisk
								label='First name'
								required
								icon={<IconLetterCase size='1rem' />}
							/>
							<TextInput
								placeholder='Enter your email address'
								type='email'
								withAsterisk
								label='Email'
								required
								icon={<IconAt size='1rem' />}
							/>
							<Button fullWidth mt='sm' type='submit'>
								Save Changes
							</Button>
						</Stack>
					</form>
				</PageContent>
				<PageContent title='UI Preferences'>
					<ColorSchemeSwitch />
				</PageContent>
			</SimpleGrid>
		</Stack>
	</PageContainer>
)
