import { Badge } from './ui/badge'

export function SectionTitleMain() {
  return (
    <div className='flex flex-col md:flex-row md:gap-5 gap-2 pb-8'>
      <h1 className='flex items-center text-gray-100 text-4xl md:text-5xl font-bold text-balance'>
        Hey, I&apos;m Emanuel Peire
      </h1>
      <a
        href='https://linkedin.com/in/emanuelpeire'
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center mr-auto ml-0 hover:scale-105 transition-all ease-in-out'
      >
        <Badge>Available for hire</Badge>
      </a>
    </div>
  )
}
