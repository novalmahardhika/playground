'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DocsPage() {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Introduction
        </h1>
        <p className='text-lg text-muted-foreground'>
          Welcome to the Playground documentation.
        </p>
      </div>
      <div className='pb-12 space-y-12'>
        <div className='space-y-4'>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            This is a collection of reusable components, animations, and layouts
            built with Next.js, Tailwind CSS, and Motion. It features a
            Neo-brutalist design system with vibrant colors and bold borders.
          </p>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            Navigate through the sidebar to explore different sections. Each
            component comes with a preview and copy-paste ready code in both
            TypeScript and JavaScript.
          </p>
          <div className='flex gap-4 pt-4'>
            <Link href='/docs/components'>
              <Button size='lg'>
                Get Started <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
