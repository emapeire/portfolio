import { ButtonViewMore } from './button-view-more'
import { type CareerProps } from '@/types'

export function CareerItem({
  link,
  company,
  title,
  start,
  end,
  description
}: CareerProps) {
  return (
    <>
      <div className='absolute size-3 dark:bg-neutral-600 bg-neutral-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-black' />
      <time className='text-sm font-mono leading-none text-neutral-800 dark:text-neutral-200'>
        {start} — {end}
      </time>
      <h3 className='text-xl mt-2 font-bold text-neutral-900 dark:text-neutral-100'>
        {company}
      </h3>
      <div className='flex items-center my-2'>
        <h4 className='text-lg font-medium dark:text-neutral-100 text-neutral-900'>
          {title}
        </h4>
      </div>
      <p className='dark:text-neutral-200 text-neutral-800 text-pretty font-mono'>
        {description}
      </p>
      {link && <ButtonViewMore href={link} />}
    </>
  )
}
