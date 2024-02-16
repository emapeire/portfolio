export function SectionSecondaryTitle({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <h2 className='text-gray-100 flex gap-x-2 items-center text-3xl md:text-4xl font-bold pb-12 text-balance'>
      {children}
    </h2>
  )
}
