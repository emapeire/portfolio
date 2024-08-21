'use client'

import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Link } from 'next-view-transitions'
import { ModeToggle } from './mode-toggle'
import { LangSwitcher } from './lang-switcher'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './ui/dropdown-menu'
import { getNavItems } from '@/constants'
import { Cog } from 'lucide-react'
import clsx from 'clsx'

export function Header() {
  const pathname = usePathname()
  const t = useTranslations()
  const navItems = getNavItems(t)

  return (
    <header className='fixed top-0 z-10 flex items-center justify-center w-full mx-auto bg-white dark:bg-black border-b py-2'>
      <div className='flex items-center justify-between w-full md:max-w-3xl mx-4'>
        <nav className='flex justify-center items-center'>
          {navItems.map((link) => (
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-label={t('header.settings')}
              variant='ghost'
              size='icon'
              className='relative size-9 transition-transform duration-300 group'
            >
              <Cog className='h-[1.5rem] w-[1.5rem] stroke-[1.5] transform group-hover:rotate-45 transition-transform duration-300' />
              <span className='sr-only'>{t('header.settings')}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' side='bottom' className='mt-4'>
            <LangSwitcher />
            <DropdownMenuSeparator />
            <ModeToggle />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
