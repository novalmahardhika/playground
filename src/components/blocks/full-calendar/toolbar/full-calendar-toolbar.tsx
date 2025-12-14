import { FullCalendarToolbarViewMode } from './full-calendar-toolbar-view-mode'
import { FullCalendarToolbarAction } from './full-calendar-toolbar-action'
import { FullCalendarDateAction } from './full-calendar-date-action'

export function FullCalendarToolbar() {
  return (
    <header className='flex items-center gap-2 justify-between'>
      <FullCalendarDateAction />
      <div className='flex items-center gap-2'>
        <FullCalendarToolbarViewMode />
        <FullCalendarToolbarAction />
      </div>
    </header>
  )
}
