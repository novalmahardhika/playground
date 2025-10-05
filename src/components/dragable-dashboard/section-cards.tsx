'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { TrendingDown, TrendingUp } from 'lucide-react'
import {
  dataMetricCard,
  type DataMetricCardType,
} from '@/lib/data-source/dragable-dashboard/data-card'
import { arrayMove, SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { DragEndEvent } from '@dnd-kit/core'
import {
  closestCenter,
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { restrictToWindowEdges } from '@dnd-kit/modifiers'

export function SectionCards() {
  const [items, setItems] = useState<DataMetricCardType[]>(dataMetricCard)
  const mouseSensor = useSensor(MouseSensor)
  const touchSensor = useSensor(TouchSensor)
  const sensors = useSensors(mouseSensor, touchSensor)

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over || active.id === over.id) return
    setItems((items) => {
      const oldIndex = items.findIndex((item) => item.id === active.id)
      const newIndex = items.findIndex((item) => item.id === over.id)
      return arrayMove(items, oldIndex, newIndex)
    })
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToWindowEdges]}
    >
      <SortableContext items={items.map((item) => item.id)}>
        <div className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4'>
          {items.map((item) => (
            <CardItem key={item.id} {...item} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}

type CardItemProps = {
  id: string
  description: string
  metric: string
  trend: 'up' | 'down'
  trendPercentage: string
  trendText: string
  trendSubtext: string
}

function CardItem({
  id,
  description,
  metric,
  trend,
  trendPercentage,
  trendText,
  trendSubtext,
}: CardItemProps) {
  const {
    setNodeRef,
    attributes,
    transform,
    isDragging,
    transition,
    listeners,
  } = useSortable({
    id: id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: 'grab',
  }

  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown
  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className='@container/card'
    >
      <CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
          {metric}
        </CardTitle>
        <CardAction>
          <Badge variant='outline'>
            <TrendIcon />
            {trendPercentage}
          </Badge>
        </CardAction>
      </CardHeader>
      <CardFooter className='flex-col items-start gap-1.5 text-sm'>
        <div className='line-clamp-1 flex gap-2 font-medium'>
          {trendText} <TrendIcon className='size-4' />
        </div>
        <div className='text-muted-foreground'>{trendSubtext}</div>
      </CardFooter>
    </Card>
  )
}
