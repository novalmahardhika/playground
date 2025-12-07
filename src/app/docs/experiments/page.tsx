'use client'

import { ComponentPreview } from '@/components/component-preview'
import { motion } from 'motion/react'

const equalizerTsCode = `import { motion } from "motion/react"

export function Equalizer() {
  return (
    <div className="flex gap-2 items-end h-32 p-8 bg-black rounded-lg border-2 border-border shadow-[4px_4px_0px_0px_var(--color-border)]">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            height: [20, Math.random() * 100 + 20, 20],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
          }}
          className="w-8 bg-primary border border-white/20 rounded-t-sm"
        />
      ))}
    </div>
  )
}`

const equalizerJsCode = `import { motion } from "motion/react"

export function Equalizer() {
  return (
    <div className="flex gap-2 items-end h-32 p-8 bg-black rounded-lg border-2 border-border shadow-[4px_4px_0px_0px_var(--color-border)]">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            height: [20, Math.random() * 100 + 20, 20],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
          }}
          className="w-8 bg-primary border border-white/20 rounded-t-sm"
        />
      ))}
    </div>
  )
}`

export default function ExperimentsPage() {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Experiments
        </h1>
        <p className='text-lg text-muted-foreground'>
          Weird and wonderful web experiments.
        </p>
      </div>
      <div className='pb-12 space-y-12'>
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Audio Visualizer
          </h2>
          <ComponentPreview
            title='Equalizer'
            component={
              <div className='flex gap-2 items-end h-32 p-8 bg-black rounded-lg border-2 border-border shadow-[4px_4px_0px_0px_var(--color-border)]'>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: [20, Math.random() * 100 + 20, 20],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: i * 0.1,
                    }}
                    className='w-8 bg-primary border border-white/20 rounded-t-sm'
                  />
                ))}
              </div>
            }
            tsCode={equalizerTsCode}
            jsCode={equalizerJsCode}
          />
        </div>
      </div>
    </div>
  )
}
