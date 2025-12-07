'use client'

import React, { useRef, useState } from 'react'
import {
  ArrowRight,
  Check,
  Copy,
  Loader2,
  Send,
  Sparkles,
  Trash,
  Download,
  Fingerprint,
  ChevronRight,
  Lock,
  Unlock,
  Bell,
  Heart,
  Share2,
  Plus,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

import { cn } from '@/lib/utils'

const commonStyles =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2'

// =================================================================================================
// PREVIOUS BUTTONS (Preserved & Re-exported)
// =================================================================================================
// ... (Keeping all previous implementations)

export function Push3DButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'bg-blue-600 text-white shadow-[0_4px_0_rgb(30,58,138)] hover:shadow-[0_2px_0_rgb(30,58,138)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all',
      )}
    >
      Push Me
    </button>
  )
}
export const push3DButtonCode = `export function Push3DButton() {
  return (
    <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-all bg-blue-600 rounded-md shadow-[0_4px_0_rgb(30,58,138)] hover:shadow-[0_2px_0_rgb(30,58,138)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]">
      Push Me
    </button>
  )
}`

export function NeumorphicButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'rounded-full bg-slate-100 text-slate-600 shadow-[4px_4px_10px_#d1d5db,-4px_-4px_10px_#ffffff] hover:shadow-[inset_4px_4px_10px_#d1d5db,inset_-4px_-4px_10px_#ffffff] transition-all dark:bg-slate-800 dark:text-slate-200 dark:shadow-[4px_4px_10px_#0f172a,-4px_-4px_10px_#334155] dark:hover:shadow-[inset_4px_4px_10px_#0f172a,inset_-4px_-4px_10px_#334155]',
      )}
    >
      Soft Click
    </button>
  )
}
export const neumorphicButtonCode = `export function NeumorphicButton() {
  return (
    <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-all rounded-full bg-slate-100 text-slate-600 shadow-[4px_4px_10px_#d1d5db,-4px_-4px_10px_#ffffff] hover:shadow-[inset_4px_4px_10px_#d1d5db,inset_-4px_-4px_10px_#ffffff] dark:bg-slate-800 dark:text-slate-200 dark:shadow-[4px_4px_10px_#0f172a,-4px_-4px_10px_#334155] dark:hover:shadow-[inset_4px_4px_10px_#0f172a,inset_-4px_-4px_10px_#334155]">
      Soft Click
    </button>
  )
}`

export function CyberpunkButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'relative overflow-hidden border border-black bg-transparent font-mono uppercase text-black transition-all hover:text-white group',
      )}
    >
      <span className='relative z-10'>Cyberpunk</span>
      <div className='absolute inset-0 h-full w-full translate-x-[-100%] skew-x-12 bg-yellow-400 transition-transform duration-300 group-hover:translate-x-0' />
    </button>
  )
}
export const cyberpunkButtonCode = `export function CyberpunkButton() {
  return (
    <button className="relative inline-flex items-center justify-center h-10 px-4 py-2 overflow-hidden font-mono text-sm font-medium text-black uppercase transition-all bg-transparent border border-black group hover:text-white">
      <span className="relative z-10">Cyberpunk</span>
      <div className="absolute inset-0 h-full w-full translate-x-[-100%] skew-x-12 bg-yellow-400 transition-transform duration-300 group-hover:translate-x-0" />
    </button>
  )
}`

export function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.3
    const y = (clientY - (top + height / 2)) * 0.3
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        commonStyles,
        'rounded-full bg-indigo-600 text-white shadow-lg hover:shadow-indigo-500/50',
      )}
    >
      Magnetic
    </motion.button>
  )
}
export const magneticButtonCode = `import { useRef, useState } from "react"
import { motion } from "motion/react"

export function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.3
    const y = (clientY - (top + height / 2)) * 0.3
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-shadow bg-indigo-600 rounded-full shadow-lg hover:shadow-indigo-500/50"
    >
      Magnetic
    </motion.button>
  )
}`

export function SpotlightButton() {
  const divRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <button
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        commonStyles,
        'relative overflow-hidden border border-slate-800 bg-slate-950 text-slate-100',
      )}
    >
      <span className='pointer-events-none relative z-20'>Spotlight</span>
      <div
        className='pointer-events-none absolute -inset-px transition-opacity duration-300'
        style={{
          opacity,
          background: `radial-gradient(150px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 40%)`,
        }}
      />
    </button>
  )
}
export const spotlightButtonCode = `import { useRef, useState } from "react"

export function SpotlightButton() {
  const divRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <button
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative inline-flex items-center justify-center h-10 px-4 py-2 overflow-hidden text-sm font-medium border rounded-md border-slate-800 bg-slate-950 text-slate-100"
    >
      <span className="pointer-events-none relative z-20">Spotlight</span>
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: \`radial-gradient(150px circle at \${position.x}px \${position.y}px, rgba(255,255,255,.1), transparent 40%)\`,
        }}
      />
    </button>
  )
}`

