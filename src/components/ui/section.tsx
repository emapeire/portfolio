import { cn } from '@/lib/utils'
import type React from 'react'

export type BadgeProps = React.HTMLAttributes<HTMLDivElement>

export function Section({ className, ...props }: BadgeProps) {
  return (
    <section
      id={props.id}
      className={cn(
        'flex flex-col min-h-0 gap-y-4 scroll-mt-24 w-full md:max-w-3xl mx-auto',
        className
      )}
      {...props}
    />
  )
}
