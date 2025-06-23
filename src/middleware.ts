import createMiddleware from 'next-intl/middleware'
import { type NextRequest, type NextResponse } from 'next/server'
import { locales, defaultLocale } from '@/i18n'

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'never'
})

function middleware(req: NextRequest): NextResponse {
  return nextIntlMiddleware(req)
}

export default middleware

export const config = {
  // match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
}
