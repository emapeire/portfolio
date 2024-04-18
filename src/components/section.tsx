export function Section({
  id,
  className,
  children
}: {
  id: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={`${className} scroll-mt-24 w-full md:w-[740px] mx-auto`}
    >
      {children}
    </section>
  )
}