export function SwipeButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'group relative overflow-hidden border border-emerald-500 bg-transparent text-emerald-500 hover:text-white',
      )}
    >
      <span className='absolute inset-0 -translate-x-full bg-emerald-500 transition-transform duration-300 group-hover:translate-x-0' />
      <span className='relative z-10'>Hover Me</span>
    </button>
  )
}
export const swipeButtonCode = `export function SwipeButton() {
  return (
    <button className="relative inline-flex items-center justify-center h-10 px-4 py-2 overflow-hidden text-sm font-medium transition-colors bg-transparent border rounded-md group border-emerald-500 text-emerald-500 hover:text-white">
      <span className="absolute inset-0 transition-transform duration-300 -translate-x-full bg-emerald-500 group-hover:translate-x-0" />
      <span className="relative z-10">Hover Me</span>
    </button>
  )
}`

export function GlowButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'relative bg-black text-white transition-shadow hover:shadow-[0_0_20px_theme(colors.purple.500)]',
      )}
    >
      <div className='absolute -inset-0.5 -z-10 animate-pulse rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-75 blur-md' />
      <span className='relative z-10'>Neon Glow</span>
    </button>
  )
}
export const glowButtonCode = `export function GlowButton() {
  return (
    <button className="relative inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-shadow bg-black rounded-md hover:shadow-[0_0_20px_theme(colors.purple.500)]">
      <div className="absolute -inset-0.5 -z-10 animate-pulse rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-75 blur-md" />
      <span className="relative z-10">Neon Glow</span>
    </button>
  )
}`

export function CopyButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('Hello World')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className={cn(
        commonStyles,
        'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
      )}
    >
      <AnimatePresence mode='wait' initial={false}>
        {copied ? (
          <motion.span
            key='check'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Check className='size-4' />
          </motion.span>
        ) : (
          <motion.span
            key='copy'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Copy className='size-4' />
          </motion.span>
        )}
      </AnimatePresence>
      <span>{copied ? 'Copied' : 'Copy'}</span>
    </button>
  )
}
export const copyButtonCode = `import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Check, Copy } from "lucide-react"

export function CopyButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("Hello World")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="check"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Check className="size-4" />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Copy className="size-4" />
          </motion.span>
        )}
      </AnimatePresence>
      <span>{copied ? "Copied" : "Copy"}</span>
    </button>
  )
}`

