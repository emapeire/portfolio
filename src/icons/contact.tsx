export const ContactIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
      <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2'></path>
    </svg>
  )
}
