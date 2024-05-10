'use client'

import { Button } from './ui/button'
import { usePagination } from '@/hook/use-pagination'
import { ProjectCard } from './project-card'
import { ProjectPagination } from './project-pagination'
import { data } from '@/constants'

export function Projects() {
  const { projects } = data
  const { currentProjects, page, totalPages, updatePage } = usePagination({
    projects
  })

  return (
    <>
      {currentProjects.length === 0 || page < 0 ? (
        <Button variant='secondary' size='sm' asChild>
          <a href='/projects'>No projects found</a>
        </Button>
      ) : (
        <>
          <ProjectCard projects={currentProjects} />
          <ProjectPagination
            page={page}
            totalPages={totalPages}
            updatePage={updatePage}
          />
        </>
      )}
    </>
  )
}
