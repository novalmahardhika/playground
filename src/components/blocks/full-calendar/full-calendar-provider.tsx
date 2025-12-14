'use client'

import type { CalendarApi } from '@fullcalendar/core/index.js'
import { createContext, useContext } from 'react'

interface FullCalendarApiContextValue {
  calendarApi: CalendarApi | null
}

export const FullCalendarApiContext =
  createContext<FullCalendarApiContextValue | null>(
    {} as FullCalendarApiContextValue,
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
      'useFullCalendarApi must be used within a FullCalendarApiProvider',
    )
  }

  return context
}
