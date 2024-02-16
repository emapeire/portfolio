export function ButtonHeader({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      className='border rounded-xl px-6 md:px-12 py-2.5 bg-white/5 border-white/10 shadow-xl shadow-white/5 hover:scale-110 transition-all ease-in-out hover:bg-white/10'
      href={href}
    >
      {children}
    </a>
  )
}
