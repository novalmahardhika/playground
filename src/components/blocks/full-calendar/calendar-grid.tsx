import { cn } from '@/lib/utils'
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from 'date-fns'
import type { CalendarEvent } from '@/lib/types/full-calendar.type'

interface CalendarGridProps {
  currentDate: Date
  events: CalendarEvent[]
  onDateClick?: (date: Date) => void
  onEventClick?: (event: CalendarEvent) => void
}

export function CalendarGrid({
  currentDate,
  events,
  onDateClick,
  onEventClick,
}: CalendarGridProps) {
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const days = eachDayOfInterval({
    start: startDate,
    end: endDate,
  })

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className='flex flex-col border rounded-lg overflow-hidden shadow-sm bg-background'>
      {/* Weekday Headers */}
      <div className='grid grid-cols-7 border-b bg-muted/40 text-center text-sm font-medium text-muted-foreground'>
        {weekDays.map((day) => (
          <div key={day} className='py-2.5'>
            {day}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className='grid grid-cols-7 auto-rows-fr bg-muted/20'>
        {days.map((day, dayIdx) => {
          const dayEvents = events.filter((event) =>
            isSameDay(event.start, day),
          )
          const isCurrentMonth = isSameMonth(day, monthStart)

          return (
            <div
              key={day.toString()}
              onClick={() => onDateClick?.(day)}
              className={cn(
                'min-h-[120px] p-2 border-b border-r bg-background transition-colors hover:bg-muted/10 cursor-pointer flex flex-col gap-1 relative group',
                !isCurrentMonth && 'bg-muted/5 text-muted-foreground',
                // Remove right border for the last column (every 7th item)
                (dayIdx + 1) % 7 === 0 && 'border-r-0',
                // Remove bottom border for the last row (approx) - actually grid handles this well usually, but let's be safe.
                // CSS grid gap approach is cleaner but border approach matches classic tables.
              )}
            >
              <div className='flex items-center justify-between'>
                <span
                  className={cn(
                    'text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full',
                    isToday(day)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground',
                    !isCurrentMonth && 'text-muted-foreground/50',
                  )}
                >
                  {format(day, 'd')}
                </span>
                {/* Add button placeholder on hover could go here */}
              </div>

              <div className='flex flex-col gap-1 mt-1 overflow-y-auto max-h-[100px] scrollbar-hide'>
                {dayEvents.map((event) => (
                  <div
                    key={event.id}
                    onClick={(e) => {
                      e.stopPropagation()
                      onEventClick?.(event)
                    }}
                    className={cn(
                      'px-2 py-1 text-xs rounded-md truncate font-medium border shadow-sm transition-all hover:opacity-80',
                      event.color
                        ? ''
                        : 'bg-primary/10 text-primary border-primary/20',
                    )}
                    style={
                      event.color
                        ? {
                            backgroundColor: `${event.color}20`,
                            color: event.color,
                            borderColor: `${event.color}40`,
                          }
                        : {}
                    }
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
