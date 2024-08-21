import { Link } from 'next-view-transitions'
import { useTranslations } from 'next-intl'
import { data, getNavItems } from '@/constants'

export function Footer() {
  const { avatar } = data
  const year = new Date().getFullYear()
  const t = useTranslations()
  const navItems = getNavItems(t)

  return (
    <footer className='footer flex justify-center items-center w-full mx-auto md:max-w-3xl'>
      <div className='w-full mx-auto md:flex md:items-center md:justify-between text-sm font-medium text-neutral-700 dark:text-neutral-300'>
        <p>
          © {year}
          <span className='ms-2 me-2'>•</span>
          <a
            href='https://link.emapeire.xyz'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline hover:underline-offset-4'
          >
            {avatar.name}
          </a>
          <span className='ms-2 me-2'>—</span>
          {t('footer.copyrights')}
        </p>

        <div className='flex flex-wrap items-center pt-2 md:pt-0'>
          {navItems.map((link, index) => (
            <div key={link.label}>
              <Link
                key={link.label}
                aria-label={link.label}
                href={link.url}
                className='hover:underline hover:underline-offset-4'
              >
                {link.title}
              </Link>
              {index < navItems.length - 1 && <span className='mx-2'>|</span>}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
