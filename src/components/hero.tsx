import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
// import { Button } from './ui/button'
import { BadgeCheckIcon } from 'lucide-react'
import type { AvatarProps, AboutProps, LinksProps } from '@/types'

export function Hero({
  avatar,
  about,
  links
}: {
  avatar: AvatarProps
  about: AboutProps
  links: LinksProps[]
}) {
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
          className='hidden md:block hover:scale-105 transition-all ease-in-out duration-300'
        >
          <Badge className='font-mono font-bold text-xs'>Available</Badge>
        </a>
        <a
          href='https://linkedin.com/in/emanuelpeire'
          target='_blank'
          rel='noopener noreferrer'
          className='md:hidden block hover:scale-105 transition-all ease-in-out duration-300'
        >
          <BadgeCheckIcon className='size-8 dark:fill-blue-400 fill-blue-300' />
        </a>
      </div>

      <div className='flex flex-col font-mono gap-4 dark:text-neutral-200 text-neutral-800 text-pretty'>
        <h2>{about.title}</h2>
        <h3>{about.description}</h3>
      </div>

      <nav className='flex gap-x-4'>
        {links.map((link) => (
          <a
            key={link.title}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex justify-center items-center border'
          >
            <p>{link.title}</p>
          </a>
        ))}
      </nav>

      {/* <a
          href='https://x.com/emapeire'
          target='_blank'
          rel='noopener noreferrer'
          className='flex justify-center items-center border'
        >
          <XIcon className='size-6' />
          The everything app
        </a>

        <a
          href='https://github.com/emapeire'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>
            <GitHubIcon className='size-6' />
            GitHub
          </Button>
        </a>

        <a
          href='https://linkedin.com/in/emanuelpeire'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>
            <LinkedInIcon className='size-6' />
            LinkedIn
          </Button>
        </a>

        <a
          href='mailto:me@emapeire.xyz'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>
            <MailIcon className='md:size-8 size-6' />
            Email
          </Button>
        </a>
      </nav> */}
    </>
  )
}
