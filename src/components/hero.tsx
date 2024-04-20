import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
// import { Button } from './ui/button'
import { BadgeCheckIcon } from 'lucide-react'
import { data } from '../constants'
import { Button } from './ui/button'

export function Hero() {
  const { avatar, about, links } = data

  return (
    <>
      <div className='flex flex-row'>
        <a
          href='https://github.com/emapeire'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full'
        >
          <Avatar className='size-28 shadow border'>
            <AvatarImage alt={avatar.name} src={'/images/avatar.png'} />
            <AvatarFallback className='font-mono font-bold'>
              {avatar.initials}
            </AvatarFallback>
          </Avatar>
        </a>
      </div>

      <div className='flex items-center flex-row gap-4'>
        <h1 className='flex dark:text-neutral-100 text-neutral-900 text-4xl font-bold text-balance'>
          Emanuel Peire
        </h1>
        <a
          href='https://linkedin.com/in/emanuelpeire'
          target='_blank'
          rel='noopener noreferrer'
          className='hidden md:flex'
        >
          <Badge
            variant='default'
            className='font-mono font-bold text-xs hover:bg-blue-100 hover:scale-105 transition-all ease-in-out duration-300'
          >
            Available
          </Badge>
        </a>
        <a
          href='https://linkedin.com/in/emanuelpeire'
          target='_blank'
          rel='noopener noreferrer'
          className='md:hidden flex hover:scale-105 transition-all ease-in-out duration-300'
        >
          <BadgeCheckIcon className='size-8 dark:fill-blue-400 fill-blue-200' />
        </a>
      </div>

      <div className='flex flex-col font-mono gap-4 dark:text-neutral-200 text-neutral-800 text-pretty'>
        <h3>{about.title}</h3>
        <h3>{about.description}</h3>
      </div>

      <nav className='flex gap-x-4'>
        {links.map((link) => (
          <Button variant='secondary' key={link.title} className='px-2' asChild>
            <a
              key={link.title}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-center items-center md:gap-2'
            >
              <link.icon className='size-6' />
              <p className='hidden md:block'>{link.title}</p>
            </a>
          </Button>
        ))}
      </nav>
    </>
  )
}
