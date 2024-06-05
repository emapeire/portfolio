interface ContactEmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export function ContactEmailTemplate({
  firstName,
  lastName,
  email,
  message
}: ContactEmailTemplateProps) {
  return (
    <div className='bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden'>
      <header className='bg-gray-100 dark:bg-gray-800 px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <span className='text-lg font-semibold'>Portfolio | Emanuel Peire</span>
        </div>
      </header>
      <div className='p-6 space-y-4'>
        <div className='flex items-center gap-4'>
          <p className='text-lg font-medium'>{firstName} {lastName}</p>
          <p className='text-gray-500 dark:text-gray-400'>{email}</p>
        </div>
        <div className='text-gray-700 dark:text-gray-300 whitespace-pre-wrap'>
          {message}
        </div>
      </div>
    </div>
  )
}