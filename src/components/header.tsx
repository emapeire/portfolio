import { ButtonHeader } from './ui/button-header'

export function Header() {
  return (
    <header className='flex justify-center font-medium text-base items-center pt-16 pb-32 md:pb-40 w-full mx-auto'>
      <nav className='flex flex-row gap-x-6 md:gap-x-12 text-gray-100 items-center justify-center text-center border border-white/10 bg-white/5 shadow-xl shadow-white/5 rounded-xl'>
        <ButtonHeader href='#about'>About</ButtonHeader>
        <ButtonHeader href='#career'>Career</ButtonHeader>
        <ButtonHeader href='#projects'>Projects</ButtonHeader>
      </nav>
    </header>
  )
}
