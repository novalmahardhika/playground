import { Sidebar } from '@/components/sidebar'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen bg-background font-sans'>
      <header className='sticky top-0 z-50 w-full border-b-2 border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-16 items-center justify-between px-4 md:px-6'>
          <div className='flex items-center gap-2 font-bold text-xl tracking-tighter'>
            <Sheet>
              <SheetTitle className='hidden'>menu</SheetTitle>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className='md:hidden mr-2'>
                  <Menu className='h-5 w-5' />
                  <span className='sr-only'>Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='left' className='w-[240px] p-0'>
                <div className='h-full overflow-y-auto p-6'>
                  <Sidebar />
                </div>
              </SheetContent>
            </Sheet>
            <Link href='/' className='flex items-center gap-2'>
              <div className='h-8 w-8 bg-primary border-2 border-border rounded-none shadow-[2px_2px_0px_0px_var(--color-border)]'></div>
              PLAYGROUND
            </Link>
          </div>
          <nav className='flex items-center gap-4'>
            <Button
              variant='ghost'
              size='sm'
              asChild
              className='hidden sm:flex'
            >
              <Link href='/'>Home</Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
        <aside className='fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto border-r-2 border-border'>
          <Sidebar />
        </aside>
        <main className='relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]'>
          <div className='mx-auto w-full min-w-0 px-4 md:px-6'>{children}</div>
        </main>
      </div>
    </div>
  )
}
