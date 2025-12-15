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
          <div className='h-[750px] w-full border rounded-xl overflow-hidden shadow-sm bg-background p-6'>
            <FullCalendarRoot events={mockEvents} />
          </div>
        }
        tsCode={usageCode}
      />

      <div className='prose dark:prose-invert max-w-none'>
        <h3>Installation</h3>
        <p>First, install the required dependencies:</p>
        <CodeBlock
          code={`npm install @fullcalendar/react@^6.1.19 @fullcalendar/daygrid@^6.1.19 @fullcalendar/timegrid@^6.1.19 @fullcalendar/interaction@^6.1.19 @fullcalendar/core@^6.1.19 date-fns lucide-react motion`}
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
import type { CalendarApi } from '@fullcalendar/core/index.js'
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
          eventDisplay='block'
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

// // Type-safe color extraction
// type EventColor = NonNullable<CalendarEvent['color']>

const EVENT_COLOR_STYLES = {
  red: {
    wrapper:
      'bg-red-50 border-l-red-500 text-red-700 dark:bg-red-500/10 dark:text-red-400',
    badge: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300',
    indicator: 'bg-red-500',
  },
  blue: {
    wrapper:
      'bg-blue-50 border-l-blue-500 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
    indicator: 'bg-blue-500',
  },
  sky: {
    wrapper:
      'bg-sky-50 border-l-sky-500 text-sky-700 dark:bg-sky-500/10 dark:text-sky-400',
    badge: 'bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300',
    indicator: 'bg-sky-500',
  },
  emerald: {
    wrapper:
      'bg-emerald-50 border-l-emerald-500 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400',
    badge:
      'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
    indicator: 'bg-emerald-500',
  },
  amber: {
    wrapper:
      'bg-amber-50 border-l-amber-500 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
    badge:
      'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
    indicator: 'bg-amber-500',
  },
  violet: {
    wrapper:
      'bg-violet-50 border-l-violet-500 text-violet-700 dark:bg-violet-500/10 dark:text-violet-400',
    badge:
      'bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300',
    indicator: 'bg-violet-500',
  },
} as const

const STATUS_ICONS = {
  todo: Circle,
  in_progress: Clock,
  done: CheckCircle2,
} as const

export function CalendarEventContent({
  event,
  view,
  timeText,
}: EventContentArg) {
  // Safe cast for extended props including our custom types
  const props = event.extendedProps as Partial<CalendarEvent> & {
    color?: string
  }

  // Extract custom color or fallback to blue, ensuring it's a valid key
  const rawColor = props.color || event.backgroundColor || 'blue'
  const colorKey = (
    Object.keys(EVENT_COLOR_STYLES).includes(rawColor) ? rawColor : 'blue'
  ) as keyof typeof EVENT_COLOR_STYLES
  const styles = EVENT_COLOR_STYLES[colorKey]

  const StatusIcon = props.status ? STATUS_ICONS[props.status] : null
  const isMonthView = view.type === 'dayGridMonth'
  const isDone = props.status === 'done'

  return (
    <div
      className={cn(
        'group relative flex h-full w-full flex-col gap-1 overflow-hidden rounded-xl border border-l-4 px-2 py-1.5 transition-all hover:brightness-95',
        styles.wrapper,
      )}
    >
      {/* HEADER: Priority Dot & Time */}
      <div className='flex items-center justify-between text-[10px] opacity-80'>
        <div className='flex items-center gap-1.5'>
          {timeText && <span className='font-semibold'>{timeText}</span>}
          {!timeText && props.priority && (
            <span
              className={cn('h-1.5 w-1.5 rounded-full', styles.indicator)}
            />
          )}
        </div>
        {StatusIcon && (
          <StatusIcon className={cn('h-3 w-3', isDone && 'opacity-60')} />
        )}
      </div>

      {/* TITLE */}
      <p
        className={cn(
          'text-xs font-semibold leading-tight line-clamp-2',
          isDone && 'line-through opacity-70',
        )}
        title={event.title}
      >
        {event.title}
      </p>

      {/* FOOTER */}
      {!isMonthView && (
        <div className='mt-auto flex items-center justify-between pt-1'>
          {props.user && (
            <div className='flex items-center gap-1.5 overflow-hidden'>
              {props.user.avatar ? (
                <Image
                  src={props.user.avatar}
                  alt={props.user.name}
                  className='h-4 w-4 rounded-full object-cover ring-1 ring-white/20'
                  width={16}
                  height={16}
                />
              ) : (
                <div
                  className={cn(
                    'flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold ring-1 ring-white/20',
                    styles.badge,
                  )}
                >
                  {getInitial(props.user.name)}
                </div>
              )}
              <span className='truncate text-[10px] font-medium opacity-80'>
                {props.user.name}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function getInitial(name?: string) {
  if (!name) return '?'
  const parts = name.trim().split(' ')
  return (parts[0][0] + (parts[1]?.[0] ?? '')).toUpperCase()
}`}
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
        <h4 className='mt-8'>globals.css</h4>
        <p className='text-sm text-muted-foreground mb-2'>
          Add these styles to your global CSS file to customize the calendar
          appearance.
        </p>
        <CodeBlock
          code={`/* === REMOVE TODAY BACKGROUND (ALL VIEWS) === */
.calendar-wrapper .fc-day-today {
  background: transparent !important;
}

/* dayGrid (month) */
.calendar-wrapper .fc-daygrid-day.fc-day-today {
  background: transparent !important;
}

/* timeGrid (week/day) */
.calendar-wrapper .fc-timegrid-col.fc-day-today {
  background: transparent !important;
}

/* ===== UNIFY EVENT CONTAINER ===== */
.calendar-wrapper .fc-daygrid-event,
.calendar-wrapper .fc-timegrid-event {
  border-radius: 12px;
  padding: 0 !important;
}

/* paksa eventContent jadi full control */
.calendar-wrapper .fc-event-main {
  height: 100%;
  width: 100%;
  padding: 0;
}

/* hilangkan style bawaan */
.calendar-wrapper .fc-event {
  background: transparent !important;
  border: none !important;
}
`}
          language='css'
        />
      </div>
    </div>
  )
}
