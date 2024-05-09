import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

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
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                updatePage(page - 1)
              }}
              href={`?page=${page - 1}`}
            />
          </PaginationItem>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => {
                updatePage(index + 1)
              }}
              href={`?page=${index + 1}`}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        {page < totalPages && (
          <PaginationItem>
            <PaginationNext
              onClick={() => {
                updatePage(page + 1)
              }}
              href={`?page=${page + 1}`}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
