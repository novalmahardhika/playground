'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Heart,
  Share2,
  Bookmark,
  MoreVertical,
  Star,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Eye,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  ShoppingCart,
  Check,
  X,
  Sparkles,
  Zap,
  Award,
  Clock,
  Play,
  ChevronRight,
} from 'lucide-react'

import { cn } from '@/lib/utils'

// =================================================================================================
// CARD VARIANTS
// =================================================================================================

// 1. Basic Card
export function BasicCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900'>
      <div className='p-6'>
        <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
          Basic Card
        </h3>
        <p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>
          A simple card component with clean design and minimal styling.
        </p>
      </div>
    </div>
  )
}
export const basicCardCode = `export function BasicCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Basic Card
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          A simple card component with clean design and minimal styling.
        </p>
      </div>
    </div>
  )
}`

// 2. Hover Lift Card
export function HoverLiftCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900'>
      <div className='p-6'>
        <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
          Hover Lift Card
        </h3>
        <p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>
          This card lifts up when you hover over it with smooth animation.
        </p>
      </div>
    </div>
  )
}
export const hoverLiftCardCode = `export function HoverLiftCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Hover Lift Card
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          This card lifts up when you hover over it with smooth animation.
        </p>
      </div>
    </div>
  )
}`

// 3. Image Card
export function ImageCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900'>
      <div className='aspect-video w-full bg-gradient-to-br from-blue-500 to-purple-600' />
      <div className='p-6'>
        <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
          Image Card
        </h3>
        <p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>
          Card with an image header and content below.
        </p>
      </div>
    </div>
  )
}
export const imageCardCode = `export function ImageCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="aspect-video w-full bg-gradient-to-br from-blue-500 to-purple-600" />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Image Card
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Card with an image header and content below.
        </p>
      </div>
    </div>
  )
}`

// 4. Interactive Card with Actions
export function InteractiveCard() {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900'>
      <div className='aspect-video w-full bg-gradient-to-br from-pink-500 to-orange-500' />
      <div className='p-6'>
        <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
          Interactive Card
        </h3>
        <p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>
          Engage with this card using the action buttons below.
        </p>
        <div className='mt-4 flex items-center gap-2'>
          <button
            onClick={() => setLiked(!liked)}
            className='flex items-center gap-1 rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-slate-100 dark:hover:bg-slate-800'
          >
            <Heart
              className={cn(
                'size-4 transition-colors',
                liked ? 'fill-red-500 text-red-500' : 'text-slate-400',
              )}
            />
            <span className='text-slate-600 dark:text-slate-400'>
              {liked ? 'Liked' : 'Like'}
            </span>
          </button>
          <button
            onClick={() => setBookmarked(!bookmarked)}
            className='flex items-center gap-1 rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-slate-100 dark:hover:bg-slate-800'
          >
            <Bookmark
              className={cn(
                'size-4 transition-colors',
                bookmarked ? 'fill-blue-500 text-blue-500' : 'text-slate-400',
              )}
            />
          </button>
          <button className='flex items-center gap-1 rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-slate-100 dark:hover:bg-slate-800'>
            <Share2 className='size-4 text-slate-400' />
          </button>
        </div>
      </div>
    </div>
  )
}
export const interactiveCardCode = `import { useState } from "react"
import { Heart, Bookmark, Share2 } from "lucide-react"

export function InteractiveCard() {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="aspect-video w-full bg-gradient-to-br from-pink-500 to-orange-500" />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Interactive Card
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Engage with this card using the action buttons below.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => setLiked(!liked)}
            className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Heart
              className={\`size-4 transition-colors \${
                liked ? 'fill-red-500 text-red-500' : 'text-slate-400'
              }\`}
            />
            <span className="text-slate-600 dark:text-slate-400">
              {liked ? 'Liked' : 'Like'}
            </span>
          </button>
          <button
            onClick={() => setBookmarked(!bookmarked)}
            className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Bookmark
              className={\`size-4 transition-colors \${
                bookmarked ? 'fill-blue-500 text-blue-500' : 'text-slate-400'
              }\`}
            />
          </button>
          <button className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
            <Share2 className="size-4 text-slate-400" />
          </button>
        </div>
      </div>
    </div>
  )
}`

// 5. Glassmorphic Card
export function GlassmorphicCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-white/5'>
      <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
        Glassmorphic Card
      </h3>
      <p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>
        Modern glass effect with backdrop blur and transparency.
      </p>
    </div>
  )
}
export const glassmorphicCardCode = `export function GlassmorphicCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-white/5">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Glassmorphic Card
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Modern glass effect with backdrop blur and transparency.
      </p>
    </div>
  )
}`

// 6. Gradient Border Card
export function GradientBorderCard() {
  return (
    <div className='w-full max-w-sm rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-[2px]'>
      <div className='rounded-lg bg-white p-6 dark:bg-slate-900'>
        <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
          Gradient Border
        </h3>
        <p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>
          Card with an animated gradient border effect.
        </p>
      </div>
    </div>
  )
}
export const gradientBorderCardCode = `export function GradientBorderCard() {
  return (
    <div className="w-full max-w-sm rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-[2px]">
      <div className="rounded-lg bg-white p-6 dark:bg-slate-900">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Gradient Border
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Card with an animated gradient border effect.
        </p>
      </div>
    </div>
  )
}`

// 7. 3D Tilt Card
export function TiltCard() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
      className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900'
    >
      <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
        3D Tilt Card
      </h3>
      <p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>
        Move your mouse over this card to see the 3D tilt effect.
      </p>
    </motion.div>
  )
}
export const tiltCardCode = `import { useState, useRef } from "react"
import { motion } from "motion/react"

export function TiltCard() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900"
    >
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        3D Tilt Card
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Move your mouse over this card to see the 3D tilt effect.
      </p>
    </motion.div>
  )
}`

