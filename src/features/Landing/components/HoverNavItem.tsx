/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Anchor,
  Box,
  Button,
  Center,
  Divider,
  Group,
  HoverCard,
  SimpleGrid,
  Text,
  createStyles,
  rem,
} from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

import { type NavItemsType } from '@/features/Landing/types/NavItemType'

import { type NavItemActions } from '../types/NavItemActions'
import { HoverNavItemLink } from './HoverNavItemLink'

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },
}))

type HoverNavItemProps = NavItemActions & {
  data: NavItemsType
}

export function HoverNavItem({ data, close }: HoverNavItemProps) {
  const { classes, theme } = useStyles()
  return (
    <>
      <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
        <HoverCard.Target>
          <a href={data.link} className={classes.link}>
            <Center inline>
              <Box component="span" mr={5}>
                {data.label}
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </a>
        </HoverCard.Target>

        <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
          <Group position="apart" px="md">
            <Text fw={500}>{data.label}</Text>
            <Anchor href="#" fz="xs">
              View all
            </Anchor>
          </Group>
          <Divider my="sm" mx="-md" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
          <SimpleGrid cols={2} spacing={0}>
            {/* @ts-expect-error: If the detail part provided, we're rendering this component */}
            <HoverNavItemLink data={data.detail.links} close={close} />
          </SimpleGrid>
          <div className={classes.dropdownFooter}>
            <Group position="apart">
              <div>
                <Text fw={500} fz="sm">
                  {/* @ts-expect-error: If the detail part provided, we're rendering this component */}
                  {data.detail.footerTitle}
                </Text>
                <Text size="xs" color="dimmed">
                  {/* @ts-expect-error: If the detail part provided, we're rendering this component */}
                  {data.detail.footerDescription}
                </Text>
              </div>
              {/* @ts-expect-error: If the detail part provided, we're rendering this component */}
              <Button variant="default">{data.detail.footerButtonText}</Button>
            </Group>
          </div>
        </HoverCard.Dropdown>
      </HoverCard>
    </>
  )
}
