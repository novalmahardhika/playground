export function GridLayout() {
  return (
    <div className='grid grid-cols-3 gap-4 p-4 border-2 border-border rounded-lg bg-muted w-full max-w-md'>
      <div className='h-20 bg-primary border-2 border-border rounded shadow-[2px_2px_0px_0px_var(--color-border)]' />
      <div className='h-20 bg-secondary border-2 border-border rounded shadow-[2px_2px_0px_0px_var(--color-border)]' />
      <div className='h-20 bg-accent border-2 border-border rounded shadow-[2px_2px_0px_0px_var(--color-border)]' />
      <div className='col-span-2 h-20 bg-chart-4 border-2 border-border rounded shadow-[2px_2px_0px_0px_var(--color-border)]' />
      <div className='h-20 bg-chart-5 border-2 border-border rounded shadow-[2px_2px_0px_0px_var(--color-border)]' />
    </div>
  )
}
