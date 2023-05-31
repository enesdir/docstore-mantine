import Link from 'next/link'
import { Button } from '@mantine/core'
import { UserMenu } from '@/features/Auth/components/UserMenu'
import { useSupabase } from '@/providers/SupabaseProvider'
import { getPath } from '@/utils/getPath'

export default function SessionButtons() {
	const { session } = useSupabase()

	if (session) {
		return <UserMenu />
	}
	return (
		<>
			<Button variant='default' component={Link} href={getPath('LOGIN')}>
				Log in
			</Button>
			<Button component={Link} href={getPath('REGISTER')}>
				Sign up
			</Button>
		</>
	)
}
