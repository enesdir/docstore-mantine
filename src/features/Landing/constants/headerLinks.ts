import {
  IconBook,
  IconChartPie3,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from '@tabler/icons-react'

import type { NavItemsType } from '@/features/Landing/types/NavItemType'

export const headerLinks: NavItemsType[] = [
  { link: '/', label: 'Home' },
  {
    link: '/features',
    label: 'Features',
    detail: {
      links: [
        {
          icon: IconCode,
          title: 'Open source',
          description: 'This Pokémon’s cry is very loud and distracting',
          link: '#sourceCode',
        },
        {
          icon: IconCoin,
          title: 'Free for everyone',
          description: 'The fluid of Smeargle’s tail secretions changes',
          link: '#change',
        },
        {
          icon: IconBook,
          title: 'Documentation',
          description: 'Yanma is capable of seeing 360 degrees without',
          link: '#documentation',
        },
        {
          icon: IconFingerprint,
          title: 'Security',
          description: 'The shell’s rounded shape and the grooves on its.',
          link: '#security',
        },
        {
          icon: IconChartPie3,
          title: 'Analytics',
          description: 'This Pokémon uses its flying ability to quickly chase',
          link: '#Analytics',
        },
        {
          icon: IconNotification,
          title: 'Notifications',
          description: 'Combusken battles with the intensely hot flames it spews',
          link: '#notifications',
        },
      ],
      footerTitle: 'Get started',
      footerDescription: 'Their food sources have decreased, and their numbers',
      footerButtonText: 'Get started',
      footerButtonLink: '/features',
    },
  },
  { link: '#learn', label: 'Learn' },
  { link: '#academy', label: 'Academy' },
]
