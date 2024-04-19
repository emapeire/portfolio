'use client'

import { useEffect, useState } from 'react'
import { ModeToggle } from './mode-toggle'
import clsx from 'clsx'

export function Header() {
  const [currentHash, setCurrentHash] = useState(
    typeof window !== 'undefined' ? window.location.hash : ''
  )

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }
    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const navItems = [
    {
      title: 'About',
      label: 'about',
      url: '#about'
    },
    {
      title: 'Career',
      label: 'career',
      url: '#career'
    },
    {
      title: 'Projects',
      label: 'projects',
      url: '#projects'
    },
    {
      title: 'Contact',
      label: 'contact',
      url: '#contact'
    }
  ]

  return (
    <header className='fixed top-0 z-10 flex items-center justify-center w-full mx-auto bg-white dark:bg-black border-b py-2'>
      <nav className='flex justify-center items-center'>
        {navItems.map((link) => (
          <a
            key={link.label}
            aria-label={link.label}
            href={link.url}
            className={clsx(
              'relative block mx-1 transition-colors ease-in-out py-2 px-4 rounded-sm text-sm font-semibold text-neutral-800 dark:text-neutral-100',
              currentHash === link.url
                ? 'bg-neutral-100 dark:bg-neutral-800'
                : '',
              currentHash !== link.url
                ? 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
                : ''
            )}
          >
            {link.title}
          </a>
        ))}
        <div className='flex items-center ms-2'>
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}
