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
              page === 1 ? 'pointer-events-none opacity-50' : undefined,
              page > 1 ? 'shadow' : undefined
            )}
            isActive={page > 1}
            onClick={() => {
              if (page > 1) updatePage(page - 1)
            }}
            href={`?page=${page - 1}`}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            className={clsx(
              page === totalPages
                ? 'pointer-events-none opacity-50'
                : undefined,
              page < totalPages ? 'shadow' : undefined
            )}
            isActive={page < totalPages}
            onClick={() => {
              updatePage(page + 1)
            }}
            href={`?page=${page + 1}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
