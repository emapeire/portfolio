import { CareerItem } from './career-item'
import { BriefcaseIcon } from 'lucide-react'
import { data } from '@/constants'

export function Career() {
  const { career } = data

  return (
    <>
      <h2 className='text-neutral-100 flex gap-x-2 items-center text-3xl md:text-4xl font-bold pb-12 text-balance'>
        <BriefcaseIcon className='size-8' />
        Career
      </h2>

      <ol className='relative border-s border-white ml-[14.5px] flex flex-col gap-16'>
        {career.map((item, index) => (
          <li key={index} className='ms-6'>
            <CareerItem {...item} />
          </li>
        ))}
      </ol>
    </>
  )
}
