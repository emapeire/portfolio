export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className='bg-blue-100 text-blue-800 text-xs md:text-sm font-medium me-2 px-2 py-1 rounded-lg w-full'>
      {children}
    </span>
  )
}
