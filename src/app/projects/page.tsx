'use client'

import { Section } from '@/components/ui/section'
import { Projects } from '@/components/projects'
import { ProjectPagination } from '@/components/project-pagination'
import { usePagination } from '@/hook/use-pagination'
import { data } from '@/constants'

export default function ProjectsPage() {
  const { projects } = data
  const { currentProjects, page, totalPages, updatePage } = usePagination({
    projects
  })

  return (
    <div className='flex flex-col flex-1'>
      <Section id='projects' className='pb-24'>
        <Projects projects={currentProjects} />
        <ProjectPagination
          page={page}
          totalPages={totalPages}
          updatePage={updatePage}
        />
      </Section>
    </div>
  )
}
