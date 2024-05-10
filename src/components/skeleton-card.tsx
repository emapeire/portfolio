import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonCard() {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='h-[7rem] md:w-[48rem] w-[25rem] rounded-xl' />
      <div className='space-y-2'>
        <Skeleton className='h-[1rem] md:w-[48rem] w-[25rem]' />
        <Skeleton className='h-[1rem] md:w-[40rem] w-[20rem]' />
      </div>
    </div>
  )
}
