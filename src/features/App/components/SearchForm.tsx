import { type FC } from 'react'
import { Autocomplete } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

export const SearchForm: FC = () => (
	<Autocomplete
		data={[]}
		size='lg'
		placeholder='Search'
		icon={<IconSearch size={18} />}
		styles={{
			root: { flexGrow: 1 },
			input: { border: 0, backgroundColor: 'transparent' },
		}}
		onChange={(value) => {
			console.log(value)
		}}
	/>
)
