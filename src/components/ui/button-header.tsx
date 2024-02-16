export function ButtonHeader({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      className='border rounded-xl px-8 py-2 bg-white/5 border-white/15 shadow-xl shadow-white/5 hover:scale-110 transition-all ease-in-out hover:bg-white/10 hover:border-white/20 hover:shadow-white/10'
      href={href}
    >
      {children}
    </a>
  )
}
