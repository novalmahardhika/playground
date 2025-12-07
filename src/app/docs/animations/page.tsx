'use client'

import { ComponentPreview } from '@/components/component-preview'
import { RotateAnimation } from '@/components/animations/rotate-animation'
import { BounceAnimation } from '@/components/animations/bounce-animation'

const rotateCode = `"use client"

import { motion } from "motion/react"

export function RotateAnimation() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="w-24 h-24 bg-primary border-2 border-border rounded-lg shadow-[4px_4px_0px_0px_var(--color-border)]"
    />
  )
}`

const bounceCode = `"use client"

import { motion } from "motion/react"

export function BounceAnimation() {
  return (
    <motion.div
      animate={{ y: [-20, 0, -20] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      className="w-24 h-24 bg-secondary border-2 border-border rounded-full shadow-[4px_4px_0px_0px_var(--color-border)]"
    />
  )
}`

export default function AnimationsPage() {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Animations
        </h1>
        <p className='text-lg text-muted-foreground'>
          Bring your interface to life with smooth transitions.
        </p>
      </div>
      <div className='pb-12 space-y-12'>
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Basic Motion
          </h2>
          <div className='grid gap-8'>
            <ComponentPreview
              title='Rotate Animation'
              component={<RotateAnimation />}
              tsCode={rotateCode}
            />
            <ComponentPreview
              title='Bounce Animation'
              component={<BounceAnimation />}
              tsCode={bounceCode}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
