import { ContactForm } from '@/components/contact-form';
import { MailIcon } from 'lucide-react';

export function Contact() {
  return (
    <>
      <h2 className='flex gap-x-4 items-center text-3xl font-bold text-balance'>
        <MailIcon className='size-6' />
        Contact
      </h2>
      <div className='flex flex-col gap-4 dark:text-neutral-200 text-neutral-800 text-pretty'>
        <p className='font-mono mx-auto max-w-3xl md:mb-4'>
          Feel free to reach out to me for questions, inquiries, or collaborations. Open to new opportunities and challenges.
        </p>
        <ContactForm />
      </div>
    </>
  )
}