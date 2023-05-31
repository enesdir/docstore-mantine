'use client'

import { Stack } from '@mantine/core'
import { PageContainer } from '@/components/PageContainer'
import statsGridData from '@/features/AdminHome/constants/statsGridData.json'
import statsRingsData from '@/features/AdminHome/constants/statsRingsData.json'
import statsSegmentsData from '@/features/AdminHome/constants/statsSegmentsData.json'
import { StatsGrid } from './StatsGrid'
import { StatsRing } from './StatsRings'
import { StatsSegments } from './StatsSegments'

export const AdminHome = () => {
	return (
		<PageContainer title='Admin Dashboard' fluid>
			<Stack spacing={'md'}>
				<StatsGrid data={statsGridData.data} />
				<StatsSegments
					data={statsSegmentsData.data}
					total={statsSegmentsData.total}
					diff={statsSegmentsData.diff}
				/>
				<StatsRing data={statsRingsData.data} />
			</Stack>
		</PageContainer>
	)
}
