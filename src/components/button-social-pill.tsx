export function ButtonSocialPill({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      className='rounded-xl border shadow flex md:justify-center justify-start items-center md:gap-x-2 gap-x-8 py-3 md:py-2 md:px-4 px-8 bg-neutral-800/30 hover:scale-105 hover:bg-neutral-800 transition-all md:my-4 my-3'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  )
}
