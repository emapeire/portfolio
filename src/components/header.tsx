'use client'

import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Link } from 'next-view-transitions'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import { LangSwitcher } from './lang-switcher'
import clsx from 'clsx'

export function Header() {
  const pathname = usePathname()
  const t = useTranslations()

  const navItems = [
    {
      title: t('header.about.title'),
      label: t('header.about.label'),
      url: t('header.about.link')
    },
    {
      title: t('header.career.title'),
      label: t('header.career.label'),
      url: t('header.career.link')
    },
    {
      title: t('header.projects.title'),
      label: t('header.projects.label'),
      url: t('header.projects.link')
    },
    {
      title: t('header.contact.title'),
      label: t('header.contact.label'),
      url: t('header.contact.link')
    }
  ]

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
        <div className='flex items-center md:gap-x-2 gap-x-1'>
          <LangSwitcher />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
