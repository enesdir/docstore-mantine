'use client'

import { PageContainer } from '@/components/PageContainer'
import users from '../data/users.json'
import { SalariesTable } from './SalariesTable'

export const AdminSalaries = () => {
	return (
		<PageContainer title='Colleague Salaries' fluid>
			<SalariesTable data={users.data} />
		</PageContainer>
	)
}
