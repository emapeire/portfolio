import { type ContactEmailTemplateProps } from '@/types'

export function ContactEmailTemplate({
  firstName,
  lastName,
  email,
  message
}: ContactEmailTemplateProps) {
  return (
    <div className='bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden'>
      <header className='bg-neutral-100 dark:bg-neutral-800 px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <span className='text-lg font-semibold'>
            Portfolio | Emanuel Peire
          </span>
        </div>
      </header>
      <div className='p-6 space-y-4'>
        <div className='flex items-center gap-4'>
          <p className='text-lg font-medium'>
            {firstName} {lastName}
          </p>
          <p className='text-neutral-500 dark:text-neutral-400'>{email}</p>
        </div>
        <div className='text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap'>
          {message}
        </div>
      </div>
    </div>
  )
}
