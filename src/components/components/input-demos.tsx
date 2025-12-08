'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'motion/react'
import {
  Eye,
  EyeOff,
  Search,
  Mail,
  Lock,
  Check,
  X,
  AlertCircle,
  Upload,
  CreditCard,
  Tag,
  Calendar,
  Star,
  DollarSign,
  Phone,
  ChevronDown,
  Percent,
  Minus,
  Plus,
  MapPin,
  Globe,
} from 'lucide-react'

import { cn } from '@/lib/utils'

const commonInputStyles =
  'w-full px-4 py-2 text-sm transition-all focus:outline-none'

// =================================================================================================
// INPUT VARIANTS WITH LABELS
// =================================================================================================

// 1. Standard Input with Floating Label
export function FloatingLabelInput() {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className='relative w-full'>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          commonInputStyles,
          'border-2 border-slate-300 rounded-md bg-white dark:bg-slate-900 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400',
        )}
      />
      <motion.label
        initial={false}
        animate={{
          top: value || isFocused ? '-0.75rem' : '0.625rem',
          fontSize: value || isFocused ? '0.75rem' : '0.875rem',
          color: isFocused ? '#3b82f6' : '#64748b',
        }}
        className='pointer-events-none absolute left-3 bg-white px-1 dark:bg-slate-900'
      >
        Email Address
      </motion.label>
    </div>
  )
}
export const floatingLabelInputCode = `import { useState } from "react"
import { motion } from "motion/react"

export function FloatingLabelInput() {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 py-2 text-sm transition-all border-2 border-slate-300 rounded-md bg-white dark:bg-slate-900 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none"
      />
      <motion.label
        initial={false}
        animate={{
          top: value || isFocused ? '-0.75rem' : '0.625rem',
          fontSize: value || isFocused ? '0.75rem' : '0.875rem',
          color: isFocused ? '#3b82f6' : '#64748b',
        }}
        className="pointer-events-none absolute left-3 bg-white px-1 dark:bg-slate-900"
      >
        Email Address
      </motion.label>
    </div>
  )
}`

// 2. Outlined Input with Top Label
export function OutlinedInput() {
  const [value, setValue] = useState('')

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Username
      </label>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Enter your username'
        className={cn(
          commonInputStyles,
          'border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-blue-400',
        )}
      />
    </div>
  )
}
export const outlinedInputCode = `import { useState } from "react"

export function OutlinedInput() {
  const [value, setValue] = useState('')

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Username
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your username"
        className="w-full px-4 py-2 text-sm transition-all border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-blue-400 focus:outline-none"
      />
    </div>
  )
}`

// 3. Filled Input with Label
export function FilledInput() {
  const [value, setValue] = useState('')

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Full Name
      </label>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='John Doe'
        className={cn(
          commonInputStyles,
          'border-0 border-b-2 border-slate-300 rounded-t-lg bg-slate-100 dark:bg-slate-800 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-slate-50 dark:focus:bg-slate-700',
        )}
      />
    </div>
  )
}
export const filledInputCode = `import { useState } from "react"

export function FilledInput() {
  const [value, setValue] = useState('')

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Full Name
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="John Doe"
        className="w-full px-4 py-2 text-sm transition-all border-0 border-b-2 border-slate-300 rounded-t-lg bg-slate-100 dark:bg-slate-800 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-slate-50 dark:focus:bg-slate-700 focus:outline-none"
      />
    </div>
  )
}`

// 4. Icon Input with Label
export function IconInput() {
  const [value, setValue] = useState('')

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Search
      </label>
      <div className='relative'>
        <Search className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400' />
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Search...'
          className={cn(
            commonInputStyles,
            'pl-10 border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:focus:ring-purple-400',
          )}
        />
      </div>
    </div>
  )
}
export const iconInputCode = `import { useState } from "react"
import { Search } from "lucide-react"

export function IconInput() {
  const [value, setValue] = useState('')

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Search
      </label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search..."
          className="w-full px-4 py-2 text-sm transition-all pl-10 border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:focus:ring-purple-400 focus:outline-none"
        />
      </div>
    </div>
  )
}`

// 5. Password Toggle Input
export function PasswordInput() {
  const [value, setValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Password
      </label>
      <div className='relative'>
        <Lock className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400' />
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Enter password'
          className={cn(
            commonInputStyles,
            'pl-10 pr-10 border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:focus:ring-indigo-400',
          )}
        />
        <button
          type='button'
          onClick={() => setShowPassword(!showPassword)}
          className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
        >
          {showPassword ? (
            <EyeOff className='size-4' />
          ) : (
            <Eye className='size-4' />
          )}
        </button>
      </div>
    </div>
  )
}
export const passwordInputCode = `import { useState } from "react"
import { Eye, EyeOff, Lock } from "lucide-react"

export function PasswordInput() {
  const [value, setValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Password
      </label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter password"
          className="w-full px-4 py-2 text-sm transition-all pl-10 pr-10 border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:focus:ring-indigo-400 focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
        >
          {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
    </div>
  )
}`

