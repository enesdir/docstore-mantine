import type { PropsWithChildren } from 'react'

import { Paper, Stack } from '@mantine/core'

export default function AuthBody({ children }: PropsWithChildren) {
  return (
    <Paper
      withBorder
      shadow="md"
      sx={(theme) => ({
        padding: theme.spacing.sm,
        [theme.fn.largerThan('xs')]: { padding: theme.spacing.xl },
      })}
      mt={30}
      radius="md"
    >
      <Stack spacing="md">{children}</Stack>
    </Paper>
  )
}
