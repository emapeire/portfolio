import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export type Locale = (typeof locales)[number]

export const locales = ['en', 'es']

export const defaultLocale = 'en' satisfies Locale

export default getRequestConfig(async ({ locale }) => {
  const baseLocale = new Intl.Locale(locale).baseName

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(baseLocale)) notFound()

  return {
    messages: (
      await (locale === 'en'
        ? import('./messages/en.json')
        : import(`./messages/${locale}.json`))
    ).default
  }
})