// 6. Validated Input with Success/Error States
export function ValidatedInput() {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)

  const isValid = value.includes('@') && value.length > 5
  const showValidation = touched && value.length > 0

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Email Validation
      </label>
      <div className='relative'>
        <Mail className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400' />
        <input
          type='email'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder='example@email.com'
          className={cn(
            commonInputStyles,
            'pl-10 pr-10 border-2 rounded-lg bg-white dark:bg-slate-900',
            showValidation && isValid
              ? 'border-green-500 focus:ring-2 focus:ring-green-500'
              : showValidation && !isValid
                ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                : 'border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500',
          )}
        />
        {showValidation && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className='absolute right-3 top-1/2 -translate-y-1/2'
          >
            {isValid ? (
              <Check className='size-4 text-green-500' />
            ) : (
              <X className='size-4 text-red-500' />
            )}
          </motion.div>
        )}
      </div>
      {showValidation && !isValid && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-xs text-red-500'
        >
          Please enter a valid email address
        </motion.p>
      )}
    </div>
  )
}
export const validatedInputCode = `import { useState } from "react"
import { motion } from "motion/react"
import { Check, Mail, X } from "lucide-react"

export function ValidatedInput() {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)

  const isValid = value.includes('@') && value.length > 5
  const showValidation = touched && value.length > 0

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Email Validation
      </label>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
        <input
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="example@email.com"
          className={\`w-full px-4 py-2 text-sm transition-all pl-10 pr-10 border-2 rounded-lg bg-white dark:bg-slate-900 focus:outline-none \${
            showValidation && isValid
              ? 'border-green-500 focus:ring-2 focus:ring-green-500'
              : showValidation && !isValid
                ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                : 'border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500'
          }\`}
        />
        {showValidation && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {isValid ? (
              <Check className="size-4 text-green-500" />
            ) : (
              <X className="size-4 text-red-500" />
            )}
          </motion.div>
        )}
      </div>
      {showValidation && !isValid && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-500"
        >
          Please enter a valid email address
        </motion.p>
      )}
    </div>
  )
}`

// 7. Gradient Border Input
export function GradientBorderInput() {
  const [value, setValue] = useState('')
  const [_isFocused, setIsFocused] = useState(false)

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Premium Input
      </label>
      <div className='relative rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-[2px]'>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder='Enter text'
          className={cn(
            commonInputStyles,
            'rounded-lg bg-white dark:bg-slate-900',
          )}
        />
      </div>
    </div>
  )
}
export const gradientBorderInputCode = `import { useState } from "react"

export function GradientBorderInput() {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Premium Input
      </label>
      <div className="relative rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-[2px]">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Enter text"
          className="w-full px-4 py-2 text-sm transition-all rounded-lg bg-white dark:bg-slate-900 focus:outline-none"
        />
      </div>
    </div>
  )
}`

// 8. Neumorphic Input
export function NeumorphicInput() {
  const [value, setValue] = useState('')

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Soft UI Input
      </label>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Type here...'
        className={cn(
          commonInputStyles,
          'rounded-xl border-0 bg-slate-100 shadow-[inset_4px_4px_10px_#d1d5db,inset_-4px_-4px_10px_#ffffff] focus:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] dark:bg-slate-800 dark:shadow-[inset_4px_4px_10px_#0f172a,inset_-4px_-4px_10px_#334155] dark:focus:shadow-[inset_6px_6px_12px_#0f172a,inset_-6px_-6px_12px_#334155]',
        )}
      />
    </div>
  )
}
export const neumorphicInputCode = `import { useState } from "react"

export function NeumorphicInput() {
  const [value, setValue] = useState('')

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Soft UI Input
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type here..."
        className="w-full px-4 py-2 text-sm transition-all rounded-xl border-0 bg-slate-100 shadow-[inset_4px_4px_10px_#d1d5db,inset_-4px_-4px_10px_#ffffff] focus:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] dark:bg-slate-800 dark:shadow-[inset_4px_4px_10px_#0f172a,inset_-4px_-4px_10px_#334155] dark:focus:shadow-[inset_6px_6px_12px_#0f172a,inset_-6px_-6px_12px_#334155] focus:outline-none"
      />
    </div>
  )
}`