// 8. Spotlight Card
export function SpotlightCard() {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className='relative w-full max-w-sm overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-6'
    >
      <div
        className='pointer-events-none absolute -inset-px transition-opacity duration-300'
        style={{
          opacity,
          background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.15), transparent 40%)`,
        }}
      />
      <h3 className='relative z-10 text-lg font-semibold text-white'>
        Spotlight Card
      </h3>
      <p className='relative z-10 mt-2 text-sm text-slate-400'>
        Cursor-following spotlight effect for a premium feel.
      </p>
    </div>
  )
}
export const spotlightCardCode = `import { useState, useRef } from "react"

export function SpotlightCard() {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative w-full max-w-sm overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-6"
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: \`radial-gradient(200px circle at \${position.x}px \${position.y}px, rgba(255,255,255,.15), transparent 40%)\`,
        }}
      />
      <h3 className="relative z-10 text-lg font-semibold text-white">
        Spotlight Card
      </h3>
      <p className="relative z-10 mt-2 text-sm text-slate-400">
        Cursor-following spotlight effect for a premium feel.
      </p>
    </div>
  )
}`

// 9. Product Card
export function ProductCard() {
  const [inCart, setInCart] = useState(false)

  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900'>
      <div className='relative aspect-square w-full bg-gradient-to-br from-emerald-500 to-teal-600'>
        <div className='absolute right-2 top-2 rounded-full bg-white px-2 py-1 text-xs font-semibold text-emerald-600'>
          -20%
        </div>
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
          Premium Product
        </h3>
        <p className='mt-1 text-sm text-slate-600 dark:text-slate-400'>
          High quality product with amazing features
        </p>
        <div className='mt-2 flex items-center gap-1'>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className='size-4 fill-yellow-400 text-yellow-400'
            />
          ))}
          <span className='ml-1 text-sm text-slate-600 dark:text-slate-400'>
            (128)
          </span>
        </div>
        <div className='mt-4 flex items-center justify-between'>
          <div>
            <span className='text-sm text-slate-400 line-through'>$99.99</span>
            <span className='ml-2 text-xl font-bold text-slate-900 dark:text-slate-100'>
              $79.99
            </span>
          </div>
          <button
            onClick={() => setInCart(!inCart)}
            className={cn(
              'flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors',
              inCart
                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                : 'bg-blue-600 text-white hover:bg-blue-700',
            )}
          >
            {inCart ? (
              <>
                <Check className='size-4' /> Added
              </>
            ) : (
              <>
                <ShoppingCart className='size-4' /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
export const productCardCode = `import { useState } from "react"
import { Star, ShoppingCart, Check } from "lucide-react"

export function ProductCard() {
  const [inCart, setInCart] = useState(false)

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="relative aspect-square w-full bg-gradient-to-br from-emerald-500 to-teal-600">
        <div className="absolute right-2 top-2 rounded-full bg-white px-2 py-1 text-xs font-semibold text-emerald-600">
          -20%
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Premium Product
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          High quality product with amazing features
        </p>
        <div className="mt-2 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="size-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-1 text-sm text-slate-600 dark:text-slate-400">
            (128)
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-sm text-slate-400 line-through">$99.99</span>
            <span className="ml-2 text-xl font-bold text-slate-900 dark:text-slate-100">
              $79.99
            </span>
          </div>
          <button
            onClick={() => setInCart(!inCart)}
            className={\`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors \${
              inCart
                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }\`}
          >
            {inCart ? (
              <>
                <Check className="size-4" /> Added
              </>
            ) : (
              <>
                <ShoppingCart className="size-4" /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}`

// 10. Stats Card
export function StatsCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm text-slate-600 dark:text-slate-400'>
            Total Revenue
          </p>
          <h3 className='mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100'>
            $45,231.89
          </h3>
        </div>
        <div className='flex size-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900'>
          <TrendingUp className='size-6 text-green-600 dark:text-green-400' />
        </div>
      </div>
      <div className='mt-4 flex items-center gap-2 text-sm'>
        <span className='flex items-center gap-1 text-green-600 dark:text-green-400'>
          <TrendingUp className='size-4' />
          +20.1%
        </span>
        <span className='text-slate-600 dark:text-slate-400'>
          from last month
        </span>
      </div>
    </div>
  )
}
export const statsCardCode = `import { TrendingUp } from "lucide-react"

export function StatsCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Total Revenue
          </p>
          <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
            $45,231.89
          </h3>
        </div>
        <div className="flex size-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <TrendingUp className="size-6 text-green-600 dark:text-green-400" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm">
        <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
          <TrendingUp className="size-4" />
          +20.1%
        </span>
        <span className="text-slate-600 dark:text-slate-400">
          from last month
        </span>
      </div>
    </div>
  )
}`

// 11. Profile Card
export function ProfileCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900'>
      <div className='h-24 bg-gradient-to-r from-blue-500 to-purple-600' />
      <div className='relative px-6 pb-6'>
        <div className='-mt-12 mb-4 flex justify-between'>
          <div className='size-24 rounded-full border-4 border-white bg-gradient-to-br from-pink-500 to-orange-500 dark:border-slate-900' />
          <button className='mt-12 rounded-md border border-slate-300 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800'>
            Follow
          </button>
        </div>
        <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
          Sarah Johnson
        </h3>
        <p className='text-sm text-slate-600 dark:text-slate-400'>
          @sarahjohnson
        </p>
        <p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>
          UI/UX Designer passionate about creating beautiful experiences
        </p>
        <div className='mt-4 flex gap-4 text-sm'>
          <div>
            <span className='font-semibold text-slate-900 dark:text-slate-100'>
              2.5k
            </span>
            <span className='ml-1 text-slate-600 dark:text-slate-400'>
              Following
            </span>
          </div>
          <div>
            <span className='font-semibold text-slate-900 dark:text-slate-100'>
              12.8k
            </span>
            <span className='ml-1 text-slate-600 dark:text-slate-400'>
              Followers
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export const profileCardCode = `export function ProfileCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600" />
      <div className="relative px-6 pb-6">
        <div className="-mt-12 mb-4 flex justify-between">
          <div className="size-24 rounded-full border-4 border-white bg-gradient-to-br from-pink-500 to-orange-500 dark:border-slate-900" />
          <button className="mt-12 rounded-md border border-slate-300 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
            Follow
          </button>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Sarah Johnson
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          @sarahjohnson
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          UI/UX Designer passionate about creating beautiful experiences
        </p>
        <div className="mt-4 flex gap-4 text-sm">
          <div>
            <span className="font-semibold text-slate-900 dark:text-slate-100">2.5k</span>
            <span className="ml-1 text-slate-600 dark:text-slate-400">Following</span>
          </div>
          <div>
            <span className="font-semibold text-slate-900 dark:text-slate-100">12.8k</span>
            <span className="ml-1 text-slate-600 dark:text-slate-400">Followers</span>
          </div>
        </div>
      </div>
    </div>
  )
}`

