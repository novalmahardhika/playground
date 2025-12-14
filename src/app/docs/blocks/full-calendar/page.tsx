import { ComponentPreview } from '@/components/component-preview'
import { CodeBlock } from '@/components/code-block'
import { FullCalendarRoot } from '@/components/blocks/full-calendar/full-calendar'
import { mockEvents } from '@/lib/mocks/full-calendar-mock-event'

export default function CalendarPage() {
  const usageCode = `import { FullCalendarRoot } from "@/components/blocks/full-calendar/full-calendar"
import { mockEvents } from "@/lib/mocks/full-calendar-mock-event"

export default function Page() {
  return (
    <div className="h-[700px]">
      <FullCalendarRoot events={mockEvents} />
    </div>
  )
}`

  return (
    <div className='container mx-auto py-10 space-y-10'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold tracking-tight'>
          Full Calendar Block
        </h1>
        <p className='text-muted-foreground text-lg'>
          A robust, customizable calendar component built on top of{' '}
          <code className='text-primary'>@fullcalendar/react</code>. Features a
          custom toolbar, Neo-Brutalist design elements, and responsive views.
        </p>
      </div>

      <ComponentPreview
        title='Interactive Calendar'
        component={
          <div className='h-[750px] w-full border rounded-xl overflow-hidden shadow-sm bg-background'>
            <FullCalendarRoot events={mockEvents} />
          </div>
        }
        tsCode={usageCode}
      />

      <div className='prose dark:prose-invert max-w-none'>
        <h3>Installation</h3>
        <p>First, install the required dependencies:</p>
        <CodeBlock
          code={`npm install @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/interaction @fullcalendar/core date-fns lucide-react motion`}
          language='bash'
        />

        <h3>Block Implementation</h3>
        <p>
          This block is composed of multiple files for modularity. Copy the
          structure below into your project.
        </p>

        <h4 className='mt-8'>File Structure</h4>
        <div className='rounded-md bg-muted p-4 font-mono text-sm'>
          src/components/blocks/full-calendar/
          <br />
          ├── toolbar/
          <br />
          │ ├── full-calendar-date-action.tsx
          <br />
          │ ├── full-calendar-toolbar-action.tsx
          <br />
          │ ├── full-calendar-toolbar-view-mode.tsx
          <br />
          │ └── full-calendar-toolbar.tsx
          <br />
          ├── calendar-event-content.tsx
          <br />
          ├── full-calendar-provider.tsx
          <br />
          ├── full-calendar-type.ts
          <br />
          └── full-calendar.tsx
        </div>

        <h4 className='mt-8'>full-calendar.tsx</h4>
        <p className='text-sm text-muted-foreground mb-2'>
          The main entry component that initializes the FullCalendar instance
          and provider.
        </p>
        <CodeBlock
          code={`"use client"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { FullCalendarApiProvider } from './full-calendar-provider'
import { FullCalendarToolbar } from './toolbar/full-calendar-toolbar'
import { useState } from 'react'
import { CalendarEventContent } from './calendar-event-content'
import type { ViewMode } from './full-calendar-type'
import { CalendarApi } from '@fullcalendar/core/index.js'
import type { CalendarEvent } from '@/lib/mocks/full-calendar-mock-event'

interface FullCalendarRootProps {
  initialViewMode?: ViewMode
  events?: CalendarEvent[]
}

export function FullCalendarRoot({
  events = [],
  initialViewMode = 'dayGridMonth',
}: FullCalendarRootProps) {
  const [calendarApi, setCalendarApi] = useState<CalendarApi | null>(null)
  return (
    <FullCalendarApiProvider calendarApi={calendarApi}>
      <div className='flex flex-col gap-4 calendar-wrapper'>
        <FullCalendarToolbar />
        <FullCalendar
          ref={(instance) => {
            if (instance && !calendarApi) {
              setCalendarApi(instance.getApi())
            }
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={initialViewMode}
          headerToolbar={false}
          events={events}
          droppable
          editable
          eventContent={CalendarEventContent}
          eventDisplay="block"
        />
      </div>
    </FullCalendarApiProvider>
  )
}`}
          language='tsx'
        />

        <h4 className='mt-8'>full-calendar-provider.tsx</h4>
        <p className='text-sm text-muted-foreground mb-2'>
          Context provider to share the Calendar API instance across child
          components.
        </p>
        <CodeBlock
          code={`"use client"

import { CalendarApi } from '@fullcalendar/core/index.js'
import { createContext, useContext } from 'react'

interface FullCalendarApiContextValue {
  calendarApi: CalendarApi | null
}

export const FullCalendarApiContext = createContext<FullCalendarApiContextValue | null>(
  {} as FullCalendarApiContextValue
)

export function FullCalendarApiProvider({
  children,
  calendarApi,
}: {
  children: React.ReactNode
  calendarApi: CalendarApi | null
}) {
  return (
    <FullCalendarApiContext.Provider value={{ calendarApi }}>
      {children}
    </FullCalendarApiContext.Provider>
  )
}

export function useFullCalendarApi() {
  const context = useContext(FullCalendarApiContext)

  if (context === null) {
    throw new Error(
      'useFullCalendarApi must be used within a FullCalendarApiProvider'
    )
  }

  return context
}`}
          language='tsx'
        />

        <h4 className='mt-8'>calendar-event-content.tsx</h4>
        <p className='text-sm text-muted-foreground mb-2'>
          Custom event rendering component with status indicators and styling.
        </p>
        <CodeBlock
          code={`import type { EventContentArg } from '@fullcalendar/core'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import type { CalendarEvent } from '@/lib/mocks/full-calendar-mock-event'
import { CheckCircle2, Clock, Circle } from 'lucide-react'

// ... (Copy the full content of your calendar-event-content.tsx here)
// For brevity in docs, you can show the structure, but ideally include the full code.
`}
          language='tsx'
        />

        <h4 className='mt-8'>toolbar/full-calendar-date-action.tsx</h4>
        <p className='text-sm text-muted-foreground mb-2'>
          Displays the current date and provides navigation controls.
        </p>
        <CodeBlock
          code={`"use client"
import { format } from "date-fns"
import { useFullCalendarApi } from "../full-calendar-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
// ... imports

export function FullCalendarDateAction() {
  const { calendarApi } = useFullCalendarApi()
  // ... implementation details
  // (Include the logic for syncing date and events count)
  return (
    // ... JSX
  )
}`}
          language='tsx'
        />

        <h4 className='mt-8'>full-calendar-type.ts</h4>
        <CodeBlock
          code={`export type ViewMode = 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay'`}
          language='typescript'
        />
      </div>
    </div>
  )
}
