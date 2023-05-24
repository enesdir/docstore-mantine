'use client'

import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import {
  Alert,
  Anchor,
  Button,
  Center,
  Checkbox,
  Group,
  MediaQuery,
  PasswordInput,
  TextInput,
} from '@mantine/core'
import { hasLength, isEmail, isNotEmpty, useForm } from '@mantine/form'
import { IconAlertCircle, IconAt, IconLock } from '@tabler/icons-react'

import { useSupabase } from '@/providers/SupabaseProvider'
import { getPath } from '@/utils/getPath'

import AuthBody from './AuthBody'
import { AuthHeader } from './AuthHeader'

export const LoginPage = () => {
  const { supabase, session } = useSupabase()
  const [error, setError] = useState<string | undefined>()
  const loginForm = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validateInputOnBlur: true,
    validate: {
      email: isEmail('Invalid email') || isNotEmpty('Email is required'),
      password: hasLength({ min: 8 }, 'Password must be at least 8 characters'),
    },
  })
  const router = useRouter()

  return (
    <>
      <AuthHeader
        title="Welcome back"
        subTitle="Don't have an account yet?"
        link={getPath('REGISTER')}
        linkLabel="Create Account"
      />
      <form
        onSubmit={loginForm.onSubmit((values) => {
          setError(undefined)
          // setLoadings({ ...loadings, credentials: true })

          void (async () => {
            await supabase.auth
              .signInWithPassword({
                email: values.email,
                password: values.password,
              })
              .then(async (res) => {
                if (res?.data) await router.push(getPath('APP'))
                if (res?.error) {
                  setError(res.error.message)
                  console.log(res.error)
                  loginForm.reset()
                  // setLoadings({ ...loadings, credentials: false });
                }
              })
          })()
        })}
      >
        <AuthBody>
          <TextInput
            placeholder="Enter your email address"
            type="email"
            withAsterisk
            label="Email"
            required
            icon={<IconAt size="1rem" />}
            {...loginForm.getInputProps('email')}
          />
          <PasswordInput
            placeholder="Enter your password"
            withAsterisk
            label="Password"
            required
            icon={<IconLock size="1rem" />}
            {...loginForm.getInputProps('password')}
          />
          <Group position="apart">
            <Checkbox label="Remember me" size="sm" />
            <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
              <Anchor size="sm" variant="" component={Link} href={getPath('FORGOT_PASSWORD')}>
                Forgot password?
              </Anchor>
            </MediaQuery>
          </Group>
          {error && (
            <Alert icon={<IconAlertCircle size="1rem" />} title="Error" color="red">
              {error}
            </Alert>
          )}
          <Button fullWidth mt="sm" type="submit">
            SignIn
          </Button>
          <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
            <Center>
              <Anchor size="sm" variant="" component={Link} href={getPath('FORGOT_PASSWORD')}>
                Forgot your password?
              </Anchor>
            </Center>
          </MediaQuery>
        </AuthBody>
      </form>
    </>
  )
}
