import type { SVGProps } from 'react'

export const ShadcnIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 256 256'
    className={`rounded-[2px] ${props.className ?? ''}`}
  >
    <path fill='#000' d='M0 0h256v256H0z'></path>
    <path
      fill='none'
      stroke='#FFFFFF'
      strokeWidth='8'
      d='M208 128l-80 80M192 40L40 192'
    ></path>
  </svg>
)
