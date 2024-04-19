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
      className={`${className} scroll-mt-24 w-full md:max-w-2xl mx-auto`}
    >
      {children}
    </section>
  )
}
