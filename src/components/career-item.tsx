import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ArrowRightIcon } from 'lucide-react'
import { type CareerProps } from '@/types'

export function CareerItem({
  link,
  company,
  title,
  start,
  end,
  description,
  badges
}: CareerProps) {
  return (
    <>
      <div className='absolute size-3 dark:bg-neutral-600 bg-neutral-400 rounded-full mt-[6.5px] -start-[6.5px] border border-white dark:border-black' />
      <time className='text-sm font-mono leading-none text-neutral-800 dark:text-neutral-200'>
        {start} — {end}
      </time>
      <h3 className='text-xl mt-1 font-bold text-neutral-900 dark:text-neutral-100'>
        {company}
      </h3>
      <Badge variant='outline' className='shadow my-2'>
        {badges}
      </Badge>
      <h4 className='text-lg font-medium dark:text-neutral-100 text-neutral-900'>
        {title}
      </h4>
      <p className='mt-1 dark:text-neutral-400 text-neutral-600 text-pretty font-mono'>
        {description}
      </p>

      {link && (
        <Button
          variant='default'
          size={null}
          className='shadow mt-4 p-2'
          asChild
        >
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center'
          >
            <p className='font-medium'>View more</p>
            <ArrowRightIcon className='ms-2 size-4' />
          </a>
        </Button>
      )}
    </>
  )
}
