'use client'

import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem
} from '@/components/ui/dropdown-menu'
import { UsFlagIcon } from '@/components/icons/lang/us-flag'
import { ArFlagIcon } from '@/components/icons/lang/ar-flag'
import { type Locale } from '@/i18n'

export function LangSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const t = useTranslations()

  function handleLocaleChange(newLocale: Locale): void {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`
    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label={t('lang-switcher.label')}
          size={null}
          variant='ghost'
          className='w-full mx-auto flex justify-between px-2 py-1 rounded'
        >
          <DropdownMenuLabel className='p-0'>
            {t('lang-switcher.label')}
          </DropdownMenuLabel>

          {locale === 'en' ? (
            <UsFlagIcon className='h-[1.5rem] w-[1.5rem]' />
          ) : (
            <ArFlagIcon className='h-[1.5rem] w-[1.5rem]' />
          )}
          <span className='sr-only'>{t('lang-switcher.label')}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='center' side='bottom'>
        <DropdownMenuCheckboxItem
          checked={locale === 'en'}
          onClick={() => {
            handleLocaleChange('en')
          }}
        >
          {t('lang-switcher.options.en')}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={locale === 'es'}
          onClick={() => {
            handleLocaleChange('es')
          }}
        >
          {t('lang-switcher.options.es')}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
