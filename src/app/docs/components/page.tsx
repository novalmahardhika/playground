'use client'

import { ComponentPreview } from '@/components/component-preview'
import { Button } from '@/components/ui/button'

const buttonTsCode = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Click me</Button>
}`

const buttonJsCode = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Click me</Button>
}`

const secondaryButtonTsCode = `import { Button } from "@/components/ui/button"

export function SecondaryButtonDemo() {
  return <Button variant="secondary">Secondary</Button>
}`

const secondaryButtonJsCode = `import { Button } from "@/components/ui/button"

export function SecondaryButtonDemo() {
  return <Button variant="secondary">Secondary</Button>
}`

const destructiveButtonTsCode = `import { Button } from "@/components/ui/button"

export function DestructiveButtonDemo() {
  return <Button variant="destructive">Destructive</Button>
}`

const destructiveButtonJsCode = `import { Button } from "@/components/ui/button"

export function DestructiveButtonDemo() {
  return <Button variant="destructive">Destructive</Button>
}`

export default function ComponentsPage() {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Components
        </h1>
        <p className='text-lg text-muted-foreground'>
          Reusable building blocks for your application.
        </p>
      </div>
      <div className='pb-12 space-y-12'>
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Buttons
          </h2>
          <div className='grid gap-8'>
            <ComponentPreview
              title='Default Button'
              component={<Button>Click me</Button>}
              tsCode={buttonTsCode}
              jsCode={buttonJsCode}
            />
            <ComponentPreview
              title='Secondary Button'
              component={<Button variant='secondary'>Secondary</Button>}
              tsCode={secondaryButtonTsCode}
              jsCode={secondaryButtonJsCode}
            />
            <ComponentPreview
              title='Destructive Button'
              component={<Button variant='destructive'>Destructive</Button>}
              tsCode={destructiveButtonTsCode}
              jsCode={destructiveButtonJsCode}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
