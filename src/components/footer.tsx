export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='text-slate-400 text-center text-sm md:text-base md:pt-16 pt-8 pb-16'>
      <div className='flex bg-white/5 rounded-xl border border-white/5 shadow-lg shadow-white/5 md:mx-[20rem] mx-6 md:py-3 py-2 justify-evenly items-center backdrop-blur-lg'>
        {`${year}`} <span>|</span>
        <span className='hover:underline hover:text-blue-400'>
          <a
            href='https://x.com/emapeire'
            target='_blank'
            rel='noopener noreferrer'
          >
            @emapeire
          </a>
        </span>
      </div>
    </footer>
  )
}
