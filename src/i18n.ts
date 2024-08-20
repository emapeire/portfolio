import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import type { AbstractIntlMessages } from 'next-intl'

export type Locale = (typeof locales)[number]

export const locales = ['en', 'es'] as const

export const defaultLocale: Locale = 'en'

async function loadMessages(locale: Locale): Promise<AbstractIntlMessages> {
  if (locale === 'en') {
    return (await import('./messages/en.json')).default
  } else if (locale === 'es') {
    return (await import('./messages/es.json')).default
  } else {
    notFound()
  }
}

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  const baseLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale

  if (!locales.includes(baseLocale)) notFound()

  const messages = await loadMessages(baseLocale)

  return {
    messages
  }
})