// 9. Underline Input with Animated Label
export function UnderlineInput() {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className='relative w-full pt-4'>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          commonInputStyles,
          'border-0 border-b-2 border-slate-300 bg-transparent pb-2 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400',
        )}
      />
      <motion.label
        initial={false}
        animate={{
          top: value || isFocused ? '0' : '1.25rem',
          fontSize: value || isFocused ? '0.75rem' : '0.875rem',
          color: isFocused ? '#3b82f6' : '#64748b',
        }}
        className='pointer-events-none absolute left-0'
      >
        Phone Number
      </motion.label>
      <motion.div
        initial={false}
        animate={{
          scaleX: isFocused ? 1 : 0,
        }}
        className='absolute bottom-0 left-0 h-0.5 w-full origin-left bg-blue-500'
      />
    </div>
  )
}
export const underlineInputCode = `import { useState } from "react"
import { motion } from "motion/react"

export function UnderlineInput() {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative w-full pt-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 py-2 text-sm transition-all border-0 border-b-2 border-slate-300 bg-transparent pb-2 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none"
      />
      <motion.label
        initial={false}
        animate={{
          top: value || isFocused ? '0' : '1.25rem',
          fontSize: value || isFocused ? '0.75rem' : '0.875rem',
          color: isFocused ? '#3b82f6' : '#64748b',
        }}
        className="pointer-events-none absolute left-0"
      >
        Phone Number
      </motion.label>
      <motion.div
        initial={false}
        animate={{
          scaleX: isFocused ? 1 : 0,
        }}
        className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-blue-500"
      />
    </div>
  )
}`

// 10. Glow Input
export function GlowInput() {
  const [value, setValue] = useState('')
  const [_isFocused, setIsFocused] = useState(false)

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Neon Input
      </label>
      <div className='relative'>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder='Enter text'
          className={cn(
            commonInputStyles,
            'rounded-lg border-2 border-purple-500 bg-slate-950 text-white transition-shadow focus:shadow-[0_0_20px_rgba(168,85,247,0.5)]',
          )}
        />
      </div>
    </div>
  )
}
export const glowInputCode = `import { useState } from "react"

export function GlowInput() {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Neon Input
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Enter text"
          className="w-full px-4 py-2 text-sm transition-all rounded-lg border-2 border-purple-500 bg-slate-950 text-white transition-shadow focus:shadow-[0_0_20px_rgba(168,85,247,0.5)] focus:outline-none"
        />
      </div>
    </div>
  )
}`

// 11. Character Counter Input
export function CharacterCounterInput() {
  const [value, setValue] = useState('')
  const maxLength = 50

  return (
    <div className='w-full space-y-1.5'>
      <div className='flex items-center justify-between'>
        <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
          Bio
        </label>
        <span
          className={cn(
            'text-xs',
            value.length > maxLength
              ? 'text-red-500'
              : value.length > maxLength * 0.8
                ? 'text-orange-500'
                : 'text-slate-400',
          )}
        >
          {value.length}/{maxLength}
        </span>
      </div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        placeholder='Tell us about yourself...'
        rows={3}
        className={cn(
          commonInputStyles,
          'resize-none border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-blue-400',
        )}
      />
    </div>
  )
}
export const characterCounterInputCode = `import { useState } from "react"

export function CharacterCounterInput() {
  const [value, setValue] = useState('')
  const maxLength = 50

  return (
    <div className="w-full space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Bio
        </label>
        <span
          className={\`text-xs \${
            value.length > maxLength
              ? 'text-red-500'
              : value.length > maxLength * 0.8
                ? 'text-orange-500'
                : 'text-slate-400'
          }\`}
        >
          {value.length}/{maxLength}
        </span>
      </div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        placeholder="Tell us about yourself..."
        rows={3}
        className="w-full px-4 py-2 text-sm transition-all resize-none border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-blue-400 focus:outline-none"
      />
    </div>
  )
}`

// 12. Helper Text Input
export function HelperTextInput() {
  const [value, setValue] = useState('')

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        URL Slug
      </label>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='my-awesome-post'
        className={cn(
          commonInputStyles,
          'border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent',
        )}
      />
      <p className='flex items-start gap-1.5 text-xs text-slate-500'>
        <AlertCircle className='mt-0.5 size-3 shrink-0' />
        <span>Use lowercase letters, numbers, and hyphens only</span>
      </p>
    </div>
  )
}
export const helperTextInputCode = `import { useState } from "react"
import { AlertCircle } from "lucide-react"

export function HelperTextInput() {
  const [value, setValue] = useState('')

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        URL Slug
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="my-awesome-post"
        className="w-full px-4 py-2 text-sm transition-all border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
      />
      <p className="flex items-start gap-1.5 text-xs text-slate-500">
        <AlertCircle className="mt-0.5 size-3 shrink-0" />
        <span>Use lowercase letters, numbers, and hyphens only</span>
      </p>
    </div>
  )
}`

// 13. Glassmorphic Input
export function GlassmorphicInput() {
  const [value, setValue] = useState('')

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Glassmorphic Input
      </label>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Enter text'
        className={cn(
          commonInputStyles,
          'rounded-xl border border-white/20 bg-white/10 backdrop-blur-md dark:border-white/10 dark:bg-white/5 focus:border-white/40 focus:bg-white/20 dark:focus:border-white/20 dark:focus:bg-white/10',
        )}
      />
    </div>
  )
}
export const glassmorphicInputCode = `import { useState } from "react"

export function GlassmorphicInput() {
  const [value, setValue] = useState('')

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Glassmorphic Input
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text"
        className="w-full px-4 py-2 text-sm transition-all rounded-xl border border-white/20 bg-white/10 backdrop-blur-md dark:border-white/10 dark:bg-white/5 focus:border-white/40 focus:bg-white/20 dark:focus:border-white/20 dark:focus:bg-white/10 focus:outline-none"
      />
    </div>
  )
}`

