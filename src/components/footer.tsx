export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='flex flex-col items-center justify-center py-3.5 my-16 mx-auto w-full max-w-[40rem] md:max-w-[46rem] font-semibold text-gray-300 text-center text-xs md:text-sm border border-white/5 bg-white/5 shadow-xl shadow-white/5 rounded-xl'>
      <div className='flex items-center justify-center space-x-6 md:space-x-24'>
        <span>{`${year}`}</span>
        <span>|</span>
        <span className='hover:underline hover:text-blue-500'>
          <a
            href='https://link.emapeire.xyz'
            target='_blank'
            rel='noopener noreferrer'
          >
            My socials
          </a>
        </span>
        <span>|</span>
        <section>
          <span>by</span>{' '}
          <span className='hover:underline hover:text-blue-500'>
            <a
              href='https://x.com/emapeire'
              target='_blank'
              rel='noopener noreferrer'
            >
              @emapeire
            </a>
          </span>
        </section>
      </div>
    </footer>
  )
}
