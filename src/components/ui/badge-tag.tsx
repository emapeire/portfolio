export function BadgeTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={
        'flex shadow items-center gap-x-2 font-medium text-xs md:text-sm rounded-lg w-full py-1 px-2 border bg-neutral-800/30'
      }
    >
      {children}
    </span>
  )
}
