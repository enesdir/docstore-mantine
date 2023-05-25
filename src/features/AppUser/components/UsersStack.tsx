import { ActionIcon, Avatar, Group, Menu, ScrollArea, Table, Text } from '@mantine/core'
import {
	IconDots,
	IconMessages,
	IconNote,
	IconPencil,
	IconReportAnalytics,
	IconTrash,
} from '@tabler/icons-react'
import type { User } from '../types/UserType'

interface UsersStackProps {
	data: User[]
}

export function UsersStack({ data }: UsersStackProps) {
	const rows = data.map((item) => (
		<tr key={item.name}>
			<td>
				<Group spacing='sm'>
					<Avatar size={40} src={item.avatar} radius={40} />
					<div>
						<Text fz='sm' fw={500}>
							{item.name}
						</Text>
						<Text c='dimmed' fz='xs'>
							{item.job}
						</Text>
					</div>
				</Group>
			</td>
			<td>
				<Text fz='sm'>{item.email}</Text>
				<Text fz='xs' c='dimmed'>
					Email
				</Text>
			</td>
			<td>
				<Text fz='sm'>${item.rate.toFixed(1)} / hr</Text>
				<Text fz='xs' c='dimmed'>
					Rate
				</Text>
			</td>
			<td>
				<Group spacing={0} position='right'>
					<ActionIcon>
						<IconPencil size='1rem' stroke={1.5} />
					</ActionIcon>
					<Menu transitionProps={{ transition: 'pop' }} withArrow position='bottom-end' withinPortal>
						<Menu.Target>
							<ActionIcon>
								<IconDots size='1rem' stroke={1.5} />
							</ActionIcon>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item icon={<IconMessages size='1rem' stroke={1.5} />}>Send message</Menu.Item>
							<Menu.Item icon={<IconNote size='1rem' stroke={1.5} />}>Add note</Menu.Item>
							<Menu.Item icon={<IconReportAnalytics size='1rem' stroke={1.5} />}>Analytics</Menu.Item>
							<Menu.Item icon={<IconTrash size='1rem' stroke={1.5} />} color='red'>
								Terminate contract
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Group>
			</td>
		</tr>
	))

	return (
		<ScrollArea>
			<Table sx={{ minWidth: 800 }} verticalSpacing='md'>
				<tbody>{rows}</tbody>
			</Table>
		</ScrollArea>
	)
}
