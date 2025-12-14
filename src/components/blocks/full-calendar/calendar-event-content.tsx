import type { EventContentArg } from '@fullcalendar/core'
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
}
