import { useTranslations } from 'next-intl'
import { ContactForm } from '@/components/contact/form'
import { MailIcon } from 'lucide-react'

export function Contact() {
  const t = useTranslations()

  return (
    <>
      <h2 className='flex gap-x-4 items-center text-3xl font-bold text-balance'>
        <MailIcon className='size-6 animate-pulse stroke-[1.5]' />
        {t('contact.title')}
      </h2>
      <div className='flex flex-col gap-4'>
        <p className='font-mono mx-auto max-w-3xl mb-4 dark:text-neutral-200 text-neutral-800 text-pretty'>
          {t('contact.description')}
        </p>
        <ContactForm />
      </div>
    </>
  )
}
