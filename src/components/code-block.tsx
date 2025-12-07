'use client'

import * as React from 'react'
import { Check, Copy } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
}

export function CodeBlock({
  code,
  language = 'tsx',
  className,
  ...props
}: CodeBlockProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => setHasCopied(false), 2000)
      return () => clearTimeout(timeout)
    }
  }, [hasCopied])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setHasCopied(true)
  }

  return (
    <div
      className={cn(
        'relative rounded-md border-2 border-border bg-muted font-mono text-sm shadow-[4px_4px_0px_0px_var(--color-border)]',
        className,
      )}
      {...props}
    >
      <div className='flex items-center justify-between border-b-2 border-border bg-background px-4 py-2'>
        <span className='text-xs font-bold text-muted-foreground uppercase'>
          {language}
        </span>
        <Button
          variant='ghost'
          size='icon'
          className='h-6 w-6 hover:bg-muted'
          onClick={copyToClipboard}
        >
          {hasCopied ? (
            <Check className='h-3 w-3' />
          ) : (
            <Copy className='h-3 w-3' />
          )}
          <span className='sr-only'>Copy code</span>
        </Button>
      </div>
      <div className='overflow-x-auto p-4'>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}
