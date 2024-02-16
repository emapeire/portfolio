import { ButtonHeader } from './ui/button-header'

export function Header() {
  return (
    <header className='flex justify-center font-medium text-base items-center pt-8 pb-32 w-full mx-auto'>
      <nav className='flex flex-row gap-x-6 md:gap-x-12 text-gray-200 items-center'>
        <ButtonHeader href='#about'>About</ButtonHeader>
        <ButtonHeader href='#career'>Career</ButtonHeader>
        <ButtonHeader href='#projects'>Projects</ButtonHeader>
      </nav>
    </header>
  )
}