// 12. Pricing Card
export function PricingCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border-2 border-blue-600 bg-white p-6 shadow-lg dark:bg-slate-900'>
      <div className='mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-900 dark:text-blue-300'>
        Popular
      </div>
      <h3 className='text-2xl font-bold text-slate-900 dark:text-slate-100'>
        Professional
      </h3>
      <div className='mt-4 flex items-baseline gap-1'>
        <span className='text-4xl font-bold text-slate-900 dark:text-slate-100'>
          $29
        </span>
        <span className='text-slate-600 dark:text-slate-400'>/month</span>
      </div>
      <ul className='mt-6 space-y-3'>
        {[
          'Unlimited projects',
          '24/7 support',
          'Analytics',
          'Custom domain',
        ].map((feature, i) => (
          <li key={i} className='flex items-center gap-2 text-sm'>
            <Check className='size-4 shrink-0 text-green-600' />
            <span className='text-slate-600 dark:text-slate-400'>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <button className='mt-6 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700'>
        Get Started
      </button>
    </div>
  )
}
export const pricingCardCode = `import { Check } from "lucide-react"

export function PricingCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border-2 border-blue-600 bg-white p-6 shadow-lg dark:bg-slate-900">
      <div className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-900 dark:text-blue-300">
        Popular
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
        Professional
      </h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">
          $29
        </span>
        <span className="text-slate-600 dark:text-slate-400">/month</span>
      </div>
      <ul className="mt-6 space-y-3">
        {['Unlimited projects', '24/7 support', 'Analytics', 'Custom domain'].map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <Check className="size-4 shrink-0 text-green-600" />
            <span className="text-slate-600 dark:text-slate-400">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
        Get Started
      </button>
    </div>
  )
}`

// 13. Blog Post Card
export function BlogPostCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900'>
      <div className='aspect-video w-full bg-gradient-to-br from-indigo-500 to-purple-600' />
      <div className='p-6'>
        <div className='flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400'>
          <Calendar className='size-3' />
          <span>Mar 15, 2024</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
        <h3 className='mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100'>
          Getting Started with React
        </h3>
        <p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>
          Learn the fundamentals of React and build your first component.
        </p>
        <div className='mt-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='size-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-500' />
            <span className='text-sm font-medium text-slate-900 dark:text-slate-100'>
              John Doe
            </span>
          </div>
          <button className='flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700'>
            Read more
            <ArrowRight className='size-4' />
          </button>
        </div>
      </div>
    </div>
  )
}
export const blogPostCardCode = `import { Calendar, ArrowRight } from "lucide-react"

export function BlogPostCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="aspect-video w-full bg-gradient-to-br from-indigo-500 to-purple-600" />
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
          <Calendar className="size-3" />
          <span>Mar 15, 2024</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          Getting Started with React
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Learn the fundamentals of React and build your first component.
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-500" />
            <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
              John Doe
            </span>
          </div>
          <button className="flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700">
            Read more
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}`

// 14. Testimonial Card
export function TestimonialCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
      <div className='flex gap-1'>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className='size-4 fill-yellow-400 text-yellow-400' />
        ))}
      </div>
      <p className='mt-4 text-sm italic text-slate-600 dark:text-slate-400'>
        This product has completely transformed how we work. The interface is
        intuitive and the features are exactly what we needed.
      </p>
      <div className='mt-6 flex items-center gap-3'>
        <div className='size-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600' />
        <div>
          <p className='text-sm font-semibold text-slate-900 dark:text-slate-100'>
            Emily Chen
          </p>
          <p className='text-xs text-slate-600 dark:text-slate-400'>
            Product Manager at TechCorp
          </p>
        </div>
      </div>
    </div>
  )
}
export const testimonialCardCode = `import { Star } from "lucide-react"

export function TestimonialCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="size-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="mt-4 text-sm italic text-slate-600 dark:text-slate-400">
        "This product has completely transformed how we work. The interface is
        intuitive and the features are exactly what we needed."
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="size-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Emily Chen
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Product Manager at TechCorp
          </p>
        </div>
      </div>
    </div>
  )
}`

// 15. Notification Card
export function NotificationCard() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className='w-full max-w-sm overflow-hidden rounded-lg border border-blue-200 bg-blue-50 p-4 shadow-sm dark:border-blue-900 dark:bg-blue-950'
    >
      <div className='flex gap-3'>
        <div className='flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-600'>
          <Sparkles className='size-4 text-white' />
        </div>
        <div className='flex-1'>
          <h4 className='text-sm font-semibold text-blue-900 dark:text-blue-100'>
            New Feature Available!
          </h4>
          <p className='mt-1 text-sm text-blue-700 dark:text-blue-300'>
            Check out our latest update with amazing new features.
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className='shrink-0 text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400'
        >
          <X className='size-4' />
        </button>
      </div>
    </motion.div>
  )
}
export const notificationCardCode = `import { useState } from "react"
import { motion } from "motion/react"
import { Sparkles, X } from "lucide-react"

export function NotificationCard() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="w-full max-w-sm overflow-hidden rounded-lg border border-blue-200 bg-blue-50 p-4 shadow-sm dark:border-blue-900 dark:bg-blue-950"
    >
      <div className="flex gap-3">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-600">
          <Sparkles className="size-4 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100">
            New Feature Available!
          </h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Check out our latest update with amazing new features.
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400"
        >
          <X className="size-4" />
        </button>
      </div>
    </motion.div>
  )
}`

