import { type CareerProps } from '@/types'
import { ButtonViewMore } from './button-view-more'
import { ArrowIcon } from './icons/arrow'

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
      <div className='absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-white' />
      <time className='text-lg font-normal leading-none text-neutral-200'>
        {start} - {end}
      </time>
      <h3 className='text-xl md:text-2xl mt-4 mb-2 font-bold text-neutral-100'>
        {company}
      </h3>
      <div className='flex md:items-center items-baseline my-2'>
        <ArrowIcon className='me-2 size-3 min-h-3 min-w-3' />
        <h4 className='text-lg md:text-xl font-bold text-white'>{title}</h4>
      </div>
      <p className='text-lg md:text-xl font-normal text-neutral-200 text-pretty'>
        {description}
      </p>
      {link && <ButtonViewMore href={link} />}
    </>
  )
}
