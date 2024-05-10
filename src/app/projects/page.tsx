import { Suspense } from 'react'
import { Section } from '@/components/ui/section'
import { Projects } from '@/components/projects'
import { SkeletonCard } from '@/components/skeleton-card'

export default function ProjectsPage() {
  return (
    <div className='flex flex-col flex-1'>
      <Section id='projects' className='pb-24'>
        <Suspense fallback={<SkeletonCard />}>
          <Projects />
        </Suspense>
      </Section>
    </div>
  )
}
