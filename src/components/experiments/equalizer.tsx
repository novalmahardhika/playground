'use client'

import { motion } from 'motion/react'

export function Equalizer() {
  return (
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
  )
}
