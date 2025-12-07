import { Button } from '@/components/ui/button'
import { format } from 'date-fns'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'

interface CalendarHeaderProps {
  currentDate: Date
  onPrevMonth: () => void
  onNextMonth: () => void
  onToday: () => void
  onAddEvent?: () => void
}

export function CalendarHeader({
  currentDate,
  onPrevMonth,
  onNextMonth,
  onToday,
  onAddEvent,
}: CalendarHeaderProps) {
  return (
    <div className='flex items-center justify-between py-4'>
      <div className='flex items-center gap-4'>
        <h2 className='text-2xl font-bold tracking-tight'>
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <div className='flex items-center rounded-md border bg-background shadow-sm'>
          <Button
            variant='ghost'
            size='icon'
            className='h-8 w-8 rounded-l-md rounded-r-none border-r'
            onClick={onPrevMonth}
          >
            <ChevronLeft className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            className='h-8 rounded-none px-3 font-normal'
            onClick={onToday}
          >
            Today
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className='h-8 w-8 rounded-l-none rounded-r-md border-l'
            onClick={onNextMonth}
          >
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        {/* Placeholder for View Switcher (Month/Week/Day) if needed later */}
        {onAddEvent && (
          <Button onClick={onAddEvent} size='sm' className='h-9'>
            <Plus className='mr-2 h-4 w-4' />
            New Event
          </Button>
        )}
      </div>
    </div>
  )
}
