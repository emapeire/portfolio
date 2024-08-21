import { useTranslations } from 'next-intl'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { Button } from '../ui/button'
import { BadgeCheckIcon } from 'lucide-react'
import { data } from '@/constants'

export function Hero() {
  const { avatar, links } = data
  const t = useTranslations()

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
            <AvatarImage alt={avatar.name} src={'/assets/avatar.webp'} />
            <AvatarFallback className='font-mono font-bold'>
              {avatar.initials}
            </AvatarFallback>
          </Avatar>
        </a>
      </div>

      <div className='flex items-center flex-row gap-4'>
        <h1 className='flex dark:text-neutral-100 text-neutral-900 text-4xl font-bold text-balance'>
          {avatar.name}
        </h1>
        <Button
          variant='default'
          size={null}
          className='font-mono font-bold text-xs px-2 py-1 rounded-full hover:scale-105 transition-all ease-in-out duration-300'
          asChild
        >
          <a
            href='https://linkedin.com/in/emanuelpeire'
            target='_blank'
            rel='noopener noreferrer'
            className='hidden md:flex'
          >
            {t('hero.available')}
          </a>
        </Button>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href='https://linkedin.com/in/emanuelpeire'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={t('hero.available')}
              className='md:hidden flex rounded-full hover:scale-105 transition-all ease-in-out duration-300'
            >
              <BadgeCheckIcon className='size-6 dark:fill-blue-400 fill-blue-300 stroke-[1.5]' />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t('hero.available')}</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className='flex flex-col font-mono gap-4 dark:text-neutral-200 text-neutral-800 text-pretty'>
        <h2>{t('hero.about.title')}</h2>
        <h3>{t('hero.about.description')}</h3>
      </div>

      <nav className='flex gap-x-4 pt-4'>
        {links.map((link) => (
          <Tooltip key={link.title}>
            <TooltipTrigger asChild>
              <Button
                variant='outline'
                size={null}
                key={link.title}
                className='p-2 shadow rounded-lg'
                asChild
              >
                <a
                  key={link.title}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={link.title}
                  className='flex justify-center items-center md:gap-2'
                >
                  <link.icon className='size-6 stroke-[1.5]' />
                  <p className='hidden md:block'>{link.title}</p>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side='bottom' className='md:hidden'>
              <p>{link.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </>
  )
}
