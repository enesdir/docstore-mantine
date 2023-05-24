import Link from 'next/link'

import { Anchor, Text, Title } from '@mantine/core'

type AuthHeaderProps = {
  title: string
  subTitle: string
  link?: string
  linkLabel?: string
}
export function AuthHeader({ title, subTitle, link, linkLabel }: AuthHeaderProps) {
  return (
    <>
      <Title align="center" order={2}>
        {title}
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5} mb={30}>
        {subTitle}{' '}
        {link && (
          <Anchor component={Link} href={link} size="sm" truncate>
            {linkLabel}
          </Anchor>
        )}
      </Text>
    </>
  )
}
