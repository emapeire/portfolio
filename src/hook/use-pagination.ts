import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import type { ProjectProps } from '@/types'

export function usePagination({ projects }: { projects: ProjectProps[] }) {
  const searchParams = useSearchParams()
  const [page, setPage] = useState<number>(
    Number(searchParams.get('page') ?? 1)
  )
  const [isLoading, setIsLoading] = useState(false)

  const limit = 10
  const offset = (page - 1) * limit
  const totalPages = Math.ceil(projects.length / limit)

  useEffect(() => {
    if (isLoading) {
      window.scrollTo(0, 0)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 150)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [isLoading])

  const updatePage = (newPage: number) => {
    setIsLoading(true)
    setPage(newPage)
  }

  const currentProjects = !isLoading
    ? projects.slice(offset, offset + limit)
    : []

  return { currentProjects, page, totalPages, updatePage, isLoading }
}
