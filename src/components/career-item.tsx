import { type CareerProps } from '@/types'
import { ButtonViewMore } from './ui/button-view-more'

export function CareerItem({
  link,
  title,
  start,
  end,
  description
}: CareerProps) {
  return (
    <>
      <div className='absolute w-3 h-3 bg-slate-200 rounded-full mt-1.5 -start-1.5 border border-white'></div>
      <time className='text-lg font-normal leading-none text-slate-300'>
        {start} to {end}
      </time>
      <h3 className='text-xl md:text-2xl mt-2 mb-4 font-bold text-blue-200'>
        {title}
      </h3>
      <p className='mb-4 text-lg md:text-xl font-normal text-slate-300 text-pretty'>
        {description}
      </p>
      <ButtonViewMore href={link} />
    </>
  )
}
