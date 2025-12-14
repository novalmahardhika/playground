'use client'

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
}