export function SendButton() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleClick = () => {
    if (status !== 'idle') return
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setTimeout(() => setStatus('idle'), 2000)
    }, 1500)
  }

  return (
    <button
      onClick={handleClick}
      disabled={status !== 'idle'}
      className={cn(
        commonStyles,
        'w-32 rounded-full',
        status === 'sent'
          ? 'bg-green-500 text-white'
          : 'bg-blue-600 text-white hover:bg-blue-700',
      )}
    >
      <AnimatePresence mode='popLayout'>
        {status === 'idle' && (
          <motion.span
            key='idle'
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className='flex items-center gap-2'
          >
            Send <Send className='size-4' />
          </motion.span>
        )}
        {status === 'sending' && (
          <motion.span
            key='sending'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <Loader2 className='size-4 animate-spin' />
          </motion.span>
        )}
        {status === 'sent' && (
          <motion.span
            key='sent'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className='flex items-center gap-2'
          >
            Sent <Check className='size-4' />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
export const sendButtonCode = `import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Check, Loader2, Send } from "lucide-react"

export function SendButton() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  const handleClick = () => {
    if (status !== "idle") return
    setStatus("sending")
    setTimeout(() => {
      setStatus("sent")
      setTimeout(() => setStatus("idle"), 2000)
    }, 1500)
  }

  return (
    <button
      onClick={handleClick}
      disabled={status !== "idle"}
      className={\`inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-all w-32 rounded-full \${
        status === "sent" ? "bg-green-500" : "bg-blue-600 hover:bg-blue-700"
      }\`}
    >
        <AnimatePresence mode="popLayout">
          {status === "idle" && (
            <motion.span
              key="idle"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex items-center gap-2"
            >
              Send <Send className="size-4" />
            </motion.span>
          )}
          {status === "sending" && (
            <motion.span
              key="sending"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Loader2 className="size-4 animate-spin" />
            </motion.span>
          )}
          {status === "sent" && (
            <motion.span
              key="sent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex items-center gap-2"
            >
              Sent <Check className="size-4" />
            </motion.span>
          )}
        </AnimatePresence>
    </button>
  )
}`

export function DeleteButton() {
  const [isDeleting, setIsDeleting] = useState(false)

  return (
    <button
      onClick={() => setIsDeleting(true)}
      className={cn(
        commonStyles,
        'border border-red-500/20 bg-red-500/10 text-red-500 hover:bg-red-500/20',
        isDeleting && 'cursor-default opacity-50',
      )}
    >
      <Trash
        className={cn(
          'size-4 transition-transform group-hover:scale-110',
          isDeleting && 'animate-bounce',
        )}
      />
      <span>{isDeleting ? 'Deleting...' : 'Delete'}</span>
    </button>
  )
}
export const deleteButtonCode = `import { useState } from "react"
import { Trash } from "lucide-react"

export function DeleteButton() {
  const [isDeleting, setIsDeleting] = useState(false)

  return (
    <button
      onClick={() => setIsDeleting(true)}
      className={\`inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium border rounded-md border-red-500/20 bg-red-500/10 text-red-500 hover:bg-red-500/20 \${
        isDeleting ? "cursor-default opacity-50" : ""
      }\`}
    >
      <Trash className={\`size-4 transition-transform group-hover:scale-110 \${isDeleting ? "animate-bounce" : ""}\`} />
      <span>{isDeleting ? "Deleting..." : "Delete"}</span>
    </button>
  )
}`

export function BorderBeamButton() {
  return (
    <button className='relative inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl'>
        Border Beam
      </span>
    </button>
  )
}
export const borderBeamButtonCode = `export function BorderBeamButton() {
  return (
    <button className="relative inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
        Border Beam
      </span>
    </button>
  )
}`

export function PixelButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'relative border-2 border-black bg-white text-black shadow-[2px_2px_0_0_#000000] hover:shadow-[4px_4px_0_0_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[0_0_0_0_#000000] active:translate-x-0 active:translate-y-0 transition-all',
      )}
    >
      Pixel Art
    </button>
  )
}
export const pixelButtonCode = `export function PixelButton() {
  return (
    <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-black transition-all bg-white border-2 border-black rounded-md shadow-[2px_2px_0_0_#000000] hover:shadow-[4px_4px_0_0_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[0_0_0_0_#000000] active:translate-x-0 active:translate-y-0">
       Pixel Art
    </button>
  )
}`

export function HoldButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'group relative overflow-hidden bg-slate-100 text-slate-900 border active:scale-95 transition-all outline-none select-none',
      )}
    >
      <span className='absolute inset-0 bg-green-500 origin-left scale-x-0 transition-transform duration-[2000ms] ease-linear group-active:scale-x-100' />
      <span className='relative z-10 flex items-center gap-2'>
        <Fingerprint className='size-4' />
        Hold me
      </span>
    </button>
  )
}
export const holdButtonCode = `import { Fingerprint } from "lucide-react"

export function HoldButton() {
    return (
        <button className="relative inline-flex items-center justify-center h-10 px-4 py-2 overflow-hidden text-sm font-medium transition-all border rounded-md outline-none bg-slate-100 text-slate-900 active:scale-95 select-none group">
            <span className="absolute inset-0 bg-green-500 origin-left scale-x-0 transition-transform duration-[2000ms] ease-linear group-active:scale-x-100" />
            <span className="relative z-10 flex items-center gap-2">
                <Fingerprint className="size-4" />
                Hold me
            </span>
        </button>
    )
}`

export function SlideTextButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'group relative overflow-hidden bg-indigo-600 text-white',
      )}
    >
      <span className='absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full'>
        Download
      </span>
      <span className='absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0'>
        <Download className='size-4 mr-2' /> (24 MB)
      </span>
    </button>
  )
}
export const slideTextButtonCode = `import { Download } from "lucide-react"

export function SlideTextButton() {
    return (
        <button className="relative inline-flex items-center justify-center h-10 px-4 py-2 overflow-hidden text-sm font-medium text-white bg-indigo-600 rounded-md group">
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                Download
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <Download className="size-4 mr-2" /> (24 MB)
            </span>
        </button>
    )
}`

export function ArrowButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'group bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200',
      )}
    >
      <span>Get Started</span>
      <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' />
    </button>
  )
}
export const arrowButtonCode = `import { ArrowRight } from "lucide-react"

export function ArrowButton() {
  return (
    <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-colors rounded-md group bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
      <span>Get Started</span>
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </button>
  )
}`

