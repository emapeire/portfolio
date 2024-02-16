import Image from 'next/image'

export function Avatar() {
  return (
    <Image
      className='rounded-full mb-8 shadow-xl shadow-white/5 hover:scale-105 transition-all duration-300 ease-in-out'
      height={112}
      width={112}
      src='/images/avatar.png'
      alt='avatar'
    />
  )
}
