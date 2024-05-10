import { Suspense } from 'react'
import { Section } from '@/components/ui/section'
import { Loader } from '@/components/ui/loader'
import { Projects } from '@/components/projects'

export default function ProjectsPage() {
  return (
    <div className='flex flex-col flex-1'>
      <Section id='projects' className='pb-24'>
        <Suspense fallback={<Loader />}>
          <Projects />
        </Suspense>
      </Section>
    </div>
  )
}