export function ShineButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'group relative overflow-hidden bg-indigo-600 text-white hover:bg-indigo-700',
      )}
    >
      <div className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full' />
      <span className='relative'>Shine</span>
    </button>
  )
}
export const shineButtonCode = `export function ShineButton() {
  return (
    <button className="relative inline-flex items-center justify-center h-10 px-4 py-2 overflow-hidden text-sm font-medium text-white transition-colors bg-indigo-600 rounded-md group hover:bg-indigo-700">
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      <span className="relative">Shine</span>
    </button>
  )
}`

export function ScaleButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        commonStyles,
        'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30',
      )}
    >
      Scale Me
    </motion.button>
  )
}
export const scaleButtonCode = `import { motion } from "motion/react"

export function ScaleButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-500/30"
    >
      Scale Me
    </motion.button>
  )
}`

export function SparkleButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'group relative overflow-hidden rounded-full bg-black text-white hover:bg-zinc-800',
      )}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className='absolute -inset-1 opacity-0 group-hover:opacity-10'
      >
        <Sparkles className='h-full w-full opacity-50' />
      </motion.div>
      <Sparkles className='size-4 shrink-0 transition-transform group-hover:scale-125' />
      <span className='font-semibold'>Magic</span>
    </button>
  )
}
export const sparkleButtonCode = `import { Sparkles } from "lucide-react"
import { motion } from "motion/react"

export function SparkleButton() {
  return (
    <button className="relative inline-flex items-center justify-center h-10 px-4 py-2 overflow-hidden text-sm font-medium text-white transition-colors bg-black rounded-full group hover:bg-zinc-800">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-1 opacity-0 group-hover:opacity-10"
      >
        <Sparkles className="h-full w-full opacity-50" />
      </motion.div>
      <Sparkles className="size-4 shrink-0 transition-transform group-hover:scale-125" />
      <span className="font-semibold">Magic</span>
    </button>
  )
}`

export function GlitchTextButton() {
  const [text, setText] = useState('Glitch Me')

  const handleHover = () => {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    let iteration = 0

    const interval = setInterval(() => {
      setText((prev) =>
        prev
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return 'Glitch Me'[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join(''),
      )

      if (iteration >= 9) {
        clearInterval(interval)
        setText('Glitch Me')
      }

      iteration += 1 / 3
    }, 30)
  }

  return (
    <button
      onMouseEnter={handleHover}
      className={cn(
        commonStyles,
        'bg-slate-900 text-cyan-400 font-mono tracking-widest border border-cyan-500/50 hover:bg-slate-800 hover:text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]',
      )}
    >
      {text}
    </button>
  )
}
export const glitchTextButtonCode = `import { useState } from "react"

export function GlitchTextButton() {
  const [text, setText] = useState("Glitch Me")
  
  const handleHover = () => {
    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    let iteration = 0
    let interval: NodeJS.Timeout

    interval = setInterval(() => {
      setText(prev => 
        prev.split("").map((letter, index) => {
          if (index < iteration) {
            return "Glitch Me"[index]
          }
          return chars[Math.floor(Math.random() * chars.length)]
        }).join("")
      )
      
      if(iteration >= 9){ 
        clearInterval(interval)
        setText("Glitch Me")
      }
      
      iteration += 1 / 3
    }, 30)
  }

  return (
    <button 
      onMouseEnter={handleHover}
      className="inline-flex items-center justify-center h-10 px-4 py-2 font-mono text-sm font-medium tracking-widest transition-colors border bg-slate-900 text-cyan-400 border-cyan-500/50 hover:bg-slate-800 hover:text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
    >
      {text}
    </button>
  )
}`

export function IconExpandButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'group bg-purple-600 text-white hover:bg-purple-700 px-6',
      )}
    >
      <span>Expand</span>
      <div className='w-0 overflow-hidden transition-all duration-300 group-hover:w-4 group-hover:ml-2'>
        <ChevronRight className='size-4' />
      </div>
    </button>
  )
}
export const iconExpandButtonCode = `import { ChevronRight } from "lucide-react"

export function IconExpandButton() {
  return (
    <button className="inline-flex items-center justify-center h-10 px-6 py-2 text-sm font-medium text-white transition-colors bg-purple-600 rounded-md group hover:bg-purple-700">
      <span>Expand</span>
      <div className="w-0 overflow-hidden transition-all duration-300 group-hover:w-4 group-hover:ml-2">
         <ChevronRight className="size-4" />
      </div>
    </button>
  )
}`

export function SkewButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'bg-pink-500 text-white overflow-hidden group hover:bg-pink-600',
      )}
    >
      <span className='group-hover:-skew-x-12 block transition-transform duration-300'>
        Skewed Text
      </span>
    </button>
  )
}
export const skewButtonCode = `export function SkewButton() {
  return (
    <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-colors bg-pink-500 rounded-md overflow-hidden group hover:bg-pink-600">
       <span className="block transition-transform duration-300 group-hover:-skew-x-12">Skewed Text</span>
    </button>
  )
}`

