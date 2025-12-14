'use client'
import { format } from 'date-fns'
import { useFullCalendarApi } from '../full-calendar-provider'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import type { CalendarApi } from '@fullcalendar/core/index.js'
import { useEffect, useState } from 'react'

export function FullCalendarDateAction() {
  const { calendarApi } = useFullCalendarApi()
  const calendar = calendarApi as CalendarApi | null

  const [currentDate, setCurrentDate] = useState<Date | null>(null)
  const [totalEvents, setTotalEvents] = useState(0)

  useEffect(() => {
    if (!calendar) return

    const syncDate = () => {
      setCurrentDate(calendar.getDate())
      setTotalEvents(calendar.getEvents().length)
    }

    // initial sync
    syncDate()

    calendar.on('datesSet', syncDate)
    calendar.on('eventAdd', syncDate)
    calendar.on('eventRemove', syncDate)
    calendar.on('eventChange', syncDate)

    return () => {
      calendar.off('datesSet', syncDate)
      calendar.off('eventAdd', syncDate)
      calendar.off('eventRemove', syncDate)
      calendar.off('eventChange', syncDate)
    }
  }, [calendar])

  const day = currentDate ? format(currentDate, 'dd') : '-'
  const prefixMonth = currentDate ? format(currentDate, 'MMM') : '-'
  const monthYear = currentDate ? format(currentDate, 'MMMM yyyy') : '...'
  const fullCalendarDate = currentDate
    ? format(currentDate, 'MMMM dd, yyyy')
    : '-'

  return (
    <section className='flex items-center gap-3'>
      {/* Neo-Brutalist Date Badge */}
      <div
        className={cn(
          'flex flex-col overflow-hidden rounded-xl border-2 border-primary bg-background text-center shadow-[3px_3px_0_0_rgba(0,0,0,0.1)] dark:shadow-none',
          'h-14 w-14 shrink-0',
        )}
      >
        <div className='bg-primary py-0.5 text-[10px] font-black uppercase tracking-widest text-primary-foreground'>
          {prefixMonth}
        </div>
        <div className='flex flex-1 items-center justify-center text-lg font-black leading-none'>
          {day}
        </div>
      </div>

      <div className='grid gap-1'>
        <span className='flex items-center gap-2'>
          <span className='font-bold text-lg leading-none tracking-tight'>
            {monthYear}
          </span>
          <Badge
            variant='secondary'
            className='rounded-md font-bold px-1.5 h-5 text-[10px]'
          >
            {totalEvents} events
          </Badge>
        </span>

        <span className='flex items-center gap-1'>
          <Button
            variant='outline'
            size='icon'
            className='h-7 w-7 rounded-lg border-2'
            onClick={() => calendarApi?.prev()}
          >
            <ChevronLeft className='h-4 w-4' />
          </Button>

          <div className='relative'>
            <Input
              value={fullCalendarDate}
              readOnly
              className='h-7 w-[160px] text-center rounded-lg border-2 border-input bg-transparent px-2 text-xs font-semibold focus-visible:ring-0 focus-visible:ring-offset-0'
            />
          </div>

          <Button
            variant='outline'
            size='icon'
            className='h-7 w-7 rounded-lg border-2'
            onClick={() => calendarApi?.next()}
          >
            <ChevronRight className='h-4 w-4' />
          </Button>
        </span>
      </div>
    </section>
  )
}
