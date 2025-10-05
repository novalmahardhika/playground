import { ChartAreaInteractive } from '@/components/dragable-dashboard/chart-area-interactive'
import { DataTable } from '@/components/dragable-dashboard/data-table'
import { SectionCards } from '@/components/dragable-dashboard/section-cards'
import { AppSidebar } from '@/components/dragable-dashboard/side-bar'
import { SiteHeader } from '@/components/dragable-dashboard/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import data from '@/lib/data-source/dragable-dashboard/data.json'
export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant='inset' />
      <SidebarInset>
        <SiteHeader />
        <div className='flex flex-1 flex-col'>
          <div className='@container/main flex flex-1 flex-col gap-2'>
            <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
              <SectionCards />
              <div className='px-4 lg:px-6'>
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
