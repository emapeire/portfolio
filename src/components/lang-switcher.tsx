'use client'

import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem
} from '@/components/ui/dropdown-menu'
import { EnFlagIcon } from '@/components/icons/lang/en-flag'
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
    <div className='ml-2'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            aria-label='Language switcher'
            className='rounded-full'
            size='icon'
            variant='ghost'
          >
            {locale === 'en' ? (
              <EnFlagIcon className='h-[1.5rem] w-[1.5rem]' />
            ) : (
              <ArFlagIcon className='h-[1.5rem] w-[1.5rem]' />
            )}
            <span className='sr-only'>Language switcher</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align='end' className='mt-2'>
          <DropdownMenuLabel>{t('lang-switcher.label')}</DropdownMenuLabel>
          <DropdownMenuSeparator />

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
    </div>
  )
}
