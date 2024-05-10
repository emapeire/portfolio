import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import type { ProjectProps } from '@/types'

export function usePagination({ projects }: { projects: ProjectProps[] }) {
  const searchParams = useSearchParams()
  const [page, setPage] = useState<number>(
    Number(searchParams.get('page') ?? 1)
  )

  const limit = 10
  const offset = (page - 1) * limit
  const totalPages = Math.ceil(projects.length / limit)

  const updatePage = (newPage: number) => {
    window.scrollTo({ top: 0 })
    setPage(newPage)
  }

  const currentProjects = projects.slice(offset, offset + limit)

  return { currentProjects, page, totalPages, updatePage }
}