export function UnlockButton() {
  const [locked, setLocked] = useState(true)

  return (
    <button
      onClick={() => setLocked(!locked)}
      className={cn(
        commonStyles,
        'bg-zinc-100 text-zinc-900 border hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 w-32',
      )}
    >
      <AnimatePresence mode='wait'>
        {locked ? (
          <motion.span
            key='locked'
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className='flex items-center gap-2'
          >
            <Lock className='size-4' /> Locked
          </motion.span>
        ) : (
          <motion.span
            key='unlocked'
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className='flex items-center gap-2 text-green-500'
          >
            <Unlock className='size-4' /> Unlocked
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
export const unlockButtonCode = `import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Lock, Unlock } from "lucide-react"

export function UnlockButton() {
  const [locked, setLocked] = useState(true)

  return (
     <button 
      onClick={() => setLocked(!locked)}
      className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors border rounded-md bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 w-32"
    >
        <AnimatePresence mode="wait">
            {locked ? (
                 <motion.span 
                    key="locked"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    className="flex items-center gap-2"
                 >
                    <Lock className="size-4" /> Locked
                 </motion.span>
            ) : (
                <motion.span 
                    key="unlocked"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    className="flex items-center gap-2 text-green-500"
                 >
                    <Unlock className="size-4" /> Unlocked
                 </motion.span>
            )}

        </AnimatePresence>
     </button>
  )
}`

export function RippleButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'relative overflow-hidden bg-blue-500 text-white hover:bg-blue-600 group',
      )}
    >
      <span className='relative z-10'>Ripple Effect</span>
      <span className='absolute inset-0 block rounded-full bg-white/30 scale-0 group-active:scale-[200%] transition-transform duration-700 origin-center' />
    </button>
  )
}
export const rippleButtonCode = `export function RippleButton() {
  return (
    <button className="relative inline-flex items-center justify-center h-10 px-4 py-2 overflow-hidden text-sm font-medium text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600 group">
      <span className="relative z-10">Ripple Effect</span>
      <span className="absolute inset-0 block rounded-full bg-white/30 scale-0 group-active:scale-[200%] transition-transform duration-700 origin-center" />
    </button>
  )
}`

// =================================================================================================
// 20. Like Button (Heart Pop)
// =================================================================================================
export function LikeButton() {
  const [liked, setLiked] = useState(false)

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={cn(
        commonStyles,
        'border shadow-sm bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800',
      )}
    >
      <motion.div
        animate={liked ? { scale: [1, 1.5, 1], rotate: [0, 15, -15, 0] } : {}}
      >
        <Heart
          className={cn(
            'size-4 transition-colors',
            liked ? 'fill-red-500 text-red-500' : 'text-slate-500',
          )}
        />
      </motion.div>
      <span
        className={cn(
          'transition-colors',
          liked ? 'text-red-500' : 'text-slate-500',
        )}
      >
        Like
      </span>
    </button>
  )
}
export const likeButtonCode = `import { useState } from "react"
import { motion } from "motion/react"
import { Heart } from "lucide-react"

export function LikeButton() {
  const [liked, setLiked] = useState(false)
  
  return (
    <button 
      onClick={() => setLiked(!liked)}
      className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors bg-white border rounded-md shadow-sm dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800"
    >
      <motion.div
        animate={liked ? { scale: [1, 1.5, 1], rotate: [0, 15, -15, 0] } : {}}
      >
        <Heart className={\`size-4 transition-colors \${liked ? "fill-red-500 text-red-500" : "text-slate-500"}\`} />
      </motion.div>
      <span className={\`transition-colors \${liked ? "text-red-500" : "text-slate-500"}\`}>
        Like
      </span>
    </button>
  )
}`

