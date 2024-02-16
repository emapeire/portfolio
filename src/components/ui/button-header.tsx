export function ButtonHeader({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      className='border rounded-lg px-5 py-1.5 bg-white/10 border-white/10 shadow-lg shadow-white/10 hover:scale-110 transition-all ease-in-out hover:bg-white/20 hover:shadow-white/20'
      href={href}
    >
      {children}
    </a>
  )
}
