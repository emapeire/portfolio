'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const t = useTranslations()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          aria-label={t('mode-toggle.label')}
          size='sm'
          className='gap-2'
        >
          <DropdownMenuLabel className='p-0'>
            {t('mode-toggle.label')}
          </DropdownMenuLabel>

          <Sun className='h-[1.5rem] w-[1.5rem] stroke-[1.5] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='h-[1.5rem] w-[1.5rem] stroke-[1.5] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />

          <span className='sr-only'>{t('mode-toggle.label')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='center' side='bottom'>
        <DropdownMenuCheckboxItem
          checked={theme === 'light'}
          onClick={() => setTheme('light')}
        >
          {t('mode-toggle.light')}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === 'dark'}
          onClick={() => setTheme('dark')}
        >
          {t('mode-toggle.dark')}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === 'system'}
          onClick={() => setTheme('system')}
        >
          {t('mode-toggle.system')}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
