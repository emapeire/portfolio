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
    <header className='fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-4'>
      <nav className='nav-header flex px-4 py-1 md:px-48 text-sm font-semibold rounded-md text-neutral-800 dark:text-neutral-100 justify-center items-center'>
        {navItems.map((link) => (
          <a
            key={link.label}
            aria-label={link.label}
            href={link.url}
            className='relative block mx-1 transition-colors ease-in-out py-2 px-4 rounded-sm hover:dark:bg-neutral-800 hover:bg-neutral-100'
          >
            {link.title}
          </a>
        ))}
        <div className='flex items-center ms-1'>
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}
