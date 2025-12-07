'use client'

import { motion } from 'motion/react'

export function RotateAnimation() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      className='w-24 h-24 bg-primary border-2 border-border rounded-lg shadow-[4px_4px_0px_0px_var(--color-border)]'
    />
  )
}
