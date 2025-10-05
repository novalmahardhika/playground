export type DataMetricCardType = {
  id: string
  description: string
  metric: string
  trend: 'up' | 'down'
  trendPercentage: string
  trendText: string
  trendSubtext: string
}

export const dataMetricCard: DataMetricCardType[] = [
  {
    id: 'metric-1',
    description: 'Total Revenue',
    metric: '$1,250.00',
    trend: 'up',
    trendPercentage: '+12.5%',
    trendText: 'Trending up this month',
    trendSubtext: 'Visitors for the last 6 months',
  },
  {
    id: 'metric-2',
    description: 'New Customers',
    metric: '1,234',
    trend: 'down',
    trendPercentage: '-20%',
    trendText: 'Down 20% this period',
    trendSubtext: 'Acquisition needs attention',
  },
  {
    id: 'metric-3',
    description: 'Active Accounts',
    metric: '45,678',
    trend: 'up',
    trendPercentage: '+12.5%',
    trendText: 'Strong user retention',
    trendSubtext: 'Engagement exceed targets',
  },
  {
    id: 'metric-4',
    description: 'Pending Orders',
    metric: '567',
    trend: 'down',
    trendPercentage: '-5%',
    trendText: 'Slightly down from last week',
    trendSubtext: 'Operations is still running smoothly',
  },
]
