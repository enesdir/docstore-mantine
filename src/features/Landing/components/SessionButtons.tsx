import { useRouter } from 'next/navigation'

import { Button } from '@mantine/core'

import { UserMenu } from '@/features/Auth/components/UserMenu'
import { useSupabase } from '@/providers/SupabaseProvider'
import { getPath } from '@/utils/getPath'

export default function SessionButtons() {
  const router = useRouter()
  const { supabase, session } = useSupabase()
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.log({ error })
    }
  }
  if (session) {
    return <UserMenu />
  }
  return (
    <>
      <Button variant="default" onClick={() => router.push(getPath('LOGIN'))}>
        Log in
      </Button>
      <Button onClick={() => router.push(getPath('REGISTER'))}>Sign up</Button>
    </>
  )
}
