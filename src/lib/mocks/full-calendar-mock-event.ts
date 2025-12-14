export type CalendarEvent = {
  id: string
  title: string
  start: string | Date
  end: string | Date

  description?: string
  status?: 'todo' | 'in_progress' | 'done'
  priority?: 'low' | 'medium' | 'high'

  user?: {
    id: string
    name: string
    avatar?: string
  }

  /** semantic color (not hex) */
  color?: 'red' | 'blue' | 'sky' | 'emerald' | 'amber' | 'violet'
}

export const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Daily Standup',
    start: '2025-12-16T09:00:00',
    end: '2025-12-16T09:30:00',
    status: 'done',
    priority: 'low',
    color: 'sky',
    user: {
      id: 'u1',
      name: 'Noval Mahardhika',
    },
  },
  {
    id: '2',
    title: 'ERP Inventory Review',
    start: '2025-12-16T10:00:00',
    end: '2025-12-16T11:30:00',
    status: 'in_progress',
    priority: 'high',
    color: 'red',
    user: {
      id: 'u2',
      name: 'Andi Pratama',
    },
  },
  {
    id: '3',
    title: 'Backend Sync',
    start: '2025-12-17T13:00:00',
    end: '2025-12-17T15:00:00',
    status: 'todo',
    priority: 'medium',
    color: 'emerald',
    user: {
      id: 'u1',
      name: 'Noval Mahardhika',
    },
  },
  {
    id: '4',
    title: 'Multi-day Sprint',
    start: '2025-12-18',
    end: '2025-12-21',
    status: 'in_progress',
    priority: 'high',
    color: 'violet',
  },
  {
    id: '5',
    title: 'Database Optimization',
    start: '2025-12-19T09:00:00',
    end: '2025-12-19T11:00:00',
    status: 'todo',
    priority: 'high',
    color: 'amber',
    user: {
      id: 'u3',
      name: 'Budi Santoso',
    },
  },
  {
    id: '6',
    title: 'Frontend UI Polish',
    start: '2025-12-19T13:00:00',
    end: '2025-12-19T15:30:00',
    status: 'in_progress',
    priority: 'medium',
    color: 'blue',
    user: {
      id: 'u4',
      name: 'Siti Rahmawati',
    },
  },
  {
    id: '7',
    title: 'Auth Flow Refactor',
    start: '2025-12-20T10:00:00',
    end: '2025-12-20T12:00:00',
    status: 'done',
    priority: 'medium',
    color: 'emerald',
    user: {
      id: 'u5',
      name: 'Rizky Kurniawan',
    },
  },
  {
    id: '8',
    title: 'Client Demo Preparation',
    start: '2025-12-20T14:00:00',
    end: '2025-12-20T16:00:00',
    status: 'todo',
    priority: 'high',
    color: 'red',
    user: {
      id: 'u6',
      name: 'Dewi Lestari',
    },
  },
  {
    id: '9',
    title: 'API Contract Review',
    start: '2025-12-21T09:30:00',
    end: '2025-12-21T10:30:00',
    status: 'in_progress',
    priority: 'low',
    color: 'sky',
    user: {
      id: 'u7',
      name: 'Agus Wijaya',
    },
  },
  {
    id: '10',
    title: 'Sprint Retrospective',
    start: '2025-12-21T15:00:00',
    end: '2025-12-21T16:30:00',
    status: 'done',
    priority: 'low',
    color: 'violet',
    user: {
      id: 'u8',
      name: 'Lina Kartika',
    },
  },
]
