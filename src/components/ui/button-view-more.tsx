import { ArrowIcon } from '@/components/icons/arrow'

export function ButtonViewMore({ href }: { href: string }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='inline-flex items-center px-4 py-2 mt-4 text-sm md:text-base font-medium text-slate-900 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-slate-200 focus:text-blue-700'
    >
      View more
      <ArrowIcon />
    </a>
  )
}
