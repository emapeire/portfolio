export function ButtonSocialPill({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      className='rounded-xl border border-white/5 shadow-md shadow-white/5 flex justify-center items-center gap-x-2 py-3 md:py-2 px-4 bg-white/5 hover:scale-105 hover:bg-white/10 transition md:my-4 my-3'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  )
}
