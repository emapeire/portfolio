import { ModeToggle } from './mode-toggle'

export function Header() {
  const navItems = [
    {
      title: 'About',
      label: 'about',
      url: '/#about'
    },
    {
      title: 'Career',
      label: 'career',
      url: '/#career'
    },
    {
      title: 'Projects',
      label: 'projects',
      url: '/#projects'
    },
    {
      title: 'Contact',
      label: 'contact',
      url: 'mailto:me@emapeire.xyz'
    }
  ]

  return (
    <header className='fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-4 gap-x-8'>
      <nav className='flex w-full max-w-2xl border text-sm font-semibold rounded-md text-neutral-800 dark:text-neutral-100 justify-center items-center'>
        {navItems.map((link) => (
          <a
            key={link.label}
            aria-label={link.label}
            href={link.url}
            className='relative block mx-4 my-2 transition-colors ease-in-out hover:text-neutral-600 dark:hover:text-neutral-300'
          >
            {link.title}
          </a>
        ))}
      </nav>
      <ModeToggle />
    </header>
  )
}
