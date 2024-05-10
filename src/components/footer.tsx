import { Link } from 'next-view-transitions'
import { links } from '@/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='flex justify-center items-center w-full mx-auto md:max-w-3xl'>
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
            Emanuel Peire
          </a>
          <span className='ms-2 me-2'>—</span>
          All rights reserved.
        </p>

        <div className='flex flex-wrap items-center pt-2 md:pt-0'>
          {links.map((link) => (
            <div key={link.label}>
              <Link
                key={link.label}
                aria-label={link.label}
                href={link.url}
                className='hover:underline hover:underline-offset-4'
              >
                {link.title}
              </Link>
              <span className='mx-2'>|</span>
            </div>
          ))}
          <a
            id='contact'
            href='mailto:me@emapeire.xyz'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline hover:underline-offset-4'
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
