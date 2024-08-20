import { useTranslations } from 'next-intl'
import { Link } from 'next-view-transitions'

export default function NotFoundPage() {
  const t = useTranslations()

  return (
    <>
      <video
        autoPlay
        loop
        muted
        className='absolute left-0 top-0 h-full w-full object-cover'
      >
        <source src='/assets/page-not-found.webm' type='video/webm' />
      </video>
      <div className='not-found absolute left-0 top-0 h-full w-full dark:bg-black bg-white opacity-90' />

      <div className='z-10 flex flex-col items-center'>
        <h1 className='flex items-center gap-x-4 text-balance text-5xl font-bold dark:text-white text-black'>
          {t('not-found.title')}
        </h1>
        <p className='mx-auto max-w-3xl pt-4 font-mono text-center dark:text-neutral-200 text-neutral-800 md:mb-4'>
          {t('not-found.description')}
        </p>

        <div className='flex flex-wrap items-center pt-2 md:pt-0'>
          <Link
            className='dark:text-white text-black hover:underline hover:underline-offset-4'
            href='/'
          >
            {t('not-found.button')}
          </Link>
        </div>
      </div>
    </>
  )
}
