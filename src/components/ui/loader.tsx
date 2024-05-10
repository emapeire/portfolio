import { LoaderIcon } from 'lucide-react'

export function Loader() {
  return (
    <div className='flex justify-center items-start pt-3 min-h-screen'>
      <LoaderIcon className='size-4 animate-spin' />
    </div>
  )
}
