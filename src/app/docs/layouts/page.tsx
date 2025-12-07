'use client'

import { ComponentPreview } from '@/components/component-preview'
import { GridLayout } from '@/components/layouts/grid-layout'
import { FlexLayout } from '@/components/layouts/flex-layout'

const gridCode = `export function GridLayout() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 border-2 border-border rounded-lg bg-muted w-full max-w-md">
      <div className="h-20 bg-primary border-2 border-border rounded shadow-[2px_2px_0px_0px_var(--color-border)]" />
      <div className="h-20 bg-secondary border-2 border-border rounded shadow-[2px_2px_0px_0px_var(--color-border)]" />
      <div className="h-20 bg-accent border-2 border-border rounded shadow-[2px_2px_0px_0px_var(--color-border)]" />
      <div className="col-span-2 h-20 bg-chart-4 border-2 border-border rounded shadow-[2px_2px_0px_0px_var(--color-border)]" />
      <div className="h-20 bg-chart-5 border-2 border-border rounded shadow-[2px_2px_0px_0px_var(--color-border)]" />
    </div>
  )
}`

const flexCode = `export function FlexLayout() {
  return (
    <div className="flex flex-wrap gap-4 p-4 border-2 border-border rounded-lg bg-muted w-full max-w-md">
      <div className="flex-1 min-w-[100px] h-20 bg-primary border-2 border-border rounded shadow-[2px_2px_0px_0px_var(--color-border)]" />
      <div className="flex-[2] min-w-[150px] h-20 bg-secondary border-2 border-border rounded shadow-[2px_2px_0px_0px_var(--color-border)]" />
      <div className="flex-1 min-w-[100px] h-20 bg-accent border-2 border-border rounded shadow-[2px_2px_0px_0px_var(--color-border)]" />
    </div>
  )
}`

export default function LayoutsPage() {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Layouts
        </h1>
        <p className='text-lg text-muted-foreground'>
          Responsive structures for modern web applications.
        </p>
      </div>
      <div className='pb-12 space-y-12'>
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            CSS Grid
          </h2>
          <ComponentPreview
            title='Grid Layout'
            component={<GridLayout />}
            tsCode={gridCode}
          />
        </div>
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Flexbox
          </h2>
          <ComponentPreview
            title='Flex Layout'
            component={<FlexLayout />}
            tsCode={flexCode}
          />
        </div>
      </div>
    </div>
  )
}
