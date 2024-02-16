import { type AboutProps } from '@/types'

export function About({ title, description }: AboutProps) {
  return (
    <>
      <h2 className='text-blue-200'>{title}</h2>
      <h2>{description}</h2>
    </>
  )
}
