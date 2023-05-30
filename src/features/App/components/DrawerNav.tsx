import { type FC } from 'react'
import dynamic from 'next/dynamic'
import { Drawer } from '@mantine/core'

const DynamicSideNav = dynamic(async () => {
	const { SideNavItems } = await import('./SideNavItems')
	return SideNavItems
})

export const DrawerNav: FC<{ opened: boolean; handleClose: () => void }> = ({ opened, handleClose }) => {
	return (
		<>
			<Drawer
				opened={opened}
				onClose={handleClose}
				size='auto'
				title='App Dashboard'
				sx={{ position: 'relative' }}
			>
				<DynamicSideNav collapsed={false} close={handleClose} isMobile />
			</Drawer>
		</>
	)
}
