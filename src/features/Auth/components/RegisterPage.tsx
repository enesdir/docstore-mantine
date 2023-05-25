'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Alert, Button, Group, PasswordInput, TextInput } from '@mantine/core'
import { hasLength, isEmail, isNotEmpty, matchesField, useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { IconAlertCircle, IconAt, IconLetterCase, IconLock } from '@tabler/icons-react'
import { useSupabase } from '@/providers/SupabaseProvider'
import { getPath } from '@/utils/getPath'
import AuthBody from './AuthBody'
import { AuthHeader } from './AuthHeader'

export const RegisterPage = () => {
	const { supabase } = useSupabase()
	const [error, setError] = useState<string | undefined>()
	const router = useRouter()

	const registerForm = useForm({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validateInputOnBlur: true,
		validate: {
			firstName: hasLength({ min: 2 }, 'First name must be at least 2 characters'),
			lastName: hasLength({ min: 2 }, 'Last name must be at least 2 characters'),
			email: isEmail('Invalid email') || isNotEmpty('Email is required'),
			password: hasLength({ min: 8 }, 'Password must be at least 8 characters'),
			confirmPassword: matchesField('password', 'Passwords do not match'),
		},
	})
	return (
		<>
			<AuthHeader
				title='Create an account!'
				subTitle='Already have an account?'
				link={getPath('LOGIN')}
				linkLabel='Sign In'
			/>
			<form
				onSubmit={registerForm.onSubmit((values) => {
					setError(undefined)
					// setLoadings({ ...loadings, credentials: true })

					void (async () => {
						await supabase.auth
							.signUp({
								email: values.email,
								password: values.password,
								options: {
									emailRedirectTo: 'https://example.com/app',
									data: {
										first_name: values.firstName,
										last_name: values.lastName,
										image: '',
									},
								},
							})
							.then(async (res) => {
								if (res?.data) {
									showNotification({
										message: 'Congratulations! Your account has been created successfully.',
									})
									await router.push(getPath('APP'))
								}
								if (res?.error) {
									setError(res.error.message)
									console.log(res.error)
									registerForm.reset()
									// setLoadings({ ...loadings, credentials: false });
								}
							})
					})()
				})}
			>
				<AuthBody>
					<Group grow>
						<TextInput
							placeholder='Enter your first name'
							withAsterisk
							label='First name'
							required
							{...registerForm.getInputProps('firstName')}
							icon={<IconLetterCase size='1rem' />}
							// disabled={signUpMutation.isLoading}
						/>
						<TextInput
							placeholder='Enter your last name'
							withAsterisk
							label='Last name'
							{...registerForm.getInputProps('lastName')}
							// disabled={signUpMutation.isLoading}
							icon={<IconLetterCase size='1rem' />}
						/>
					</Group>

					<TextInput
						placeholder='Enter your email address'
						type='email'
						withAsterisk
						label='Email'
						required
						icon={<IconAt size='1rem' />}
						{...registerForm.getInputProps('email')}
						// disabled={signUpMutation.isLoading}
					/>
					<PasswordInput
						placeholder='Enter your password'
						withAsterisk
						label='Password'
						required
						// visible={visible}
						// onVisibilityChange={toggle}
						{...registerForm.getInputProps('password')}
						// disabled={signUpMutation.isLoading}
						icon={<IconLock size='1rem' />}
					/>
					<PasswordInput
						placeholder='Confirm your password'
						withAsterisk
						label='Confirm password'
						required
						{...registerForm.getInputProps('confirmPassword')}
						// visible={visible}
						// onVisibilityChange={toggle}

						// disabled={signUpMutation.isLoading}
						icon={<IconLock size='1rem' />}
					/>
					{error && (
						<Alert icon={<IconAlertCircle size='1rem' />} title='Error' color='red'>
							{error}
						</Alert>
					)}
					<Button fullWidth mt='sm' type='submit'>
						Sign up
					</Button>
				</AuthBody>
			</form>
		</>
	)
}
