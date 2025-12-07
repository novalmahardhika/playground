'use client'

import * as React from 'react'
import { Check, Copy } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  component: React.ReactNode
  tsCode: string
  jsCode?: string
  title?: string
}

export function ComponentPreview({
  component,
  tsCode,
  jsCode,
  title,
  className,
  ...props
}: ComponentPreviewProps) {
  const [language, setLanguage] = React.useState<'typescript' | 'javascript'>(
    'typescript',
  )
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => setHasCopied(false), 2000)
      return () => clearTimeout(timeout)
    }
  }, [hasCopied])

  const code = language === 'typescript' ? tsCode : jsCode || tsCode

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setHasCopied(true)
  }

  return (
    <div
      className={cn('group relative flex flex-col space-y-4', className)}
      {...props}
    >
      {title && (
        <div className='flex items-center justify-between pb-3'>
          <h3 className='text-lg font-medium'>{title}</h3>
        </div>
      )}
      <Tabs defaultValue='preview' className='relative mr-auto w-full'>
        <div className='flex items-center justify-between pb-3'>
          <TabsList className='w-full justify-start rounded-none border-b border-border bg-transparent p-0'>
            <TabsTrigger
              value='preview'
              className='relative h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value='code'
              className='relative h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value='preview'
          className='relative rounded-md border-2 border-border bg-background p-10 shadow-[4px_4px_0px_0px_var(--color-border)]'
        >
          <div className='flex items-center justify-center min-h-[150px]'>
            {component}
          </div>
        </TabsContent>
        <TabsContent value='code'>
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center justify-between rounded-t-md border-2 border-b-0 border-border bg-muted px-4 py-2'>
              <div className='flex items-center gap-2'>
                <Button
                  variant={language === 'typescript' ? 'default' : 'ghost'}
                  size='sm'
                  onClick={() => setLanguage('typescript')}
                  className='h-7 text-xs'
                >
                  TypeScript
                </Button>
                <Button
                  variant={language === 'javascript' ? 'default' : 'ghost'}
                  size='sm'
                  onClick={() => setLanguage('javascript')}
                  className='h-7 text-xs'
                >
                  JavaScript
                </Button>
              </div>
              <Button
                variant='ghost'
                size='icon'
                className='h-6 w-6 hover:bg-background'
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
            <div className='relative rounded-b-md border-2 border-border bg-muted font-mono text-sm shadow-[4px_4px_0px_0px_var(--color-border)] mt-0'>
              <div className='overflow-x-auto p-4 max-h-[400px]'>
                <pre>
                  <code>{code}</code>
                </pre>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
