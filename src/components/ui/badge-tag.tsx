export function BadgeTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={
        'flex shadow-md shadow-white/5 items-center gap-x-2 font-medium text-xs md:text-sm rounded-lg w-full py-1 px-2 border border-white/10 bg-white/10'
      }
    >
      {children}
    </span>
  )
}
