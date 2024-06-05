'use client'

import { usePathname } from 'next/navigation'
import { Link } from 'next-view-transitions'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import clsx from 'clsx'
import { navLinks } from '@/constants'

export function Header() {
  const pathname = usePathname()

  return (
    <header className='fixed top-0 z-10 flex items-center justify-center w-full mx-auto bg-white dark:bg-black border-b py-2'>
      <div className='flex items-center justify-between w-full md:max-w-3xl mx-4'>
        <nav className='flex justify-center items-center'>
          {navLinks.map((link) => (
            <Button asChild variant='ghost' size={null} key={link.label}>
              <Link
                key={link.label}
                aria-label={link.label}
                href={link.url}
                className={clsx(
                  'relative block me-2 py-2 md:px-4 px-2 font-semibold',
                  {
                    'bg-neutral-100 dark:bg-neutral-800': pathname === link.url,
                    'hover:bg-neutral-100 dark:hover:bg-neutral-800':
                      pathname !== link.url
                  }
                )}
              >
                {link.title}
              </Link>
            </Button>
          ))}
        </nav>
        <div className='flex items-center'>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
