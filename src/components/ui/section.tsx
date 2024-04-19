import { cn } from '@/lib/utils'
import type React from 'react'

export type BadgeProps = React.HTMLAttributes<HTMLDivElement>

export function Section({ className, ...props }: BadgeProps) {
  return (
    <section
      id={props.id}
      className={cn(
        'flex flex-col min-h-0 gap-y-3 scroll-mt-32 w-full md:max-w-2xl mx-auto',
        className
      )}
      {...props}
    />
  )
}
