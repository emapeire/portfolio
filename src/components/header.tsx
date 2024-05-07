'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './mode-toggle'
import clsx from 'clsx'

export function Header() {
  const pathname = usePathname()

  const navItems = [
    { title: 'About', label: 'about', url: '/' },
    { title: 'Career', label: 'career', url: '/career' },
    { title: 'Projects', label: 'projects', url: '/projects' },
    { title: 'Contact', label: 'contact', url: '/contact' }
  ]

  return (
    <header className='fixed top-0 z-10 flex items-center justify-center w-full mx-auto bg-white dark:bg-black border-b py-2'>
      <nav className='flex justify-center items-center'>
        {navItems.map((link) => (
          <Link
            key={link.label}
            aria-label={link.label}
            href={link.url}
            className={clsx(
              'relative block mx-1 transition-colors ease-in-out py-2 md:px-4 px-2 rounded-md text-sm font-semibold text-neutral-800 dark:text-neutral-100',
              {
                'bg-neutral-100 dark:bg-neutral-800': pathname === link.url,
                'hover:bg-neutral-100 dark:hover:bg-neutral-800':
                  pathname !== link.url
              }
            )}
          >
            {link.title}
          </Link>
        ))}
        <div className='flex items-center ms-1'>
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}
