import { type FC } from 'react'
import { Autocomplete } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

export const SearchForm: FC = () => (
	<Autocomplete
		data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
		size='lg'
		placeholder='Search'
		icon={<IconSearch size={18} stroke={1.5} />}
		styles={{
			// root: { flexGrow: 1, marginLeft: -34 },
			input: { border: 0, backgroundColor: 'transparent' },
		}}
		onChange={(value) => {
			console.log(value)
		}}
	/>
)
