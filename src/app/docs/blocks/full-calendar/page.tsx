import { ComponentPreview } from '@/components/component-preview'
import type { CalendarEvent } from '@/lib/types/full-calendar.type'
import { CodeBlock } from '@/components/code-block'
import { FullCalendar } from '@/components/blocks/full-calendar/full-calendar'

export default function CalendarPage() {
  const events: CalendarEvent[] = [
    {
      id: '1',
      title: 'Team Meeting',
      start: new Date(new Date().setHours(10, 0, 0, 0)),
      end: new Date(new Date().setHours(11, 0, 0, 0)),
      description: 'Weekly sync with the team',
      color: '#3b82f6',
    },
    {
      id: '2',
      title: 'Lunch with Client',
      start: new Date(new Date().setHours(12, 30, 0, 0)),
      end: new Date(new Date().setHours(13, 30, 0, 0)),
      color: '#f59e0b',
    },
    {
      id: '3',
      title: 'Project Deadline',
      start: new Date(new Date().setDate(new Date().getDate() + 3)),
      end: new Date(new Date().setDate(new Date().getDate() + 3)),
      color: '#ef4444',
    },
    {
      id: '4',
      title: 'Code Review',
      start: new Date(new Date().setDate(new Date().getDate() + 5)),
      end: new Date(new Date().setDate(new Date().getDate() + 5)),
      color: '#10b981',
    },
  ]

  const usageCode = `import { FullCalendar } from "@/components/blocks/full-calendar";
import { CalendarEvent } from "@/components/blocks/full-calendar/types";

const events: CalendarEvent[] = [
  {
    id: "1",
    title: "Team Meeting",
    start: new Date(),
    end: new Date(),
    color: "#3b82f6",
  },
];

export default function Page() {
  return (
    <div className="h-[600px]">
      <FullCalendar events={events} />
    </div>
  );
}`

  return (
    <div className='container mx-auto py-10 space-y-10'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold tracking-tight'>
          Full Calendar Block
        </h1>
        <p className='text-muted-foreground text-lg'>
          A full-featured calendar component with month view, event management,
          and responsive design. Designed to look like a Shadcn UI block.
        </p>
      </div>

      <ComponentPreview
        title='Interactive Month View'
        component={
          <div className='h-[700px] w-full border rounded-xl overflow-hidden shadow-sm'>
            <FullCalendar events={events} />
          </div>
        }
        tsCode={usageCode}
      />

      {/* Introduction to the feature directory structure if needed */}
      <div className='prose dark:prose-invert max-w-none'>
        <h3>Block Implementation</h3>
        <p>
          The calendar block is composed of several files. Copy the code below
          into your project.
        </p>

        <h4 className='mt-8'>File Structure</h4>
        <div className='rounded-md bg-muted p-4 font-mono text-sm'>
          src/components/blocks/full-calendar/
          <br />
          ├── components/
          <br />
          │ ├── calendar-grid.tsx
          <br />
          │ └── calendar-header.tsx
          <br />
          ├── full-calendar.tsx
          <br />
          └── types.ts
        </div>

        <h4 className='mt-8'>types.ts</h4>
        <CodeBlock
          code={`export type CalendarEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  color?: string; // Optional color for the event
  description?: string;
};

export type CalendarViewType = 'month' | 'week' | 'day';`}
          language='typescript'
        />

        <h4 className='mt-8'>components/calendar-header.tsx</h4>
        <CodeBlock
          code={`import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
  onAddEvent?: () => void;
}

export function CalendarHeader({
  currentDate,
  onPrevMonth,
  onNextMonth,
  onToday,
  onAddEvent,
}: CalendarHeaderProps) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold tracking-tight">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <div className="flex items-center rounded-md border bg-background shadow-sm">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-l-md rounded-r-none border-r"
            onClick={onPrevMonth}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            className="h-8 rounded-none px-3 font-normal"
            onClick={onToday}
          >
            Today
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-l-none rounded-r-md border-l"
            onClick={onNextMonth}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {onAddEvent && (
          <Button onClick={onAddEvent} size="sm" className="h-9">
            <Plus className="mr-2 h-4 w-4" />
            New Event
          </Button>
        )}
      </div>
    </div>
  );
}`}
          language='tsx'
        />

        <h4 className='mt-8'>components/calendar-grid.tsx</h4>
        <CodeBlock
          code={`import { cn } from "@/lib/utils";
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { CalendarEvent } from "../types";

interface CalendarGridProps {
  currentDate: Date;
  events: CalendarEvent[];
  onDateClick?: (date: Date) => void;
  onEventClick?: (event: CalendarEvent) => void;
}

export function CalendarGrid({
  currentDate,
  events,
  onDateClick,
  onEventClick,
}: CalendarGridProps) {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="flex flex-col border rounded-lg overflow-hidden shadow-sm bg-background">
      <div className="grid grid-cols-7 border-b bg-muted/40 text-center text-sm font-medium text-muted-foreground">
        {weekDays.map((day) => (
          <div key={day} className="py-2.5">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 auto-rows-fr bg-muted/20">
        {days.map((day, dayIdx) => {
          const dayEvents = events.filter((event) => isSameDay(event.start, day));
          const isCurrentMonth = isSameMonth(day, monthStart);

          return (
            <div
              key={day.toString()}
              onClick={() => onDateClick?.(day)}
              className={cn(
                "min-h-[120px] p-2 border-b border-r bg-background transition-colors hover:bg-muted/10 cursor-pointer flex flex-col gap-1 relative group",
                !isCurrentMonth && "bg-muted/5 text-muted-foreground",
                (dayIdx + 1) % 7 === 0 && "border-r-0",
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full",
                    isToday(day)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground",
                    !isCurrentMonth && "text-muted-foreground/50",
                  )}
                >
                  {format(day, "d")}
                </span>
              </div>

              <div className="flex flex-col gap-1 mt-1 overflow-y-auto max-h-[100px] scrollbar-hide">
                {dayEvents.map((event) => (
                  <div
                    key={event.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      onEventClick?.(event);
                    }}
                    className={cn(
                      "px-2 py-1 text-xs rounded-md truncate font-medium border shadow-sm transition-all hover:opacity-80",
                      event.color ? "" : "bg-primary/10 text-primary border-primary/20",
                    )}
                    style={event.color ? { backgroundColor: \`\${event.color}20\`, color: event.color, borderColor: \`\${event.color}40\` } : {}}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}`}
          language='tsx'
        />

        <h4 className='mt-8'>full-calendar.tsx</h4>
        <CodeBlock
          code={`"use client";

import { addMonths, subMonths } from "date-fns";
import * as React from "react";
import { CalendarGrid } from "./components/calendar-grid";
import { CalendarHeader } from "./components/calendar-header";
import { CalendarEvent } from "./types";

interface FullCalendarProps {
  events?: CalendarEvent[];
  initialDate?: Date;
}

export function FullCalendar({
  events: initialEvents = [],
  initialDate = new Date()
}: FullCalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(initialDate);
  const [events, setEvents] = React.useState<CalendarEvent[]>(initialEvents);

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const handleToday = () => setCurrentDate(new Date());

  const handleDateClick = (date: Date) => {
    // Implement event creation logic here
  };

  const handleEventClick = (event: CalendarEvent) => {
    // Implement event preview logic here
    alert(\`Event: \${event.title}\`);
  };

  const handleAddEvent = () => {
    // Implement add event modal opening here
  };

  return (
    <div className="flex flex-col h-full w-full bg-background p-6">
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onToday={handleToday}
        onAddEvent={handleAddEvent}
      />
      <div className="flex-1">
        <CalendarGrid
          currentDate={currentDate}
          events={events}
          onDateClick={handleDateClick}
          onEventClick={handleEventClick}
        />
      </div>
    </div>
  );
}`}
          language='tsx'
        />
      </div>
    </div>
  )
}
