export function SectionSecondaryTitle({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <h2 className='text-slate-100 flex gap-x-2 items-center text-2xl md:text-4xl font-bold pb-8 md:pb-12 text-balance'>
      {children}
    </h2>
  )
}
