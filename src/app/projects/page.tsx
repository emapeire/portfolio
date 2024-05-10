import { Suspense } from 'react'
import { Section } from '@/components/ui/section'
import { Projects } from '@/components/projects'
import { LoaderIcon } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className='flex flex-col flex-1'>
      <Section id='projects' className='pb-24'>
        <Suspense fallback={<LoaderIcon className='size-4 animate-spin' />}>
          <Projects />
        </Suspense>
      </Section>
    </div>
  )
}
