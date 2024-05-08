import { CareerItem } from './career-item'
import { BookTextIcon } from 'lucide-react'
import { data } from '@/constants/index'

export function Career() {
  const { career } = data

  return (
    <>
      <h2 className='dark:text-neutral-100 text-neutral-800 flex gap-x-4 items-center text-3xl font-bold text-balance'>
        <BookTextIcon className='size-6 animate-pulse' />
        Career
      </h2>

      <ol className='relative border-s dark:border-neutral-600 border-neutral-400 ml-[11.5px] flex flex-col gap-y-8'>
        {career.map((item, index) => (
          <li key={index} className='ms-[30px]'>
            <CareerItem {...item} />
          </li>
        ))}
      </ol>
    </>
  )
}
