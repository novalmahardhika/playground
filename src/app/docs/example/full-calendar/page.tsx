import { FullCalendarRoot } from '@/components/blocks/full-calendar/full-calendar'
import { mockEvents } from '@/lib/mocks/full-calendar-mock-event'

export default function FullCalendarPage() {
  return <FullCalendarRoot events={mockEvents} />
}
