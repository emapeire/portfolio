import Image from 'next/image'

export function Avatar() {
  return (
    <Image
      className='rounded-full mb-8 shadow-lg shadow-white/10 hover:scale-110 transition-transform duration-300 ease-in-out'
      height={28}
      width={28}
      src='images/avatar.png'
      alt='avatar'
    />
  )
}
