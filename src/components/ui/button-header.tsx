export function ButtonHeader({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      className='rounded-[11px] px-6 md:px-12 py-3 transition-all ease-in-out duration-300 hover:bg-white/10'
      href={href}
    >
      {children}
    </a>
  )
}
