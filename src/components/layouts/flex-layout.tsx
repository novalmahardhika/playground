export function FlexLayout() {
  return (
    <div className='flex flex-wrap gap-4 p-4 border-2 border-border rounded-lg bg-muted w-full max-w-md'>
      <div className='flex-1 min-w-[100px] h-20 bg-primary border-2 border-border rounded shadow-[2px_2px_0px_0px_var(--color-border)]' />
      <div className='flex-[2] min-w-[150px] h-20 bg-secondary border-2 border-border rounded shadow-[2px_2px_0px_0px_var(--color-border)]' />
      <div className='flex-1 min-w-[100px] h-20 bg-accent border-2 border-border rounded shadow-[2px_2px_0px_0px_var(--color-border)]' />
    </div>
  )
}
