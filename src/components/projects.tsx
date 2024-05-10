'use client'

import { usePagination } from '@/hook/use-pagination'
import { Button } from './ui/button'
import { ProjectCard } from './project-card'
import { ProjectPagination } from './project-pagination'
import { LoaderIcon, TerminalIcon } from 'lucide-react'
import { data } from '@/constants'

export function Projects() {
  const { projects } = data
  const { currentProjects, page, totalPages, updatePage, isLoading } =
    usePagination({
      projects
    })

  return (
    <>
      <h2 className='dark:text-neutral-100 text-neutral-800 flex gap-x-4 items-center text-3xl font-bold text-balance'>
        <TerminalIcon className='size-6 animate-pulse stroke-[1.5]' />
        Projects & Crafts
      </h2>

      {isLoading ? (
        <div className='flex justify-center'>
          <LoaderIcon className='size-4 animate-spin' />
        </div>
      ) : currentProjects.length === 0 || page < 1 || page > totalPages ? (
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
            isLoading={isLoading}
          />
        </>
      )}
    </>
  )
}