// 16. Feature Card
export function FeatureCard() {
  return (
    <div className='group w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900'>
      <div className='flex size-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 transition-transform group-hover:scale-110'>
        <Zap className='size-6 text-white' />
      </div>
      <h3 className='mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100'>
        Lightning Fast
      </h3>
      <p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>
        Optimized for performance with blazing fast load times and smooth
        interactions.
      </p>
      <button className='mt-4 flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700'>
        Learn more
        <ExternalLink className='size-4' />
      </button>
    </div>
  )
}
export const featureCardCode = `import { Zap, ExternalLink } from "lucide-react"

export function FeatureCard() {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="flex size-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 transition-transform group-hover:scale-110">
        <Zap className="size-6 text-white" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
        Lightning Fast
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Optimized for performance with blazing fast load times and smooth
        interactions.
      </p>
      <button className="mt-4 flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700">
        Learn more
        <ExternalLink className="size-4" />
      </button>
    </div>
  )
}`

// 17. Event Card
export function EventCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900'>
      <div className='flex gap-4 p-4'>
        <div className='flex shrink-0 flex-col items-center justify-center rounded-lg bg-red-600 px-3 py-2 text-white'>
          <span className='text-2xl font-bold'>24</span>
          <span className='text-xs uppercase'>Mar</span>
        </div>
        <div className='flex-1'>
          <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
            Design Conference 2024
          </h3>
          <div className='mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400'>
            <div className='flex items-center gap-2'>
              <Clock className='size-4' />
              <span>2:00 PM - 5:00 PM</span>
            </div>
            <div className='flex items-center gap-2'>
              <MapPin className='size-4' />
              <span>Convention Center, NY</span>
            </div>
            <div className='flex items-center gap-2'>
              <Users className='size-4' />
              <span>250 attendees</span>
            </div>
          </div>
          <button className='mt-3 w-full rounded-md bg-red-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-700'>
            Register Now
          </button>
        </div>
      </div>
    </div>
  )
}
export const eventCardCode = `import { Clock, MapPin, Users } from "lucide-react"

export function EventCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex gap-4 p-4">
        <div className="flex shrink-0 flex-col items-center justify-center rounded-lg bg-red-600 px-3 py-2 text-white">
          <span className="text-2xl font-bold">24</span>
          <span className="text-xs uppercase">Mar</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Design Conference 2024
          </h3>
          <div className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="size-4" />
              <span>2:00 PM - 5:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <span>Convention Center, NY</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="size-4" />
              <span>250 attendees</span>
            </div>
          </div>
          <button className="mt-3 w-full rounded-md bg-red-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-700">
            Register Now
          </button>
        </div>
      </div>
    </div>
  )
}`