// 14. OTP Input
export function OTPInput() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Enter OTP
      </label>
      <div className='flex gap-2'>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el
            }}
            type='text'
            inputMode='numeric'
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className={cn(
              'h-12 w-12 text-center text-lg font-semibold transition-all focus:outline-none',
              'rounded-lg border-2 border-slate-300 bg-white dark:bg-slate-900 dark:border-slate-700',
              'focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400',
            )}
          />
        ))}
      </div>
    </div>
  )
}
export const otpInputCode = `import { useState, useRef } from "react"

export function OTPInput() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Enter OTP
      </label>
      <div className="flex gap-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="h-12 w-12 text-center text-lg font-semibold transition-all rounded-lg border-2 border-slate-300 bg-white dark:bg-slate-900 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 focus:outline-none"
          />
        ))}
      </div>
    </div>
  )
}`

// 15. Tag/Chip Input
export function TagInput() {
  const [tags, setTags] = useState<string[]>(['React', 'TypeScript'])
  const [input, setInput] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault()
      setTags([...tags, input.trim()])
      setInput('')
    } else if (e.key === 'Backspace' && !input && tags.length > 0) {
      setTags(tags.slice(0, -1))
    }
  }

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index))
  }

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Tags
      </label>
      <div className='flex min-h-[42px] flex-wrap items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900'>
        {tags.map((tag, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className='flex items-center gap-1 rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300'
          >
            <Tag className='size-3' />
            {tag}
            <button
              onClick={() => removeTag(index)}
              className='ml-1 hover:text-blue-900 dark:hover:text-blue-100'
            >
              <X className='size-3' />
            </button>
          </motion.span>
        ))}
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Add tag...'
          className='min-w-[120px] flex-1 border-0 bg-transparent text-sm focus:outline-none'
        />
      </div>
    </div>
  )
}
export const tagInputCode = `import { useState } from "react"
import { motion } from "motion/react"
import { Tag, X } from "lucide-react"

export function TagInput() {
  const [tags, setTags] = useState<string[]>(['React', 'TypeScript'])
  const [input, setInput] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault()
      setTags([...tags, input.trim()])
      setInput('')
    } else if (e.key === 'Backspace' && !input && tags.length > 0) {
      setTags(tags.slice(0, -1))
    }
  }

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index))
  }

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Tags
      </label>
      <div className="flex min-h-[42px] flex-wrap items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
        {tags.map((tag, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="flex items-center gap-1 rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300"
          >
            <Tag className="size-3" />
            {tag}
            <button
              onClick={() => removeTag(index)}
              className="ml-1 hover:text-blue-900 dark:hover:text-blue-100"
            >
              <X className="size-3" />
            </button>
          </motion.span>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add tag..."
          className="min-w-[120px] flex-1 border-0 bg-transparent text-sm focus:outline-none"
        />
      </div>
    </div>
  )
}`

// 16. Credit Card Input
export function CreditCardInput() {
  const [cardNumber, setCardNumber] = useState('')

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ''
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(' ')
    } else {
      return value
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value)
    if (formatted.replace(/\s/g, '').length <= 16) {
      setCardNumber(formatted)
    }
  }

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Card Number
      </label>
      <div className='relative'>
        <CreditCard className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400' />
        <input
          type='text'
          value={cardNumber}
          onChange={handleChange}
          placeholder='1234 5678 9012 3456'
          className={cn(
            commonInputStyles,
            'pl-10 font-mono tracking-wider border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-blue-400',
          )}
        />
      </div>
    </div>
  )
}
export const creditCardInputCode = `import { useState } from "react"
import { CreditCard } from "lucide-react"

export function CreditCardInput() {
  const [cardNumber, setCardNumber] = useState('')

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\\d{4,16}/g)
    const match = (matches && matches[0]) || ''
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(' ')
    } else {
      return value
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value)
    if (formatted.replace(/\\s/g, '').length <= 16) {
      setCardNumber(formatted)
    }
  }

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Card Number
      </label>
      <div className="relative">
        <CreditCard className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={cardNumber}
          onChange={handleChange}
          placeholder="1234 5678 9012 3456"
          className="w-full px-4 py-2 text-sm transition-all pl-10 font-mono tracking-wider border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-blue-400 focus:outline-none"
        />
      </div>
    </div>
  )
}`

