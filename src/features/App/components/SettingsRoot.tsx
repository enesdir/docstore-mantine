'use client'

import { Group, Stack } from '@mantine/core'
import { PageContainer } from '~/src/components/PageContainer'
import { PageContent } from '~/src/components/PageContent'

export const SettingsRoot = () => (
  <PageContainer
    title="Settings"
    items={[
      { label: 'Home', href: '#' },
      { label: 'User', href: '#' },
      { label: 'Settings', href: '#' },
    ]}
  >
    <Stack spacing="xl">
      <PageContent outerTitle title="Foo!">
        Foo
      </PageContent>
      <Group grow>
        <PageContent title="Bar!">Bar</PageContent>
        <PageContent title="Baz!">Baz</PageContent>
      </Group>
    </Stack>
  </PageContainer>
)