// 18. Team Member Card
export function TeamMemberCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900'>
      <div className='p-6 text-center'>
        <div className='mx-auto size-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600' />
        <h3 className='mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100'>
          Alex Morgan
        </h3>
        <p className='text-sm text-blue-600 dark:text-blue-400'>
          Lead Designer
        </p>
        <p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>
          Passionate about creating intuitive and beautiful user experiences
        </p>
        <div className='mt-4 flex justify-center gap-2'>
          {['twitter', 'linkedin', 'github'].map((social) => (
            <button
              key={social}
              className='flex size-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
            >
              <div className='size-4' />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
export const teamMemberCardCode = `export function TeamMemberCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="p-6 text-center">
        <div className="mx-auto size-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
        <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
          Alex Morgan
        </h3>
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Lead Designer
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Passionate about creating intuitive and beautiful user experiences
        </p>
        <div className="mt-4 flex justify-center gap-2">
          {['twitter', 'linkedin', 'github'].map((social) => (
            <button
              key={social}
              className="flex size-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
            >
              <div className="size-4" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}`

// 19. Flip Card
export function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className='group relative h-64 w-full max-w-sm cursor-pointer [perspective:1000px]'
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className='relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]'
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className='absolute inset-0 flex items-center justify-center rounded-lg border border-slate-200 bg-gradient-to-br from-purple-500 to-pink-600 p-6 [backface-visibility:hidden] dark:border-slate-800'>
          <div className='text-center text-white'>
            <h3 className='text-2xl font-bold'>Front Side</h3>
            <p className='mt-2'>Click to flip</p>
          </div>
        </div>
        {/* Back */}
        <div className='absolute inset-0 flex items-center justify-center rounded-lg border border-slate-200 bg-gradient-to-br from-blue-500 to-cyan-600 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] dark:border-slate-800'>
          <div className='text-center text-white'>
            <h3 className='text-2xl font-bold'>Back Side</h3>
            <p className='mt-2'>Click to flip back</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
export const flipCardCode = `import { useState } from "react"
import { motion } from "motion/react"

export function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="group relative h-64 w-full max-w-sm cursor-pointer [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute inset-0 flex items-center justify-center rounded-lg border border-slate-200 bg-gradient-to-br from-purple-500 to-pink-600 p-6 [backface-visibility:hidden] dark:border-slate-800">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold">Front Side</h3>
            <p className="mt-2">Click to flip</p>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 flex items-center justify-center rounded-lg border border-slate-200 bg-gradient-to-br from-blue-500 to-cyan-600 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] dark:border-slate-800">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold">Back Side</h3>
            <p className="mt-2">Click to flip back</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}`

// 20. Expandable Card
export function ExpandableCard() {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      layout
      className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900'
    >
      <div className='p-6'>
        <div className='flex items-start justify-between'>
          <div>
            <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
              Expandable Card
            </h3>
            <p className='mt-1 text-sm text-slate-600 dark:text-slate-400'>
              Click to expand for more details
            </p>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className='shrink-0 rounded-md p-1 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800'
          >
            <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
              <ArrowRight className='size-5 -rotate-90 text-slate-600 dark:text-slate-400' />
            </motion.div>
          </button>
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='overflow-hidden'
            >
              <p className='mt-4 text-sm text-slate-600 dark:text-slate-400'>
                Here is additional content that appears when the card is
                expanded. You can add more information, images, or any other
                content here.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
export const expandableCardCode = `import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight } from "lucide-react"

export function ExpandableCard() {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      layout
      className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Expandable Card
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Click to expand for more details
            </p>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="shrink-0 rounded-md p-1 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
              <ArrowRight className="size-5 -rotate-90 text-slate-600 dark:text-slate-400" />
            </motion.div>
          </button>
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                Here's additional content that appears when the card is
                expanded. You can add more information, images, or any other
                content here.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}`

// 21. Neumorphic Card
export function NeumorphicCard() {
  return (
    <div className='w-full max-w-sm rounded-2xl bg-slate-100 p-6 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] dark:bg-slate-800 dark:shadow-[8px_8px_16px_#0f172a,-8px_-8px_16px_#334155]'>
      <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
        Neumorphic Card
      </h3>
      <p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>
        Soft UI design with realistic shadow depth for a tactile feel.
      </p>
    </div>
  )
}
export const neumorphicCardCode = `export function NeumorphicCard() {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-slate-100 p-6 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] dark:bg-slate-800 dark:shadow-[8px_8px_16px_#0f172a,-8px_-8px_16px_#334155]">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Neumorphic Card
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Soft UI design with realistic shadow depth for a tactile feel.
      </p>
    </div>
  )
}`

// 22. Neon Glow Card
export function NeonGlowCard() {
  return (
    <div className='w-full max-w-sm rounded-lg border-2 border-cyan-500 bg-slate-950 p-6 shadow-[0_0_30px_rgba(6,182,212,0.3)]'>
      <h3 className='text-lg font-semibold text-cyan-400'>Neon Glow Card</h3>
      <p className='mt-2 text-sm text-cyan-100/70'>
        Futuristic cyberpunk-inspired design with neon glow effects.
      </p>
    </div>
  )
}
export const neonGlowCardCode = `export function NeonGlowCard() {
  return (
    <div className="w-full max-w-sm rounded-lg border-2 border-cyan-500 bg-slate-950 p-6 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
      <h3 className="text-lg font-semibold text-cyan-400">
        Neon Glow Card
      </h3>
      <p className="mt-2 text-sm text-cyan-100/70">
        Futuristic cyberpunk-inspired design with neon glow effects.
      </p>
    </div>
  )
}`

// 23. Skeleton Loading Card
export function SkeletonCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
      <div className='animate-pulse space-y-4'>
        <div className='h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700' />
        <div className='space-y-2'>
          <div className='h-3 rounded bg-slate-200 dark:bg-slate-700' />
          <div className='h-3 w-5/6 rounded bg-slate-200 dark:bg-slate-700' />
        </div>
        <div className='flex gap-2'>
          <div className='h-8 w-20 rounded bg-slate-200 dark:bg-slate-700' />
          <div className='h-8 w-20 rounded bg-slate-200 dark:bg-slate-700' />
        </div>
      </div>
    </div>
  )
}
export const skeletonCardCode = `export function SkeletonCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="animate-pulse space-y-4">
        <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
        <div className="space-y-2">
          <div className="h-3 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-3 w-5/6 rounded bg-slate-200 dark:bg-slate-700" />
        </div>
        <div className="flex gap-2">
          <div className="h-8 w-20 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-8 w-20 rounded bg-slate-200 dark:bg-slate-700" />
        </div>
      </div>
    </div>
  )
}`

// 24. Achievement Card
export function AchievementCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 p-6 shadow-lg'>
      <div className='flex items-start gap-4'>
        <div className='flex size-16 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm'>
          <Award className='size-8 text-white' />
        </div>
        <div className='flex-1 text-white'>
          <h3 className='text-lg font-bold'>Achievement Unlocked!</h3>
          <p className='mt-1 text-sm text-white/90'>
            You have completed 100 tasks
          </p>
          <div className='mt-3 flex items-center gap-2'>
            <div className='h-2 flex-1 overflow-hidden rounded-full bg-white/20'>
              <div className='h-full w-full bg-white' />
            </div>
            <span className='text-xs font-semibold'>100%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export const achievementCardCode = `import { Award } from "lucide-react"

export function AchievementCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 p-6 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          <Award className="size-8 text-white" />
        </div>
        <div className="flex-1 text-white">
          <h3 className="text-lg font-bold">Achievement Unlocked!</h3>
          <p className="mt-1 text-sm text-white/90">
            You've completed 100 tasks
          </p>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-full bg-white" />
            </div>
            <span className="text-xs font-semibold">100%</span>
          </div>
        </div>
      </div>
    </div>
  )
}`

// 25. Video Player Card
export function VideoPlayerCard() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900'>
      <div className='relative aspect-video w-full bg-gradient-to-br from-purple-600 to-blue-600'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <button
            onClick={() => setPlaying(!playing)}
            className='flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/30'
          >
            {playing ? (
              <div className='flex gap-1'>
                <div className='h-6 w-1.5 rounded-full bg-white' />
                <div className='h-6 w-1.5 rounded-full bg-white' />
              </div>
            ) : (
              <Play className='ml-1 size-8 text-white' />
            )}
          </button>
        </div>
        <div className='absolute bottom-2 right-2 rounded bg-black/50 px-2 py-1 text-xs text-white'>
          12:34
        </div>
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
          Amazing Tutorial Video
        </h3>
        <div className='mt-2 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400'>
          <div className='flex items-center gap-1'>
            <Eye className='size-4' />
            <span>1.2M views</span>
          </div>
          <div className='flex items-center gap-1'>
            <Calendar className='size-4' />
            <span>2 days ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export const videoPlayerCardCode = `import { useState } from "react"
import { Play, Eye, Calendar } from "lucide-react"

export function VideoPlayerCard() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="relative aspect-video w-full bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setPlaying(!playing)}
            className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/30"
          >
            {playing ? (
              <div className="flex gap-1">
                <div className="h-6 w-1.5 rounded-full bg-white" />
                <div className="h-6 w-1.5 rounded-full bg-white" />
              </div>
            ) : (
              <Play className="ml-1 size-8 text-white" />
            )}
          </button>
        </div>
        <div className="absolute bottom-2 right-2 rounded bg-black/50 px-2 py-1 text-xs text-white">
          12:34
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Amazing Tutorial Video
        </h3>
        <div className="mt-2 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1">
            <Eye className="size-4" />
            <span>1.2M views</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="size-4" />
            <span>2 days ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}`

// 26. Social Media Post Card
export function SocialPostCard() {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(342)

  const handleLike = () => {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
  }

  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900'>
      <div className='flex items-center gap-3 p-4'>
        <div className='size-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-500' />
        <div className='flex-1'>
          <h4 className='text-sm font-semibold text-slate-900 dark:text-slate-100'>
            Jane Cooper
          </h4>
          <p className='text-xs text-slate-600 dark:text-slate-400'>
            2 hours ago
          </p>
        </div>
        <button className='text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'>
          <MoreVertical className='size-5' />
        </button>
      </div>
      <div className='aspect-square w-full bg-gradient-to-br from-blue-500 to-purple-600' />
      <div className='p-4'>
        <div className='flex items-center gap-4'>
          <button
            onClick={handleLike}
            className='transition-transform active:scale-125'
          >
            <Heart
              className={cn(
                'size-6 transition-colors',
                liked
                  ? 'fill-red-500 text-red-500'
                  : 'text-slate-600 dark:text-slate-400',
              )}
            />
          </button>
          <button className='text-slate-600 dark:text-slate-400'>
            <MessageCircle className='size-6' />
          </button>
          <button className='text-slate-600 dark:text-slate-400'>
            <Share2 className='size-6' />
          </button>
          <button className='ml-auto text-slate-600 dark:text-slate-400'>
            <Bookmark className='size-6' />
          </button>
        </div>
        <p className='mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100'>
          {likes.toLocaleString()} likes
        </p>
        <p className='mt-1 text-sm text-slate-600 dark:text-slate-400'>
          <span className='font-semibold text-slate-900 dark:text-slate-100'>
            janecooper
          </span>{' '}
          Beautiful sunset at the beach! 🌅
        </p>
      </div>
    </div>
  )
}
export const socialPostCardCode = `import { useState } from "react"
import { Heart, MessageCircle, Share2, Bookmark, MoreVertical } from "lucide-react"

export function SocialPostCard() {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(342)

  const handleLike = () => {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
  }

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-3 p-4">
        <div className="size-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-500" />
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Jane Cooper
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400">2 hours ago</p>
        </div>
        <button className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
          <MoreVertical className="size-5" />
        </button>
      </div>
      <div className="aspect-square w-full bg-gradient-to-br from-blue-500 to-purple-600" />
      <div className="p-4">
        <div className="flex items-center gap-4">
          <button onClick={handleLike} className="transition-transform active:scale-125">
            <Heart className={\`size-6 transition-colors \${liked ? 'fill-red-500 text-red-500' : 'text-slate-600 dark:text-slate-400'}\`} />
          </button>
          <button className="text-slate-600 dark:text-slate-400">
            <MessageCircle className="size-6" />
          </button>
          <button className="text-slate-600 dark:text-slate-400">
            <Share2 className="size-6" />
          </button>
          <button className="ml-auto text-slate-600 dark:text-slate-400">
            <Bookmark className="size-6" />
          </button>
        </div>
        <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
          {likes.toLocaleString()} likes
        </p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-900 dark:text-slate-100">janecooper</span> Beautiful sunset at the beach! 🌅
        </p>
      </div>
    </div>
  )
}`

// 27. Music Player Card
export function MusicPlayerCard() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg bg-gradient-to-br from-violet-600 to-purple-700 p-6 shadow-lg'>
      <div className='flex gap-4'>
        <div className='size-20 shrink-0 rounded-lg bg-white/10 backdrop-blur-sm' />
        <div className='flex-1 text-white'>
          <h3 className='font-semibold'>Summer Vibes</h3>
          <p className='text-sm text-white/70'>The Weeknd</p>
          <div className='mt-2 flex items-center gap-2'>
            <div className='h-1 flex-1 overflow-hidden rounded-full bg-white/20'>
              <div className='h-full w-2/3 bg-white' />
            </div>
          </div>
          <div className='mt-1 flex justify-between text-xs text-white/60'>
            <span>2:34</span>
            <span>3:45</span>
          </div>
        </div>
      </div>
      <div className='mt-6 flex items-center justify-center gap-4'>
        <button className='text-white/70 transition-colors hover:text-white'>
          <ChevronRight className='size-6 rotate-180' />
        </button>
        <button
          onClick={() => setPlaying(!playing)}
          className='flex size-12 items-center justify-center rounded-full bg-white text-purple-600 transition-transform hover:scale-105'
        >
          {playing ? (
            <div className='flex gap-1'>
              <div className='h-4 w-1 rounded-full bg-purple-600' />
              <div className='h-4 w-1 rounded-full bg-purple-600' />
            </div>
          ) : (
            <Play className='ml-0.5 size-5' />
          )}
        </button>
        <button className='text-white/70 transition-colors hover:text-white'>
          <ChevronRight className='size-6' />
        </button>
      </div>
    </div>
  )
}
export const musicPlayerCardCode = `import { useState } from "react"
import { Play, ChevronRight } from "lucide-react"

export function MusicPlayerCard() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg bg-gradient-to-br from-violet-600 to-purple-700 p-6 shadow-lg">
      <div className="flex gap-4">
        <div className="size-20 shrink-0 rounded-lg bg-white/10 backdrop-blur-sm" />
        <div className="flex-1 text-white">
          <h3 className="font-semibold">Summer Vibes</h3>
          <p className="text-sm text-white/70">The Weeknd</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-2/3 bg-white" />
            </div>
          </div>
          <div className="mt-1 flex justify-between text-xs text-white/60">
            <span>2:34</span>
            <span>3:45</span>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-4">
        <button className="text-white/70 transition-colors hover:text-white">
          <ChevronRight className="size-6 rotate-180" />
        </button>
        <button
          onClick={() => setPlaying(!playing)}
          className="flex size-12 items-center justify-center rounded-full bg-white text-purple-600 transition-transform hover:scale-105"
        >
          {playing ? (
            <div className="flex gap-1">
              <div className="h-4 w-1 rounded-full bg-purple-600" />
              <div className="h-4 w-1 rounded-full bg-purple-600" />
            </div>
          ) : (
            <Play className="ml-0.5 size-5" />
          )}
        </button>
        <button className="text-white/70 transition-colors hover:text-white">
          <ChevronRight className="size-6" />
        </button>
      </div>
    </div>
  )
}`

