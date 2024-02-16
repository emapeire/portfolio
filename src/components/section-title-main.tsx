import { Badge } from './ui/badge'

export function SectionTitleMain() {
  return (
    <h1 className='text-gray-100 text-4xl md:text-5xl font-bold flex flex-row gap-x-4 pb-12 text-balance items-center'>
      Hey, I&apos;m Emanuel Peire
      <a
        href='https://linkedin.com/in/emanuelpeire'
        target='_blank'
        rel='noopener noreferrer'
        className='flex justify-center items-center'
      >
        <Badge>Available for hire</Badge>
      </a>
    </h1>
  )
}
