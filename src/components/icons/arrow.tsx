export const ArrowIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={`${className} w-3 h-3 rtl:rotate-180`}
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 14 10'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M1 5h12m0 0L9 1m4 4L9 9'
      ></path>
    </svg>
  )
}
