import { type FC, type ReactNode } from 'react'

import { Box, Group } from '@mantine/core'

import { UserMenu } from '@/features/Auth/components/UserMenu'

import { HeaderNotification } from './HeaderNotification'
import { SearchForm } from './SearchForm'

export const Header: FC<{ left: ReactNode }> = ({ left }) => (
  <Box
    component="header"
    sx={(theme) => ({
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      borderBottom: `1px solid`,
    })}
  >
    <Group spacing="lg" noWrap>
      {left}
      <SearchForm />
      <HeaderNotification />
      <UserMenu />
    </Group>
  </Box>
)