// 17. File Upload Input
export function FileUploadInput() {
  const [fileName, setFileName] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Upload File
      </label>
      <div
        onClick={() => fileInputRef.current?.click()}
        className='group relative flex cursor-pointer items-center gap-3 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-4 transition-all hover:border-blue-500 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-400 dark:hover:bg-slate-800'
      >
        <Upload className='size-5 text-slate-400 transition-colors group-hover:text-blue-500' />
        <div className='flex-1'>
          <p className='text-sm font-medium text-slate-700 dark:text-slate-300'>
            {fileName || 'Choose a file or drag it here'}
          </p>
          <p className='text-xs text-slate-500'>PDF, PNG, JPG up to 10MB</p>
        </div>
        <input
          ref={fileInputRef}
          type='file'
          onChange={handleFileChange}
          className='hidden'
        />
      </div>
    </div>
  )
}
export const fileUploadInputCode = `import { useState, useRef } from "react"
import { Upload } from "lucide-react"

export function FileUploadInput() {
  const [fileName, setFileName] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Upload File
      </label>
      <div
        onClick={() => fileInputRef.current?.click()}
        className="group relative flex cursor-pointer items-center gap-3 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-4 transition-all hover:border-blue-500 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-400 dark:hover:bg-slate-800"
      >
        <Upload className="size-5 text-slate-400 transition-colors group-hover:text-blue-500" />
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {fileName || 'Choose a file or drag it here'}
          </p>
          <p className="text-xs text-slate-500">PDF, PNG, JPG up to 10MB</p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  )
}`

// 18. Animated Border Input
export function AnimatedBorderInput() {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Animated Border
      </label>
      <div className='relative rounded-lg p-[2px]'>
        <div
          className={cn(
            'absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300',
            isFocused && 'opacity-100',
          )}
        />
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder='Enter text'
          className={cn(
            commonInputStyles,
            'relative rounded-lg border border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900',
          )}
        />
      </div>
    </div>
  )
}
export const animatedBorderInputCode = `import { useState } from "react"

export function AnimatedBorderInput() {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Animated Border
      </label>
      <div className="relative rounded-lg p-[2px]">
        <div
          className={\`absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 \${
            isFocused && 'opacity-100'
          }\`}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Enter text"
          className="w-full px-4 py-2 text-sm transition-all relative rounded-lg border border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900 focus:outline-none"
        />
      </div>
    </div>
  )
}`

// 19. Spotlight Input
export function SpotlightInput() {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [value, setValue] = useState('')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Spotlight Effect
      </label>
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        className='relative overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-[2px]'
      >
        <div
          className='pointer-events-none absolute -inset-px transition-opacity duration-300'
          style={{
            opacity,
            background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.15), transparent 40%)`,
          }}
        />
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Enter text'
          className={cn(
            commonInputStyles,
            'relative z-10 rounded-lg bg-slate-950 text-white',
          )}
        />
      </div>
    </div>
  )
}
export const spotlightInputCode = `import { useState, useRef } from "react"

export function SpotlightInput() {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [value, setValue] = useState('')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Spotlight Effect
      </label>
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        className="relative overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-[2px]"
      >
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity,
            background: \`radial-gradient(200px circle at \${position.x}px \${position.y}px, rgba(255,255,255,.15), transparent 40%)\`,
          }}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter text"
          className="w-full px-4 py-2 text-sm transition-all relative z-10 rounded-lg bg-slate-950 text-white focus:outline-none"
        />
      </div>
    </div>
  )
}`

// 20. 3D Push Input
export function Push3DInput() {
  const [value, setValue] = useState('')

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        3D Push Effect
      </label>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Enter text'
        className={cn(
          commonInputStyles,
          'rounded-lg border-2 border-blue-600 bg-white shadow-[0_4px_0_rgb(37,99,235)] transition-all focus:translate-y-[2px] focus:shadow-[0_2px_0_rgb(37,99,235)] active:translate-y-[4px] active:shadow-none dark:bg-slate-900',
        )}
      />
    </div>
  )
}
export const push3DInputCode = `import { useState } from "react"

export function Push3DInput() {
  const [value, setValue] = useState('')

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        3D Push Effect
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text"
        className="w-full px-4 py-2 text-sm transition-all rounded-lg border-2 border-blue-600 bg-white shadow-[0_4px_0_rgb(37,99,235)] transition-all focus:translate-y-[2px] focus:shadow-[0_2px_0_rgb(37,99,235)] active:translate-y-[4px] active:shadow-none dark:bg-slate-900 focus:outline-none"
      />
    </div>
  )
}`

// 21. Cyberpunk Input
export function CyberpunkInput() {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Cyberpunk Style
      </label>
      <div className='relative'>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder='ENTER_TEXT'
          className={cn(
            commonInputStyles,
            'font-mono uppercase tracking-wider border-2 border-yellow-400 bg-black text-yellow-400 placeholder:text-yellow-400/50 focus:shadow-[0_0_20px_rgba(250,204,21,0.5)]',
          )}
        />
        <motion.div
          animate={{
            opacity: isFocused ? [0.5, 1, 0.5] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='absolute -right-1 top-1/2 h-4 w-1 -translate-y-1/2 bg-yellow-400'
        />
      </div>
    </div>
  )
}
export const cyberpunkInputCode = `import { useState } from "react"
import { motion } from "motion/react"

export function CyberpunkInput() {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Cyberpunk Style
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="ENTER_TEXT"
          className="w-full px-4 py-2 text-sm transition-all font-mono uppercase tracking-wider border-2 border-yellow-400 bg-black text-yellow-400 placeholder:text-yellow-400/50 focus:shadow-[0_0_20px_rgba(250,204,21,0.5)] focus:outline-none"
        />
        <motion.div
          animate={{
            opacity: isFocused ? [0.5, 1, 0.5] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -right-1 top-1/2 h-4 w-1 -translate-y-1/2 bg-yellow-400"
        />
      </div>
    </div>
  )
}`

// 22. Rating Input
export function RatingInput() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Rate Your Experience
      </label>
      <div className='flex gap-1'>
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.button
            key={star}
            type='button'
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className='focus:outline-none'
          >
            <Star
              className={cn(
                'size-8 transition-colors',
                star <= (hover || rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-slate-300 dark:text-slate-600',
              )}
            />
          </motion.button>
        ))}
      </div>
      {rating > 0 && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-sm text-slate-600 dark:text-slate-400'
        >
          You rated {rating} star{rating !== 1 ? 's' : ''}
        </motion.p>
      )}
    </div>
  )
}
export const ratingInputCode = `import { useState } from "react"
import { motion } from "motion/react"
import { Star } from "lucide-react"

export function RatingInput() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Rate Your Experience
      </label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="focus:outline-none"
          >
            <Star
              className={\`size-8 transition-colors \${
                star <= (hover || rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-slate-300 dark:text-slate-600'
              }\`}
            />
          </motion.button>
        ))}
      </div>
      {rating > 0 && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-slate-600 dark:text-slate-400"
        >
          You rated {rating} star{rating !== 1 ? 's' : ''}
        </motion.p>
      )}
    </div>
  )
}`

