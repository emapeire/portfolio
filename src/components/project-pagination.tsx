import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import clsx from 'clsx'

export function ProjectPagination({
  page,
  totalPages,
  updatePage
}: {
  page: number
  totalPages: number
  updatePage: (page: number) => void
}) {
  return (
    <Pagination>
      <PaginationContent className='flex gap-2'>
        <PaginationItem>
          <PaginationPrevious
            className={clsx(
              page === 1 ? 'pointer-events-none opacity-50' : 'shadow'
            )}
            isActive={page > 1}
            onClick={() => {
              if (page > 1) updatePage(page - 1)
            }}
            href={page > 1 ? `?page=${page - 1}` : '#'}
            tabIndex={page > 1 ? 0 : -1}
            aria-disabled={page <= 1}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            className={clsx(
              page === totalPages ? 'pointer-events-none opacity-50' : 'shadow'
            )}
            isActive={page < totalPages}
            onClick={() => {
              if (page < totalPages) updatePage(page + 1)
            }}
            href={page < totalPages ? `?page=${page + 1}` : '#'}
            tabIndex={page < totalPages ? 0 : -1}
            aria-disabled={page >= totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
