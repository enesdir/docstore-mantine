'use client'

import Link from 'next/link'
import { Anchor, Button, Center, Group, Text, TextInput, rem } from '@mantine/core'
import { IconArrowLeft, IconAt } from '@tabler/icons-react'
import { getPath } from '@/utils/getPath'
import AuthBody from './AuthBody'
import { AuthHeader } from './AuthHeader'

export const ForgotPasswordPage = () => {
	const handleClick = () => {
		console.log('clicked')
	}

	return (
		<>
			<AuthHeader title='Forgot your password?' subTitle='Enter your email to get a reset link' />

			<AuthBody>
				<TextInput
					placeholder='Enter your email'
					type='email'
					withAsterisk
					label='Email'
					required
					icon={<IconAt size='1rem' />}
				/>
				<Group
					position='apart'
					mt='lg'
					sx={(theme) => ({
						[theme.fn.smallerThan('xs')]: {
							flexDirection: 'column-reverse',
						},
					})}
				>
					<Anchor
						color='dimmed'
						size='sm'
						sx={(theme) => ({
							[theme.fn.smallerThan('xs')]: {
								width: '100%',
								textAlign: 'center',
							},
						})}
						component={Link}
						href={getPath('LOGIN')}
					>
						<Center inline>
							<IconArrowLeft size={rem(12)} stroke={1.5} />
							<Text ml={5} size='xs'>
								Back to the login page
							</Text>
						</Center>
					</Anchor>
					<Button
						sx={(theme) => ({
							[theme.fn.smallerThan('xs')]: {
								width: '100%',
							},
						})}
						type='submit'
						onClick={handleClick}
					>
						Reset password
					</Button>
				</Group>
			</AuthBody>
		</>
	)
}
