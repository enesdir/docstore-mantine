import { type FC } from 'react'
import dynamic from 'next/dynamic'
import { CloseButton, Drawer } from '@mantine/core'

const DynamicSideNav = dynamic(async () => {
	const { SideNav } = await import('./SideNav')
	return SideNav
})

export const DrawerNav: FC<{ opened: boolean; handleClose: () => void }> = ({ opened, handleClose }) => {
	return (
		<Drawer
			opened={opened}
			onClose={handleClose}
			size='auto'
			withCloseButton={false}
			sx={{ position: 'relative' }}
		>
			<CloseButton
				size='xl'
				radius='xl'
				variant='transparent'
				onClick={handleClose}
				sx={{
					position: 'absolute',
					zIndex: 999,
					top: 8,
					right: -56,
					'&:not(:disabled):active': { transform: 'none' },
				}}
			/>
			<DynamicSideNav />
		</Drawer>
	)
}
