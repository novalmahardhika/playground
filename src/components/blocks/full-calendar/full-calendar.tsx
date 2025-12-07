'use client'

import { addMonths, subMonths } from 'date-fns'
import * as React from 'react'
import { CalendarGrid } from './calendar-grid'
import { CalendarHeader } from './calendar-header'
import type { CalendarEvent } from '@/lib/types/full-calendar.type'

interface FullCalendarProps {
  events?: CalendarEvent[]
  initialDate?: Date
}

export function FullCalendar({
  events: initialEvents = [],
  initialDate = new Date(),
}: FullCalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(initialDate)
  const [events, _setEvents] = React.useState<CalendarEvent[]>(initialEvents)

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1))
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1))
  const handleToday = () => setCurrentDate(new Date())

  const handleDateClick = (_date: Date) => {
    // Example: Add a simple event on click (real app would open dialog)
    // console.log("Date clicked:", date);
    // For demo purposes, let's just log or maybe select the date
  }

  const handleEventClick = (event: CalendarEvent) => {
    // console.log("Event clicked:", event);
    alert(`Event: ${event.title}\n${event.description || ''}`)
  }

  const handleAddEvent = () => {
    // Placeholder for adding event
    alert('Add Event Dialog Would Open Here')
  }

  return (
    <div className='flex flex-col h-full w-full bg-background p-6'>
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onToday={handleToday}
        onAddEvent={handleAddEvent}
      />
      <div className='flex-1'>
        <CalendarGrid
          currentDate={currentDate}
          events={events} // Use prop events or local state
          onDateClick={handleDateClick}
          onEventClick={handleEventClick}
        />
      </div>
    </div>
  )
}
