/* eslint-disable */
'use client'

import React, { useState, useRef, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { motion, AnimatePresence } from 'framer-motion'

export default function CalendarWithCustomHeader() {
  const calendarRef = useRef<FullCalendar>(null)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentView, setCurrentView] = useState('dayGridMonth')
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Team Meeting',
      start: new Date().toISOString().split('T')[0] + 'T10:00:00',
      end: new Date().toISOString().split('T')[0] + 'T11:00:00',
      backgroundColor: '#3B82F6',
      borderColor: '#3B82F6',
    },
    {
      id: '2',
      title: 'Project Review',
      start:
        new Date(new Date().setDate(new Date().getDate() + 2))
          .toISOString()
          .split('T')[0] + 'T14:00:00',
      end:
        new Date(new Date().setDate(new Date().getDate() + 2))
          .toISOString()
          .split('T')[0] + 'T15:30:00',
      backgroundColor: '#10B981',
      borderColor: '#10B981',
    },
    {
      id: '3',
      title: 'Client Call',
      start:
        new Date(new Date().setDate(new Date().getDate() + 5))
          .toISOString()
          .split('T')[0] + 'T09:00:00',
      end:
        new Date(new Date().setDate(new Date().getDate() + 5))
          .toISOString()
          .split('T')[0] + 'T10:00:00',
      backgroundColor: '#F59E0B',
      borderColor: '#F59E0B',
    },
    {
      id: '4',
      title: 'Workshop',
      start: new Date(new Date().setDate(new Date().getDate() + 10))
        .toISOString()
        .split('T')[0],
      end: new Date(new Date().setDate(new Date().getDate() + 10))
        .toISOString()
        .split('T')[0],
      backgroundColor: '#EF4444',
      borderColor: '#EF4444',
    },
    {
      id: '5',
      title: 'Design Sprint',
      start:
        new Date(new Date().setDate(new Date().getDate() + 3))
          .toISOString()
          .split('T')[0] + 'T13:00:00',
      end:
        new Date(new Date().setDate(new Date().getDate() + 3))
          .toISOString()
          .split('T')[0] + 'T17:00:00',
      backgroundColor: '#8B5CF6',
      borderColor: '#8B5CF6',
    },
  ])

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const handlePrev = () => {
    const calendarApi = calendarRef.current?.getApi()
    if (calendarApi) {
      calendarApi.prev()
    }
  }

  const handleNext = () => {
    const calendarApi = calendarRef.current?.getApi()
    if (calendarApi) {
      calendarApi.next()
    }
  }

  const handleToday = () => {
    const calendarApi = calendarRef.current?.getApi()
    if (calendarApi) {
      calendarApi.today()
    }
  }

  const handleViewChange = (view: string) => {
    const calendarApi = calendarRef.current?.getApi()
    if (calendarApi) {
      calendarApi.changeView(view)
      setCurrentView(view)
    }
  }

  const handleDateSelect = (selectInfo: any) => {
    const title = prompt('Enter event title:')
    const calendarApi = selectInfo.view.calendar
    calendarApi.unselect()

    if (title) {
      const newEvent = {
        id: Date.now().toString(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        backgroundColor: '#3B82F6',
        borderColor: '#3B82F6',
      }
      setEvents([...events, newEvent])
      calendarApi.addEvent(newEvent)
    }
  }

  const handleEventClick = (clickInfo: any) => {
    if (confirm(`Delete event "${clickInfo.event.title}"?`)) {
      clickInfo.event.remove()
      setEvents(events.filter((e) => e.id !== clickInfo.event.id))
    }
  }

  const handleDatesSet = (dateInfo: any) => {
    setCurrentDate(dateInfo.start)
  }

  const handleEventDrop = (dropInfo: any) => {
    const updatedEvents = events.map((event) => {
      if (event.id === dropInfo.event.id) {
        return {
          ...event,
          start: dropInfo.event.start.toISOString(),
          end: dropInfo.event.end ? dropInfo.event.end.toISOString() : null,
        }
      }
      return event
    })
    setEvents(updatedEvents)
  }

  const handleEventResize = (resizeInfo: any) => {
    const updatedEvents = events.map((event) => {
      if (event.id === resizeInfo.event.id) {
        return {
          ...event,
          start: resizeInfo.event.start.toISOString(),
          end: resizeInfo.event.end ? resizeInfo.event.end.toISOString() : null,
        }
      }
      return event
    })
    setEvents(updatedEvents)
  }

  // Custom Day Header Component
  const CustomDayHeader = (date: any) => {
    const today = new Date()
    const isToday =
      date.date.getDate() === today.getDate() &&
      date.date.getMonth() === today.getMonth() &&
      date.date.getFullYear() === today.getFullYear()

    return (
      <div className='flex flex-col items-center py-2'>
        <span
          className={`text-sm font-semibold w-8 h-8 flex items-center justify-center rounded-full ${
            isToday ? 'bg-blue-600 text-white' : 'text-gray-700'
          }`}
        >
          {date.date.getDate()}
        </span>
      </div>
    )
  }

  // Custom Event Content
  const CustomEventContent = (eventInfo: any) => (
    <div className='px-2 py-1 text-xs font-medium truncate flex items-center'>
      <span className='w-2 h-2 rounded-full mr-2 bg-white opacity-80'></span>
      {eventInfo.event.title}
    </div>
  )

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden'>
          {/* Custom Header */}
          <div className='bg-white border-b border-gray-200 px-6 py-5'>
            <div className='flex items-center justify-between flex-wrap gap-4'>
              {/* Left Section - Navigation & Month Display */}
              <div className='flex items-center space-x-4'>
                {/* Menu Icon */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                >
                  <svg
                    className='w-6 h-6 text-gray-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </motion.button>

                {/* Navigation Arrows */}
                <div className='flex items-center space-x-1'>
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: 'rgb(243, 244, 246)',
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrev}
                    className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                  >
                    <svg
                      className='w-5 h-5 text-gray-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 19l-7-7 7-7'
                      />
                    </svg>
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: 'rgb(243, 244, 246)',
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNext}
                    className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                  >
                    <svg
                      className='w-5 h-5 text-gray-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Month & Year Display */}
                <AnimatePresence mode='wait'>
                  <motion.h1
                    key={currentDate.toISOString()}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className='text-2xl sm:text-3xl font-bold text-gray-800'
                  >
                    {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Right Section - View Options & Today Button */}
              <div className='flex items-center space-x-3 flex-wrap gap-2'>
                {/* Today Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleToday}
                  className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm'
                >
                  Today
                </motion.button>

                {/* View Selector */}
                <div className='flex items-center space-x-1 bg-gray-100 rounded-lg p-1'>
                  {[
                    { label: 'Day', value: 'timeGridDay' },
                    { label: 'Week', value: 'timeGridWeek' },
                    { label: 'Month', value: 'dayGridMonth' },
                    { label: 'Year', value: 'dayGridYear' },
                  ].map((view) => (
                    <motion.button
                      key={view.value}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleViewChange(view.value)}
                      className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-all ${
                        currentView === view.value
                          ? 'bg-white text-gray-800 shadow-sm'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      {view.label}
                    </motion.button>
                  ))}
                </div>

                {/* More Options */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                >
                  <svg
                    className='w-5 h-5 text-gray-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
                    />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Days of Week Header */}
            <div className='grid grid-cols-7 mt-5 pb-3 border-b border-gray-200'>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                (day, index) => (
                  <div
                    key={day}
                    className={`text-center text-xs sm:text-sm font-semibold py-2 uppercase tracking-wide ${
                      index === 0 || index === 6
                        ? 'text-red-500'
                        : 'text-gray-500'
                    }`}
                  >
                    {day}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* FullCalendar Component */}
          <div className='p-4 relative'>
            <style>{`
              .fc-col-header {
                display: none;
              }
            `}</style>
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView={currentView}
              headerToolbar={false}
              datesSet={handleDatesSet}
              selectable={true}
              select={handleDateSelect}
              eventClick={handleEventClick}
              editable={true}
              dayMaxEvents={true}
              height='auto'
              eventDisplay='block'
              events={events}
              // Completely remove day header content and hide the row
              dayHeaderContent={() => null}
              dayHeaderClassNames='hidden'
              dayCellClassNames={(date) => {
                const today = new Date()
                const isToday =
                  date.date.getDate() === today.getDate() &&
                  date.date.getMonth() === today.getMonth() &&
                  date.date.getFullYear() === today.getFullYear()
                const isWeekend =
                  date.date.getDay() === 0 || date.date.getDay() === 6
                return [
                  isToday ? 'bg-blue-50' : '',
                  isWeekend ? 'bg-gray-100/50' : '',
                ]
                  .filter(Boolean)
                  .join(' ')
              }}
              eventDrop={handleEventDrop}
              eventResize={handleEventResize}
              eventContent={CustomEventContent}
              allDaySlot={true}
              slotMinTime='06:00:00'
              slotMaxTime='22:00:00'
              nowIndicator={true}
              businessHours={{
                daysOfWeek: [1, 2, 3, 4, 5],
                startTime: '09:00',
                endTime: '18:00',
              }}
            />
          </div>
        </div>

        {/* Legend */}
        <div className='mt-6 flex items-center flex-wrap gap-4 text-sm text-gray-600'>
          <div className='flex items-center space-x-2'>
            <div className='w-3 h-3 bg-blue-600 rounded-full'></div>
            <span>Today</span>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-4 h-4 bg-blue-500 rounded'></div>
            <span>Team Meeting</span>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-4 h-4 bg-green-500 rounded'></div>
            <span>Project Review</span>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-4 h-4 bg-yellow-500 rounded'></div>
            <span>Client Call</span>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-4 h-4 bg-red-500 rounded'></div>
            <span>Workshop</span>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-4 h-4 bg-purple-500 rounded'></div>
            <span>Design Sprint</span>
          </div>
        </div>

        {/* Instructions Card */}
        <div className='mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200'>
          <h3 className='text-sm font-bold text-blue-800 mb-3 flex items-center'>
            <span className='mr-2'>💡</span> Tips for Using This Calendar
          </h3>
          <ul className='text-sm text-blue-700 space-y-2'>
            <li className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>Click and drag on any date/time to create a new event</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>Click on an existing event to delete it</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>Drag events to reschedule them</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>Resize events by dragging the edges</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>
                Use the view buttons to switch between Day, Week, Month, and
                Year views
              </span>
            </li>
          </ul>
        </div>

        {/* Installation Instructions */}
        <div className='mt-6 p-5 bg-gray-800 rounded-xl border border-gray-700'>
          <h3 className='text-sm font-bold text-white mb-3 flex items-center'>
            <span className='mr-2'>📦</span> Required Packages
          </h3>
          <div className='bg-gray-900 rounded-lg p-4 overflow-x-auto'>
            <code className='text-green-400 text-sm'>
              npm install @fullcalendar/react @fullcalendar/daygrid
              @fullcalendar/timegrid @fullcalendar/interaction
            </code>
          </div>
          <p className='text-gray-400 text-xs mt-3'>
            Make sure to install these packages before using this component in
            your Next.js project.
          </p>
        </div>
      </div>
    </div>
  )
}
