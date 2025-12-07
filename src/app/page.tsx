'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { motion } from 'motion/react'
import {
  ArrowRight,
  Calendar,
  FlaskConical,
  Layers,
  Layout,
  Zap,
} from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <div className='min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground'>
      {/* Navbar */}
      <header className='sticky top-0 z-50 w-full border-b-2 border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-16 items-center justify-between px-4 md:px-6'>
          <div className='flex items-center gap-2 font-bold text-xl tracking-tighter'>
            <div className='h-8 w-8 bg-primary border-2 border-border rounded-none shadow-[2px_2px_0px_0px_var(--color-border)]'></div>
            PLAYGROUND
          </div>
          <nav className='flex items-center gap-4'>
            <Button variant='ghost' size='sm'>
              About
            </Button>
            <Button variant='default' size='sm' className='hidden sm:flex'>
              GitHub
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>

      <main className='container px-4 md:px-6 py-12 md:py-24 mx-auto'>
        {/* Hero Section */}
        <section className='flex flex-col items-center text-center space-y-8 mb-24'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-bold border-2 border-border shadow-[4px_4px_0px_0px_var(--color-border)]'
          >
            🚧 Work in Progress
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-none'
          >
            Frontend
            <br />
            <span
              className='text-primary'
              style={{ textShadow: '4px 4px 0px var(--color-border)' }}
            >
              Experiments
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className='max-w-[600px] text-muted-foreground md:text-xl font-medium border-l-4 border-primary pl-4 text-left'
          >
            A collection of UI components, animations, and weird web
            experiments. Built with Next.js, Tailwind CSS, and Motion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className='flex flex-col sm:flex-row gap-4'
          >
            <Button size='lg' className='text-lg h-14 px-8'>
              Explore <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
            <Button size='lg' variant='outline' className='text-lg h-14 px-8'>
              Documentation
            </Button>
          </motion.div>
        </section>

        {/* Features Grid */}
        <motion.section
          variants={container}
          initial='hidden'
          animate='show'
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Link href={feature.href} className='block h-full'>
                <Card className='h-full hover:-translate-y-2 transition-transform duration-200 cursor-pointer bg-card flex flex-col'>
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-md border-2 border-border flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_var(--color-border)] ${feature.color}`}
                    >
                      <feature.icon className='h-6 w-6 text-black' />
                    </div>
                    <CardTitle className='text-xl'>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className='flex-grow space-y-4'>
                    <CardDescription className='text-base text-foreground/80 font-medium'>
                      {feature.description}
                    </CardDescription>
                    <div className='rounded-md border-2 border-border bg-background p-4 shadow-[2px_2px_0px_0px_var(--color-border)] flex items-center justify-center min-h-[100px]'>
                      {feature.example}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <span className='text-sm font-bold underline decoration-2 underline-offset-4 decoration-primary'>
                      View Details
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.section>
      </main>

      {/* Footer */}
      <footer className='border-t-2 border-border bg-muted py-12 mt-24'>
        <div className='container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6'>
          <div className='flex items-center gap-2 font-bold text-lg'>
            <div className='h-6 w-6 bg-primary border-2 border-border'></div>
            PLAYGROUND
          </div>
          <p className='text-sm font-medium text-muted-foreground text-center md:text-right'>
            © 2025 Neo-Brutalist Playground. Created by Mahardhika Noval.
          </p>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: 'Components',
    description:
      'A library of reusable, accessible, and styled React components.',
    icon: Layers,
    color: 'bg-primary',
    href: '/docs/components',
    example: (
      <Button size='sm' className='pointer-events-none'>
        Click Me
      </Button>
    ),
  },
  {
    title: 'Animations',
    description: 'Complex motion graphics and layout transitions using Motion.',
    icon: Zap,
    color: 'bg-secondary',
    href: '/docs/animations',
    example: (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className='w-8 h-8 bg-secondary border-2 border-border'
      />
    ),
  },
  {
    title: 'Layouts',
    description: 'Responsive and adaptive page layouts for modern web apps.',
    icon: Layout,
    color: 'bg-accent',
    href: '/docs/layouts',
    example: (
      <div className='grid grid-cols-2 gap-1 w-16'>
        <div className='h-4 bg-accent border border-border'></div>
        <div className='h-4 bg-accent border border-border'></div>
        <div className='h-4 bg-accent border border-border col-span-2'></div>
      </div>
    ),
  },
  {
    title: 'Experiments',
    description: 'Experimental features and bleeding-edge web technologies.',
    icon: FlaskConical,
    color: 'bg-chart-4',
    href: '/docs/experiments',
    example: (
      <div className='flex gap-1 items-end h-8'>
        <motion.div
          animate={{ height: [10, 24, 10] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className='w-2 bg-chart-4 border border-border'
        />
        <motion.div
          animate={{ height: [16, 8, 16] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className='w-2 bg-chart-4 border border-border'
        />
        <motion.div
          animate={{ height: [8, 20, 8] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className='w-2 bg-chart-4 border border-border'
        />
      </div>
    ),
  },
  {
    title: 'Full Calendar',
    description: 'A robust monthly calendar view with event management.',
    icon: Calendar,
    color: 'bg-emerald-400',
    href: '/docs/blocks/full-calendar',
    example: (
      <div className='w-full max-w-[100px] border border-border bg-background p-1'>
        <div className='grid grid-cols-7 gap-0.5'>
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square w-full rounded-[1px] ${
                i === 5 ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    ),
  },
]
