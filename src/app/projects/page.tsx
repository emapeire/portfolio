'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/section'
import { Projects } from '@/components/projects'
import { ProjectPagination } from '@/components/project-pagination'
import { data } from '@/constants'

export default function ProjectsPage() {
  const { projects } = data
  const searchParams = useSearchParams()
  const [page, setPage] = useState<number>(
    Number(searchParams.get('page') ?? 1)
  )
  const limit = 10
  const offset = (page - 1) * limit
  const currentProjects = projects.slice(offset, offset + limit)
  const totalPages = Math.ceil(projects.length / limit)

  const updatePage = (newPage: number) => {
    setPage(newPage)
  }

  return (
    <div className='flex flex-col flex-1'>
      <Section id='projects' className='pb-24'>
        {currentProjects.length === 0 || page < 0 ? (
          <Button variant='secondary' size='sm' asChild>
            <a href='/projects'>No projects found</a>
          </Button>
        ) : (
          <>
            <Projects projects={currentProjects} />
            <ProjectPagination
              page={page}
              totalPages={totalPages}
              updatePage={updatePage}
            />
          </>
        )}
      </Section>
    </div>
  )
}