// 23. Phone Number Input with Country Code
export function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [countryCode, setCountryCode] = useState('+1')

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 3) return numbers
    if (numbers.length <= 6)
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`
  }

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Phone Number
      </label>
      <div className='relative flex gap-2'>
        <div className='relative w-24 shrink-0'>
          <Globe className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400' />
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className={cn(
              'h-10 w-full appearance-none rounded-lg border border-slate-300 bg-white pl-9 pr-8 text-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900',
            )}
          >
            <option value='+1'>+1</option>
            <option value='+44'>+44</option>
            <option value='+62'>+62</option>
            <option value='+81'>+81</option>
          </select>
          <ChevronDown className='pointer-events-none absolute right-2 top-1/2 size-4 -translate-y-1/2 text-slate-400' />
        </div>
        <div className='relative flex-1'>
          <Phone className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400' />
          <input
            type='tel'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
            placeholder='(555) 123-4567'
            className={cn(
              commonInputStyles,
              'pl-10 border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent',
            )}
          />
        </div>
      </div>
    </div>
  )
}
export const phoneNumberInputCode = `import { useState } from "react"
import { Phone, Globe, ChevronDown } from "lucide-react"

export function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [countryCode, setCountryCode] = useState('+1')

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\\D/g, '')
    if (numbers.length <= 3) return numbers
    if (numbers.length <= 6) return \`(\${numbers.slice(0, 3)}) \${numbers.slice(3)}\`
    return \`(\${numbers.slice(0, 3)}) \${numbers.slice(3, 6)}-\${numbers.slice(6, 10)}\`
  }

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Phone Number
      </label>
      <div className="relative flex gap-2">
        <div className="relative w-24 shrink-0">
          <Globe className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="h-10 w-full appearance-none rounded-lg border border-slate-300 bg-white pl-9 pr-8 text-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900"
          >
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+62">+62</option>
            <option value="+81">+81</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
        </div>
        <div className="relative flex-1">
          <Phone className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
            placeholder="(555) 123-4567"
            className="w-full px-4 py-2 text-sm transition-all pl-10 border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
          />
        </div>
      </div>
    </div>
  )
}`

// 24. Currency Input
export function CurrencyInput() {
  const [value, setValue] = useState('')

  const formatCurrency = (val: string) => {
    const numbers = val.replace(/\D/g, '')
    const amount = parseFloat(numbers) / 100
    return isNaN(amount) ? '' : amount.toFixed(2)
  }

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Amount
      </label>
      <div className='relative'>
        <DollarSign className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400' />
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(formatCurrency(e.target.value))}
          placeholder='0.00'
          className={cn(
            commonInputStyles,
            'pl-10 font-mono text-lg border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-green-500 focus:border-transparent',
          )}
        />
      </div>
    </div>
  )
}
export const currencyInputCode = `import { useState } from "react"
import { DollarSign } from "lucide-react"

export function CurrencyInput() {
  const [value, setValue] = useState('')

  const formatCurrency = (val: string) => {
    const numbers = val.replace(/\\D/g, '')
    const amount = parseFloat(numbers) / 100
    return isNaN(amount) ? '' : amount.toFixed(2)
  }

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Amount
      </label>
      <div className="relative">
        <DollarSign className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(formatCurrency(e.target.value))}
          placeholder="0.00"
          className="w-full px-4 py-2 text-sm transition-all pl-10 font-mono text-lg border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-green-500 focus:border-transparent focus:outline-none"
        />
      </div>
    </div>
  )
}`