// =================================================================================================
// 21. Notification Bell Shake
// =================================================================================================
export function NotificationButton() {
  const [count, setCount] = useState(0)

  return (
    <button
      onClick={() => setCount((prev) => prev + 1)}
      className={cn(
        commonStyles,
        'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900',
      )}
    >
      <div className='relative'>
        <Bell
          className={cn(
            'size-4',
            count > 0 && 'animate-[swing_1s_ease-in-out_infinite]',
          )}
        />
        {count > 0 && (
          <span className='absolute -top-1 -right-1 flex size-3 items-center justify-center rounded-full bg-red-500 text-[8px] text-white'>
            {count}
          </span>
        )}
      </div>
      <span>Notifications</span>
      <style jsx>{`
        @keyframes swing {
          20% {
            transform: rotate(15deg);
          }
          40% {
            transform: rotate(-10deg);
          }
          60% {
            transform: rotate(5deg);
          }
          80% {
            transform: rotate(-5deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </button>
  )
}
export const notificationButtonCode = `import { useState } from "react"
import { Bell } from "lucide-react"

export function NotificationButton() {
  const [count, setCount] = useState(0)
  
  return (
    <button 
      onClick={() => setCount(prev => prev + 1)}
      className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-colors rounded-md bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900"
    >
      <div className="relative">
        <Bell className={\`size-4 \${count > 0 ? "animate-[swing_1s_ease-in-out_infinite]" : ""}\`} />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 flex size-3 items-center justify-center rounded-full bg-red-500 text-[8px] text-white">
            {count}
          </span>
        )}
      </div>
      <span>Notifications</span>
      <style jsx>{\`
        @keyframes swing {
          20% { transform: rotate(15deg); }
          40% { transform: rotate(-10deg); }
          60% { transform: rotate(5deg); }
          80% { transform: rotate(-5deg); }
          100% { transform: rotate(0deg); }
        }
      \`}</style>
    </button>
  )
}`

// =================================================================================================
// 22. Gooey Button (Complex SVG Filter)
// =================================================================================================
export function GooeyButton() {
  return (
    <>
      <button className='relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-pink-500 px-8 py-2 font-medium text-white transition-all duration-300 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2'>
        <span className='relative z-10'>Gooey</span>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[300%] bg-pink-500 rounded-[50%] animate-[gooey_3s_infinite_linear] blur-[10px] opacity-0 hover:opacity-100' />
      </button>
      {/* 
        Note: Real CSS gooey effect requires SVG filters usually placed in global CSS or a dedicated component.
        This is a simulated blur version for simplicity in a single file demo.
       */}
    </>
  )
}
export const gooeyButtonCode = `export function GooeyButton() {
  return (
     <button className="relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-pink-500 px-8 py-2 font-medium text-white transition-all duration-300 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2">
         <span className="relative z-10">Gooey</span>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[300%] bg-pink-500 rounded-[50%] animate-[spin_4s_infinite_linear] blur-[10px] opacity-0 hover:opacity-100" />
      </button>
  )
}`

// =================================================================================================
// 23. Expandable Floating Action (FAB)
// =================================================================================================
export function FAB() {
  const [open, setOpen] = useState(false)

  return (
    <div className='relative h-10 w-32 flex items-center justify-center'>
      <div
        className={cn(
          'absolute bottom-0 right-0 flex flex-col items-center gap-2 transition-all',
          open
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0 pointer-events-none',
        )}
      >
        <button className='size-8 rounded-full bg-blue-500 text-white shadow-md flex items-center justify-center hover:bg-blue-600'>
          <Share2 className='size-4' />
        </button>
        <button className='size-8 rounded-full bg-green-500 text-white shadow-md flex items-center justify-center hover:bg-green-600'>
          <Copy className='size-4' />
        </button>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className='z-10 flex size-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition-transform hover:scale-110 active:scale-95'
      >
        <Plus
          className={cn(
            'size-6 transition-transform',
            open ? 'rotate-45' : 'rotate-0',
          )}
        />
      </button>
    </div>
  )
}
export const fabCode = `import { useState } from "react"
import { Share2, Copy, Plus } from "lucide-react"

export function FAB() {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="relative flex items-center justify-center h-10 w-32"> 
      <div className={\`absolute bottom-12 flex flex-col items-center gap-2 transition-all \${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}\`}>
         <button className="flex items-center justify-center text-white bg-blue-500 rounded-full shadow-md size-8 hover:bg-blue-600"><Share2 className="size-4" /></button>
         <button className="flex items-center justify-center text-white bg-green-500 rounded-full shadow-md size-8 hover:bg-green-600"><Copy className="size-4" /></button>
      </div>
      
      <button 
        onClick={() => setOpen(!open)}
        className="z-10 flex items-center justify-center text-white transition-transform rounded-full shadow-lg size-10 bg-slate-900 hover:scale-110 active:scale-95"
      >
        <Plus className={\`size-6 transition-transform \${open ? "rotate-45" : "rotate-0"}\`} />
      </button>
    </div>
  )
}`

// =================================================================================================
// 24. Outline Fill
// =================================================================================================
export function OutlineFillButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'group relative overflow-hidden border-2 border-indigo-600 bg-transparent text-indigo-600 hover:text-white',
      )}
    >
      <span className='absolute inset-0 h-full w-full origin-bottom scale-y-0 bg-indigo-600 transition-transform duration-300 group-hover:scale-y-100' />
      <span className='relative z-10'>Fill Up</span>
    </button>
  )
}
export const outlineFillButtonCode = `export function OutlineFillButton() {
  return (
    <button className="relative inline-flex items-center justify-center h-10 px-4 py-2 overflow-hidden text-sm font-medium transition-colors bg-transparent border-2 rounded-md group border-indigo-600 text-indigo-600 hover:text-white">
      <span className="absolute inset-0 h-full w-full origin-bottom scale-y-0 bg-indigo-600 transition-transform duration-300 group-hover:scale-y-100" />
      <span className="relative z-10">Fill Up</span>
    </button>
  )
}`

// =================================================================================================
// 25. Gradient Rotate Border
// =================================================================================================
export function GradientRotateButton() {
  return (
    <button className='relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-2 text-sm font-medium text-white backdrop-blur-3xl'>
        Gradient Ring
      </span>
    </button>
  )
}
export const gradientRotateButtonCode = `export function GradientRotateButton() {
  return (
    <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-2 text-sm font-medium text-white backdrop-blur-3xl">
        Gradient Ring
      </span>
    </button>
  )
}`

// =================================================================================================
// 26. Galaxy Button
// =================================================================================================
export function GalaxyButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'relative overflow-hidden rounded-md bg-slate-950 px-8 text-white transition-colors hover:bg-slate-900',
      )}
    >
      <div className='absolute inset-0 z-0 flex bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-[spin_60s_linear_infinite]' />
      <span className='relative z-10 block rounded-md bg-neutral-950/50 px-4 py-1'>
        Galaxy
      </span>
    </button>
  )
}
export const galaxyButtonCode = `export function GalaxyButton() {
  return (
    <button className="relative inline-flex items-center justify-center h-10 px-8 text-sm font-medium text-white transition-colors overflow-hidden rounded-md bg-slate-950 hover:bg-slate-900">
      <div className="absolute inset-0 z-0 flex bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-[spin_60s_linear_infinite]" />
      <span className="relative z-10 block rounded-md bg-neutral-950/50 px-4 py-1">
        Galaxy
      </span>
    </button>
  )
}`