// 28. Weather Card
export function WeatherCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 p-6 text-white shadow-lg'>
      <div className='flex items-start justify-between'>
        <div>
          <h3 className='text-lg font-semibold'>San Francisco</h3>
          <p className='text-sm text-white/70'>Monday, 15:00</p>
        </div>
        <div className='text-6xl'>☀️</div>
      </div>
      <div className='mt-4'>
        <div className='text-5xl font-bold'>72°</div>
        <p className='mt-1 text-white/90'>Partly Cloudy</p>
      </div>
      <div className='mt-6 flex justify-between rounded-lg bg-white/10 p-3 backdrop-blur-sm'>
        <div className='text-center'>
          <p className='text-xs text-white/60'>Wind</p>
          <p className='mt-1 font-semibold'>12 mph</p>
        </div>
        <div className='text-center'>
          <p className='text-xs text-white/60'>Humidity</p>
          <p className='mt-1 font-semibold'>65%</p>
        </div>
        <div className='text-center'>
          <p className='text-xs text-white/60'>Pressure</p>
          <p className='mt-1 font-semibold'>30.2 in</p>
        </div>
      </div>
    </div>
  )
}
export const weatherCardCode = `export function WeatherCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 p-6 text-white shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">San Francisco</h3>
          <p className="text-sm text-white/70">Monday, 15:00</p>
        </div>
        <div className="text-6xl">☀️</div>
      </div>
      <div className="mt-4">
        <div className="text-5xl font-bold">72°</div>
        <p className="mt-1 text-white/90">Partly Cloudy</p>
      </div>
      <div className="mt-6 flex justify-between rounded-lg bg-white/10 p-3 backdrop-blur-sm">
        <div className="text-center">
          <p className="text-xs text-white/60">Wind</p>
          <p className="mt-1 font-semibold">12 mph</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-white/60">Humidity</p>
          <p className="mt-1 font-semibold">65%</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-white/60">Pressure</p>
          <p className="mt-1 font-semibold">30.2 in</p>
        </div>
      </div>
    </div>
  )
}`

