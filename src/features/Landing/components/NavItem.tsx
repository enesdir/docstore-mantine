import Link from 'next/link'

import { createStyles, rem } from '@mantine/core'

import { useLandingUI } from '../providers/LandingUIProvider'
import { type NavItemActions } from '../types/NavItemActions'

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

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}))

type NavItemProps = NavItemActions & {
  href: string
  label: string
}
export const NavItem = ({ href, label, close }: NavItemProps) => {
  const { classes, cx } = useStyles()
  const { activeLink, setActiveLink } = useLandingUI()
  return (
    <Link
      href={href}
      passHref
      className={cx(classes.link, { [classes.linkActive]: activeLink === href })}
      onClick={(event) => {
        event.preventDefault()
        setActiveLink(href)
        close()
      }}
    >
      <span>{label}</span>
    </Link>
  )
}