// =================================================================================================
// 27. Pulse Ring
// =================================================================================================
export function PulseButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'relative rounded-full bg-blue-500 text-white',
      )}
    >
      <span className='absolute -inset-1 z-[-1] animate-ping rounded-full bg-blue-500 opacity-75' />
      <span>Pulse Alert</span>
    </button>
  )
}
export const pulseButtonCode = `export function PulseButton() {
  return (
    <button className="relative inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full">
      <span className="absolute -inset-1 z-[-1] animate-ping rounded-full bg-blue-500 opacity-75" />
      <span>Pulse Alert</span>
    </button>
  )
}`

// =================================================================================================
// 28. Shake Error
// =================================================================================================
export function ShakeButton() {
  const [shaking, setShaking] = useState(false)

  const handleClick = () => {
    setShaking(true)
    setTimeout(() => setShaking(false), 500)
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        commonStyles,
        'bg-red-500 text-white hover:bg-red-600',
        shaking && 'animate-[shake_0.5s_ease-in-out]',
      )}
    >
      Error Shake
      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
      `}</style>
    </button>
  )
}
export const shakeButtonCode = `import { useState } from "react"

export function ShakeButton() {
  const [shaking, setShaking] = useState(false)

  const handleClick = () => {
    setShaking(true)
    setTimeout(() => setShaking(false), 500)
  }

  return (
    <button
      onClick={handleClick}
      className={\`inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-colors bg-red-500 rounded-md hover:bg-red-600 \${
        shaking ? "animate-[shake_0.5s_ease-in-out]" : ""
      }\`}
    >
      Error Shake
      <style jsx>{\`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      \`}</style>
    </button>
  )
}`

// =================================================================================================
// 29. Party Confetti
// =================================================================================================
export function PartyButton() {
  const [isPartying, setIsPartying] = useState(false)

  const handleClick = () => {
    setIsPartying(true)
    setTimeout(() => setIsPartying(false), 1000)
  }

  return (
    <div className='relative'>
      <button
        onClick={handleClick}
        className={cn(
          commonStyles,
          'bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-md active:scale-95 transition-transform',
        )}
      >
        <span className='flex items-center gap-2'>
          Click Me <Sparkles className='size-4' />
        </span>
      </button>
      <AnimatePresence>
        {isPartying && (
          <span className='absolute inset-0 -z-10 block pointer-events-none'>
            {[...Array(20)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: 0,
                  scale: 1,
                  x: (Math.random() - 0.5) * 100,
                  y: (Math.random() - 1) * 100,
                  rotate: Math.random() * 360,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='absolute top-1/2 left-1/2 h-2 w-2 rounded-full'
                style={{
                  backgroundColor: [
                    '#ff0000',
                    '#00ff00',
                    '#0000ff',
                    '#ffff00',
                    '#ff00ff',
                    '#00ffff',
                  ][Math.floor(Math.random() * 6)],
                }}
              />
            ))}
          </span>
        )}
      </AnimatePresence>
    </div>
  )
}
export const partyButtonCode = `import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Sparkles } from "lucide-react"

export function PartyButton() {
  const [isPartying, setIsPartying] = useState(false)

  const handleClick = () => {
    setIsPartying(true)
    setTimeout(() => setIsPartying(false), 1000)
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={handleClick}
        className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-transform shadow-md rounded-md bg-gradient-to-r from-pink-500 to-violet-500 active:scale-95"
      >
        <span className="flex items-center gap-2">
            Click Me <Sparkles className="size-4" />
        </span>
      </button>
      <AnimatePresence>
        {isPartying && (
          <span className="absolute inset-0 -z-10 block pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: 0,
                  scale: 1,
                  x: (Math.random() - 0.5) * 100,
                  y: (Math.random() - 1) * 100,
                  rotate: Math.random() * 360,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 h-2 w-2 rounded-full"
                style={{
                  backgroundColor: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"][Math.floor(Math.random() * 6)]
                }}
              />
            ))}
          </span>
        )}
      </AnimatePresence>
    </div>
  )
}`

// =================================================================================================
// 30. AI Genius Button
// =================================================================================================
export function AiButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'relative overflow-hidden rounded-full bg-slate-950 px-8 text-white transition-all hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-500/20',
      )}
    >
      <div className='absolute inset-0 z-0 opacity-20'>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: Math.random() * 100,
              y: Math.random() * 40,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className='absolute h-1 w-1 rounded-full bg-indigo-400'
            style={{
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>
      <span className='relative z-10 flex items-center gap-2 font-semibold text-indigo-200'>
        <Sparkles className='size-4 text-indigo-400' />
        Generate with AI
      </span>
    </button>
  )
}
export const aiButtonCode = `import { motion } from "motion/react"
import { Sparkles } from "lucide-react"

export function AiButton() {
  return (
    <button className="relative inline-flex items-center justify-center h-10 px-8 text-sm font-medium text-white transition-all overflow-hidden rounded-full bg-slate-950 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-500/20">
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: Math.random() * 100,
              y: Math.random() * 40,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute h-1 w-1 rounded-full bg-indigo-400"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>
      <span className="relative z-10 flex items-center gap-2 font-semibold text-indigo-200">
        <Sparkles className="size-4 text-indigo-400" />
        Generate with AI
      </span>
    </button>
  )
}`