// 29. Course Card
export function CourseCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900'>
      <div className='relative aspect-video w-full bg-gradient-to-br from-emerald-500 to-teal-600'>
        <div className='absolute left-2 top-2 rounded-full bg-emerald-600 px-2 py-1 text-xs font-semibold text-white'>
          Bestseller
        </div>
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
          Complete Web Development Bootcamp
        </h3>
        <p className='mt-1 text-sm text-slate-600 dark:text-slate-400'>
          By Dr. Angela Yu
        </p>
        <div className='mt-2 flex items-center gap-1'>
          <span className='text-sm font-semibold text-slate-900 dark:text-slate-100'>
            4.8
          </span>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={cn(
                'size-4',
                star <= 4
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-slate-300 dark:text-slate-600',
              )}
            />
          ))}
          <span className='ml-1 text-sm text-slate-600 dark:text-slate-400'>
            (52,340)
          </span>
        </div>
        <div className='mt-4 flex items-center justify-between'>
          <span className='text-2xl font-bold text-slate-900 dark:text-slate-100'>
            $12.99
          </span>
          <button className='rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700'>
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  )
}
export const courseCardCode = `import { Star } from "lucide-react"

export function CourseCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="relative aspect-video w-full bg-gradient-to-br from-emerald-500 to-teal-600">
        <div className="absolute left-2 top-2 rounded-full bg-emerald-600 px-2 py-1 text-xs font-semibold text-white">
          Bestseller
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Complete Web Development Bootcamp
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          By Dr. Angela Yu
        </p>
        <div className="mt-2 flex items-center gap-1">
          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">4.8</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={\`size-4 \${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300 dark:text-slate-600'}\`}
            />
          ))}
          <span className="ml-1 text-sm text-slate-600 dark:text-slate-400">(52,340)</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">$12.99</span>
          <button className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  )
}`

