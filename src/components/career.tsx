import { CAREER as career } from '../data'
import { CareerItem } from './career-item'

export function Career() {
  return (
    <ol className='relative border-s border-slate-200 ml-[14.5px] flex gap-12'>
      {career.map((item) => (
        <li key={item.link} className='ms-6'>
          <CareerItem {...item} />
        </li>
      ))}
    </ol>
  )
}
