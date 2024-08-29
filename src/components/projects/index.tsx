'use client'

import { usePagination } from '@/hook/use-pagination'
import { Button } from '../ui/button'
import { ProjectCard } from './card'
import { ProjectPagination } from './pagination'
import { useTranslations } from 'next-intl'
import { TerminalIcon } from 'lucide-react'
import { type ProjectProps } from '@/types'

export function Projects() {
  const t = useTranslations()
  const projectsItems = t('projects.items') as ProjectProps
  const { currentProjects, page, totalPages, updatePage } = usePagination({
    projects: projectsItems
  })

  return (
    <>
      {currentProjects.length === 0 || page < 1 || page > totalPages ? (
        <Button variant='secondary' size='sm' asChild>
          <a href='/projects'>{t('projects.not-found')}</a>
        </Button>
      ) : (
        <>
          <h2 className='dark:text-neutral-100 text-neutral-800 flex gap-x-4 items-center text-3xl font-bold text-balance'>
            <TerminalIcon className='size-6 animate-pulse stroke-[1.5]' />
            {t('projects.title')}
          </h2>

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
