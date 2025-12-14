'use client'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { useFullCalendarApi } from '../full-calendar-provider'
import { cn } from '@/lib/utils'
import { Columns2, Grid3X3, List } from 'lucide-react'
import type { ViewMode } from '../full-calendar-type'
import { useEffect, useState } from 'react'

const VIEW_MODES = [
  { label: 'Month', value: 'dayGridMonth' as const },
  { label: 'Week', value: 'timeGridWeek' as const },
  { label: 'Day', value: 'timeGridDay' as const },
]

const calendarModeIconMap: Record<ViewMode, React.ReactNode> = {
  timeGridDay: <List />,
  timeGridWeek: <Columns2 />,
  dayGridMonth: <Grid3X3 />,
}

export function FullCalendarToolbarViewMode() {
  const { calendarApi } = useFullCalendarApi()
  const calendar = calendarApi

  const [viewMode, setViewMode] = useState<ViewMode>('dayGridMonth')

  useEffect(() => {
    if (!calendar) return

    const syncView = () => {
      setViewMode(calendar.view.type as ViewMode)
    }

    syncView()

    calendar.on('datesSet', syncView)

    return () => {
      calendar.off('datesSet', syncView)
    }
  }, [calendar])

  return (
    <LayoutGroup>
      <ToggleGroup
        className='flex gap-0 -space-x-px rounded-sm border overflow-hidden shadow-sm shadow-black/5 rtl:space-x-reverse'
        type='single'
        variant='outline'
        value={viewMode}
        onValueChange={(value) => {
          if (value) calendar?.changeView(value as ViewMode)
        }}
      >
        {VIEW_MODES.map((modeValue, index) => {
          const isSelected = viewMode === modeValue.value
          return (
            <motion.div
              key={`view-mode-${index}`}
              layout
              className='flex-1 flex divide-x'
              animate={{ flex: isSelected ? 1.6 : 1 }}
              transition={{
                flex: {
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                },
              }}
            >
              <ToggleGroupItem
                value={modeValue.value}
                className={cn(
                  'w-full rounded-none shadow-none focus-visible:z-10 text-base flex items-center justify-center gap-2 relative border-none',
                  isSelected && 'z-10',
                )}
              >
                <motion.div
                  layout
                  className='flex items-center justify-center gap-2 py-2 px-3'
                  initial={false}
                  animate={{
                    scale: isSelected ? 1 : 0.95,
                  }}
                  transition={{
                    scale: {
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    },
                    layout: {
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    },
                  }}
                >
                  <motion.div
                    layout='position'
                    initial={false}
                    animate={{
                      scale: isSelected ? 0.9 : 1,
                    }}
                    transition={{
                      scale: {
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      },
                    }}
                  >
                    {calendarModeIconMap[modeValue.value]}
                  </motion.div>
                  <AnimatePresence mode='popLayout'>
                    {isSelected && (
                      <motion.p
                        layout='position'
                        key={`text-${modeValue}`}
                        className='font-medium origin-left whitespace-nowrap'
                        initial={{
                          opacity: 0,
                          x: -2,
                          scale: 0.95,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          scale: 1,
                          transition: {
                            type: 'spring',
                            stiffness: 400,
                            damping: 30,
                            opacity: { duration: 0.15 },
                          },
                        }}
                        exit={{
                          opacity: 0,
                          x: -2,
                          scale: 0.95,
                          transition: {
                            type: 'spring',
                            stiffness: 400,
                            damping: 30,
                            opacity: { duration: 0.1 },
                          },
                        }}
                      >
                        {modeValue.label.charAt(0).toUpperCase() +
                          modeValue.label.slice(1)}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ToggleGroupItem>
            </motion.div>
          )
        })}
      </ToggleGroup>
    </LayoutGroup>
  )
}
