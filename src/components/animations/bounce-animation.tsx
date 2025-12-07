'use client'

import { motion } from 'motion/react'

export function BounceAnimation() {
  return (
    <motion.div
      animate={{ y: [-20, 0, -20] }}
      transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
      className='w-24 h-24 bg-secondary border-2 border-border rounded-full shadow-[4px_4px_0px_0px_var(--color-border)]'
    />
  )
}
