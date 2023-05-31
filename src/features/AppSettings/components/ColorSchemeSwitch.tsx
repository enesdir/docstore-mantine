import { Box, Center, Group, SegmentedControl, Text, useMantineColorScheme } from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'

export function ColorSchemeSwitch() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme()

	return (
		<Group position='apart' my='xl'>
			<Text>Color Scheme:</Text>
			<SegmentedControl
				value={colorScheme}
				onChange={(value: 'light' | 'dark') => toggleColorScheme(value)}
				data={[
					{
						value: 'light',
						label: (
							<Center>
								<IconSun size='1rem' stroke={1.5} />
								<Box ml={10}>Light</Box>
							</Center>
						),
					},
					{
						value: 'dark',
						label: (
							<Center>
								<IconMoon size='1rem' stroke={1.5} />
								<Box ml={10}>Dark</Box>
							</Center>
						),
					},
				]}
			/>
		</Group>
	)
}