// 30. Recipe Card
export function RecipeCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900'>
      <div className='relative aspect-video w-full bg-gradient-to-br from-orange-500 to-red-600'>
        <div className='absolute right-2 top-2 rounded-full bg-white p-2'>
          <Bookmark className='size-5 text-orange-600' />
        </div>
      </div>
      <div className='p-4'>
        <div className='flex items-center gap-2 text-xs text-orange-600'>
          <span className='rounded-full bg-orange-100 px-2 py-1 dark:bg-orange-900'>
            Easy
          </span>
          <span>•</span>
          <Clock className='size-3' />
          <span>30 mins</span>
        </div>
        <h3 className='mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100'>
          Classic Margherita Pizza
        </h3>
        <p className='mt-1 text-sm text-slate-600 dark:text-slate-400'>
          Authentic Italian pizza with fresh mozzarella and basil
        </p>
        <div className='mt-4 flex items-center justify-between'>
          <div className='flex items-center gap-1'>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className='size-4 fill-yellow-400 text-yellow-400'
              />
            ))}
          </div>
          <button className='flex items-center gap-1 text-sm font-medium text-orange-600 transition-colors hover:text-orange-700'>
            View Recipe
            <ArrowRight className='size-4' />
          </button>
        </div>
      </div>
    </div>
  )
}
export const recipeCardCode = `import { Bookmark, Clock, Star, ArrowRight } from "lucide-react"

export function RecipeCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="relative aspect-video w-full bg-gradient-to-br from-orange-500 to-red-600">
        <div className="absolute right-2 top-2 rounded-full bg-white p-2">
          <Bookmark className="size-5 text-orange-600" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-xs text-orange-600">
          <span className="rounded-full bg-orange-100 px-2 py-1 dark:bg-orange-900">Easy</span>
          <span>•</span>
          <Clock className="size-3" />
          <span>30 mins</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          Classic Margherita Pizza
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Authentic Italian pizza with fresh mozzarella and basil
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="size-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <button className="flex items-center gap-1 text-sm font-medium text-orange-600 transition-colors hover:text-orange-700">
            View Recipe
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}`

// 31. Job Listing Card
export function JobListingCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900'>
      <div className='flex items-start justify-between'>
        <div className='flex gap-3'>
          <div className='flex size-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-xl font-bold text-white'>
            G
          </div>
          <div>
            <h3 className='font-semibold text-slate-900 dark:text-slate-100'>
              Senior Frontend Developer
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Google Inc.
            </p>
          </div>
        </div>
        <Bookmark className='size-5 text-slate-400' />
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        <span className='rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300'>
          Remote
        </span>
        <span className='rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-900 dark:text-green-300'>
          Full-time
        </span>
        <span className='rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600 dark:bg-purple-900 dark:text-purple-300'>
          Senior Level
        </span>
      </div>
      <div className='mt-4 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400'>
        <div className='flex items-center gap-1'>
          <MapPin className='size-4' />
          <span>San Francisco, CA</span>
        </div>
        <div className='flex items-center gap-1'>
          <Calendar className='size-4' />
          <span>2 days ago</span>
        </div>
      </div>
      <div className='mt-4 flex items-center justify-between'>
        <span className='text-lg font-bold text-slate-900 dark:text-slate-100'>
          $120k - $180k
        </span>
        <button className='rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700'>
          Apply Now
        </button>
      </div>
    </div>
  )
}
export const jobListingCardCode = `import { Bookmark, MapPin, Calendar } from "lucide-react"

export function JobListingCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-xl font-bold text-white">
            G
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              Senior Frontend Developer
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Google Inc.</p>
          </div>
        </div>
        <Bookmark className="size-5 text-slate-400" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300">
          Remote
        </span>
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-900 dark:text-green-300">
          Full-time
        </span>
        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600 dark:bg-purple-900 dark:text-purple-300">
          Senior Level
        </span>
      </div>
      <div className="mt-4 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-1">
          <MapPin className="size-4" />
          <span>San Francisco, CA</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="size-4" />
          <span>2 days ago</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-bold text-slate-900 dark:text-slate-100">$120k - $180k</span>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
          Apply Now
        </button>
      </div>
    </div>
  )
}`

// 32. Booking Card
export function BookingCard() {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900'>
      <div className='relative aspect-video w-full bg-gradient-to-br from-cyan-500 to-blue-600'>
        <div className='absolute left-2 top-2 rounded bg-white px-2 py-1 text-xs font-semibold text-cyan-600'>
          Featured
        </div>
      </div>
      <div className='p-4'>
        <div className='flex items-start justify-between'>
          <div>
            <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
              Luxury Beach Resort
            </h3>
            <div className='mt-1 flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400'>
              <MapPin className='size-4' />
              <span>Maldives</span>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <Star className='size-4 fill-yellow-400 text-yellow-400' />
            <span className='text-sm font-semibold text-slate-900 dark:text-slate-100'>
              4.9
            </span>
          </div>
        </div>
        <p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>
          5-star resort with private beach access and spa facilities
        </p>
        <div className='mt-4 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800'>
          <div>
            <p className='text-xs text-slate-600 dark:text-slate-400'>From</p>
            <p className='text-2xl font-bold text-slate-900 dark:text-slate-100'>
              $299<span className='text-sm font-normal'>/night</span>
            </p>
          </div>
          <button className='rounded-md bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-700'>
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}
export const bookingCardCode = `import { MapPin, Star } from "lucide-react"

export function BookingCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="relative aspect-video w-full bg-gradient-to-br from-cyan-500 to-blue-600">
        <div className="absolute left-2 top-2 rounded bg-white px-2 py-1 text-xs font-semibold text-cyan-600">
          Featured
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Luxury Beach Resort
            </h3>
            <div className="mt-1 flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
              <MapPin className="size-4" />
              <span>Maldives</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Star className="size-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">4.9</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          5-star resort with private beach access and spa facilities
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800">
          <div>
            <p className="text-xs text-slate-600 dark:text-slate-400">From</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              $299<span className="text-sm font-normal">/night</span>
            </p>
          </div>
          <button className="rounded-md bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-700">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}`