// 25. Percentage Input
export function PercentageInput() {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^\d.]/g, '')
    const num = parseFloat(val)
    if (isNaN(num)) {
      setValue('')
    } else if (num <= 100) {
      setValue(val)
    }
  }

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Discount
      </label>
      <div className='relative'>
        <Percent className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400' />
        <input
          type='text'
          value={value}
          onChange={handleChange}
          placeholder='0'
          className={cn(
            commonInputStyles,
            'pl-10 pr-12 border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent',
          )}
        />
        <div className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400'>
          %
        </div>
      </div>
    </div>
  )
}
export const percentageInputCode = `import { useState } from "react"
import { Percent } from "lucide-react"

export function PercentageInput() {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^\\d.]/g, '')
    const num = parseFloat(val)
    if (isNaN(num)) {
      setValue('')
    } else if (num <= 100) {
      setValue(val)
    }
  }

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Discount
      </label>
      <div className="relative">
        <Percent className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="0"
          className="w-full px-4 py-2 text-sm transition-all pl-10 pr-12 border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
        />
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
          %
        </div>
      </div>
    </div>
  )
}`

// 26. Date Picker Input
export function DatePickerInput() {
  const [date, setDate] = useState('')

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Select Date
      </label>
      <div className='relative'>
        <Calendar className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400' />
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={cn(
            commonInputStyles,
            'pl-10 border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 dark:color-scheme-dark focus:ring-2 focus:ring-purple-500 focus:border-transparent',
          )}
        />
      </div>
    </div>
  )
}
export const datePickerInputCode = `import { useState } from "react"
import { Calendar } from "lucide-react"

export function DatePickerInput() {
  const [date, setDate] = useState('')

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Select Date
      </label>
      <div className="relative">
        <Calendar className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-2 text-sm transition-all pl-10 border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 dark:color-scheme-dark focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none"
        />
      </div>
    </div>
  )
}`

// 27. Select Dropdown Input
export function SelectDropdownInput() {
  const [value, setValue] = useState('')

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Country
      </label>
      <div className='relative'>
        <MapPin className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400 z-10' />
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={cn(
            commonInputStyles,
            'appearance-none pl-10 pr-10 border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer',
          )}
        >
          <option value=''>Select a country</option>
          <option value='us'>United States</option>
          <option value='uk'>United Kingdom</option>
          <option value='ca'>Canada</option>
          <option value='au'>Australia</option>
          <option value='jp'>Japan</option>
        </select>
        <ChevronDown className='pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400' />
      </div>
    </div>
  )
}
export const selectDropdownInputCode = `import { useState } from "react"
import { MapPin, ChevronDown } from "lucide-react"

export function SelectDropdownInput() {
  const [value, setValue] = useState('')

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Country
      </label>
      <div className="relative">
        <MapPin className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400 z-10" />
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-4 py-2 text-sm transition-all appearance-none pl-10 pr-10 border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer focus:outline-none"
        >
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
          <option value="jp">Japan</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  )
}`

