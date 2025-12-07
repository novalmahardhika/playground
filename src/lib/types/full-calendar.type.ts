export type CalendarEvent = {
  id: string
  title: string
  start: Date
  end: Date
  color?: string // Optional color for the event
  description?: string
}

export type CalendarViewType = 'month' | 'week' | 'day'