// =================================================================================================
// 31. Brutalist 3D
// =================================================================================================
export function BrutalistButton() {
  return (
    <button
      className={cn(
        commonStyles,
        'border-2 border-slate-900 bg-yellow-400 text-slate-900 font-bold uppercase shadow-[4px_4px_0_0_#0f172a] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#0f172a] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
      )}
    >
      Brutalist
    </button>
  )
}
export const brutalistButtonCode = `export function BrutalistButton() {
  return (
    <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-bold text-slate-900 uppercase transition-all bg-yellow-400 border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#0f172a] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
      Brutalist
    </button>
  )
}`

// =================================================================================================
// 32. Glass Morphic
// =================================================================================================
export function GlassButton() {
  return (
    <div className='relative overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-[1px]'>
      <button className='relative inline-flex h-full w-full items-center justify-center rounded-lg bg-black/40 px-6 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-black/30'>
        Glass Link
      </button>
    </div>
  )
}
export const glassButtonCode = `export function GlassButton() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-[1px]">
       <button className="relative inline-flex h-full w-full items-center justify-center rounded-lg bg-black/40 px-6 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-black/30">
        Glass Link
      </button>
    </div>
  )
}`

// =================================================================================================
// 33. Magnetic Text
// =================================================================================================
export function MagneticTextButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.5
    const y = (clientY - (top + height / 2)) * 0.5
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        commonStyles,
        'relative overflow-hidden border border-slate-200 bg-white text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100',
      )}
    >
      <motion.span
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        className='inline-block'
      >
        Magnetic Text
      </motion.span>
    </button>
  )
}
export const magneticTextButtonCode = `import { useRef, useState } from "react"
import { motion } from "motion/react"

export function MagneticTextButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.5
    const y = (clientY - (top + height / 2)) * 0.5
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors bg-white border rounded-md border-slate-200 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
    >
      <motion.span
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="inline-block"
      >
        Magnetic Text
      </motion.span>
    </button>
  )
}`
