import { ButtonHeader } from './ui/button-header'

export function Header() {
  return (
    <header className='flex justify-center font-medium text-sm md:text-base items-center pt-16 md:pb-32 pb-24 w-full xl:w-[1120px] mx-auto'>
      <nav className='flex flex-row gap-x-6 md:gap-x-12 text-gray-200 items-center'>
        <ButtonHeader href='#about'>About</ButtonHeader>
        <ButtonHeader href='#career'>Career</ButtonHeader>
        <ButtonHeader href='#projects'>Projects</ButtonHeader>
      </nav>
    </header>
  )
}
