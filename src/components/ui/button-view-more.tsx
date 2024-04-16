import { ArrowIcon } from '@/components/icons/arrow'

export function ButtonViewMore({ href }: { href: string }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='inline-flex items-center px-4 py-2 mt-4 text-sm md:text-base font-medium text-neutral-900 bg-white border rounded-xl hover:bg-neutral-100 hover:text-blue-800 focus:z-10 focus:ring-4 focus:outline-none focus:ring-neutral-200 focus:text-blue-800'
    >
      View more
      <ArrowIcon className='ms-2 size-3' />
    </a>
  )
}
