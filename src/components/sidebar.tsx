'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type SidebarProps = React.HTMLAttributes<HTMLDivElement>

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  const items = [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
        },
      ],
    },
    {
      title: 'Components',
      items: [
        {
          title: 'Buttons',
          href: '/docs/components/button',
        },
        {
          title: 'Inputs',
          href: '/docs/components/input',
        },
      ],
    },
    {
      title: 'Animations',
      items: [
        {
          title: 'Basic Motion',
          href: '/docs/animations',
        },
      ],
    },
    {
      title: 'Layouts',
      items: [
        {
          title: 'Grid & Flex',
          href: '/docs/layouts',
        },
      ],
    },
    {
      title: 'Blocks',
      items: [
        {
          title: 'Full Calendar',
          href: '/docs/blocks/full-calendar',
        },
      ],
    },
    {
      title: 'Experiments',
      items: [
        {
          title: 'Visualizers',
          href: '/docs/experiments',
        },
      ],
    },
  ]

  return (
    <div className={cn('pb-12', className)}>
      <div className='space-y-4 py-4'>
        {items.map((group, i) => (
          <div key={i} className='px-3 py-2'>
            <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
              {group.title}
            </h2>
            <div className='space-y-1'>
              {group.items.map((item, j) => (
                <Link key={j} href={item.href}>
                  <Button
                    variant={pathname === item.href ? 'secondary' : 'ghost'}
                    className='w-full justify-start'
                  >
                    {item.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
