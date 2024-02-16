export function ButtonHeader({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      className='border-s rounded-lg md:px-5 px-3 py-1 md:py-1.5 bg-black/50 border-white/10 shadow-lg shadow-black/70 hover:scale-105 md:hover:scale-110 transition-all ease-in-out hover:bg-black/60 hover:shadow-black/80'
      href={href}
    >
      {children}
    </a>
  )
}
