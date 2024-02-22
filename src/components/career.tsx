import { CAREER as career } from '../data'
import { CareerItem } from './career-item'

export function Career() {
  return (
    <ol className='relative border-s border-gray-100 ml-[14.5px] flex flex-col gap-16'>
      {career.map((item, index) => (
        <li key={index} className='ms-6'>
          <CareerItem {...item} />
        </li>
      ))}
    </ol>
  )
}