// 28. Multi-Select Checkbox Input
export function MultiSelectInput() {
  const [selected, setSelected] = useState<string[]>(['react'])

  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ]

  const toggleOption = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    )
  }

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Frameworks
      </label>
      <div className='space-y-2 rounded-lg border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900'>
        {options.map((option) => (
          <label
            key={option.value}
            className='flex cursor-pointer items-center gap-2 rounded-md p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800'
          >
            <input
              type='checkbox'
              checked={selected.includes(option.value)}
              onChange={() => toggleOption(option.value)}
              className='size-4 cursor-pointer rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0'
            />
            <span className='text-sm'>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
export const multiSelectInputCode = `import { useState } from "react"

export function MultiSelectInput() {
  const [selected, setSelected] = useState<string[]>(['react'])

  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ]

  const toggleOption = (value: string) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value],
    )
  }

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Frameworks
      </label>
      <div className="space-y-2 rounded-lg border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <input
              type="checkbox"
              checked={selected.includes(option.value)}
              onChange={() => toggleOption(option.value)}
              className="size-4 cursor-pointer rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
            />
            <span className="text-sm">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}`

// 29. Range Slider Input
export function RangeSliderInput() {
  const [value, setValue] = useState(50)

  return (
    <div className='w-full space-y-1.5'>
      <div className='flex items-center justify-between'>
        <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
          Volume
        </label>
        <span className='text-sm font-semibold text-blue-600 dark:text-blue-400'>
          {value}%
        </span>
      </div>
      <div className='relative'>
        <input
          type='range'
          min='0'
          max='100'
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 outline-none transition-opacity hover:opacity-100 dark:bg-slate-700 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb]:hover:scale-110'
        />
      </div>
    </div>
  )
}
export const rangeSliderInputCode = `import { useState } from "react"

export function RangeSliderInput() {
  const [value, setValue] = useState(50)

  return (
    <div className="w-full space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Volume
        </label>
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
          {value}%
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 outline-none transition-opacity hover:opacity-100 dark:bg-slate-700 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb]:hover:scale-110"
        />
      </div>
    </div>
  )
}`

// 30. Number Stepper Input
export function StepperInput() {
  const [value, setValue] = useState(1)

  const increment = () => setValue((v) => Math.min(v + 1, 99))
  const decrement = () => setValue((v) => Math.max(v - 1, 0))

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Quantity
      </label>
      <div className='flex items-center gap-2'>
        <button
          onClick={decrement}
          className='flex size-10 shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition-all hover:bg-slate-100 active:scale-95 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
          disabled={value <= 0}
        >
          <Minus className='size-4' />
        </button>
        <input
          type='number'
          value={value}
          onChange={(e) => {
            const val = parseInt(e.target.value) || 0
            setValue(Math.min(Math.max(val, 0), 99))
          }}
          className={cn(
            commonInputStyles,
            'flex-1 text-center text-lg font-semibold border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
          )}
        />
        <button
          onClick={increment}
          className='flex size-10 shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition-all hover:bg-slate-100 active:scale-95 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
          disabled={value >= 99}
        >
          <Plus className='size-4' />
        </button>
      </div>
    </div>
  )
}
export const stepperInputCode = `import { useState } from "react"
import { Minus, Plus } from "lucide-react"

export function StepperInput() {
  const [value, setValue] = useState(1)

  const increment = () => setValue((v) => Math.min(v + 1, 99))
  const decrement = () => setValue((v) => Math.max(v - 1, 0))

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Quantity
      </label>
      <div className="flex items-center gap-2">
        <button
          onClick={decrement}
          className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition-all hover:bg-slate-100 active:scale-95 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          disabled={value <= 0}
        >
          <Minus className="size-4" />
        </button>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            const val = parseInt(e.target.value) || 0
            setValue(Math.min(Math.max(val, 0), 99))
          }}
          className="w-full px-4 py-2 text-sm transition-all flex-1 text-center text-lg font-semibold border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none"
        />
        <button
          onClick={increment}
          className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition-all hover:bg-slate-100 active:scale-95 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          disabled={value >= 99}
        >
          <Plus className="size-4" />
        </button>
      </div>
    </div>
  )
}`

// 31. Color Picker Input
export function ColorPickerInput() {
  const [color, setColor] = useState('#3b82f6')

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Theme Color
      </label>
      <div className='flex gap-2'>
        <div className='relative size-10 shrink-0 overflow-hidden rounded-lg border-2 border-slate-300 dark:border-slate-700'>
          <input
            type='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className='absolute inset-0 size-full cursor-pointer border-0 bg-transparent'
          />
        </div>
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#000000'
          className={cn(
            commonInputStyles,
            'flex-1 font-mono uppercase border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          )}
        />
      </div>
    </div>
  )
}
export const colorPickerInputCode = `import { useState } from "react"

export function ColorPickerInput() {
  const [color, setColor] = useState('#3b82f6')

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Theme Color
      </label>
      <div className="flex gap-2">
        <div className="relative size-10 shrink-0 overflow-hidden rounded-lg border-2 border-slate-300 dark:border-slate-700">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="absolute inset-0 size-full cursor-pointer border-0 bg-transparent"
          />
        </div>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#000000"
          className="w-full px-4 py-2 text-sm transition-all flex-1 font-mono uppercase border border-slate-300 rounded-lg bg-white dark:bg-slate-900 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
        />
      </div>
    </div>
  )
}`

// 32. Toggle Switch Input
export function ToggleSwitchInput() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className='w-full space-y-1.5'>
      <label className='block text-sm font-medium text-slate-700 dark:text-slate-300'>
        Notifications
      </label>
      <div className='flex items-center justify-between rounded-lg border border-slate-300 bg-white p-4 dark:border-slate-700 dark:bg-slate-900'>
        <div>
          <p className='text-sm font-medium text-slate-900 dark:text-slate-100'>
            Enable notifications
          </p>
          <p className='text-xs text-slate-500'>
            Receive updates about your account
          </p>
        </div>
        <button
          onClick={() => setEnabled(!enabled)}
          className={cn(
            'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
            enabled ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700',
          )}
        >
          <motion.span
            animate={{
              x: enabled ? 20 : 0,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className='pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0'
          />
        </button>
      </div>
    </div>
  )
}
export const toggleSwitchInputCode = `import { useState } from "react"
import { motion } from "motion/react"

export function ToggleSwitchInput() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="w-full space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Notifications
      </label>
      <div className="flex items-center justify-between rounded-lg border border-slate-300 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
        <div>
          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
            Enable notifications
          </p>
          <p className="text-xs text-slate-500">
            Receive updates about your account
          </p>
        </div>
        <button
          onClick={() => setEnabled(!enabled)}
          className={\`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 \${
            enabled ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'
          }\`}
        >
          <motion.span
            animate={{
              x: enabled ? 20 : 0,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0"
          />
        </button>
      </div>
    </div>
  )
}`
