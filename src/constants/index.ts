import { AVATAR, ABOUT, LINKS, CAREER } from '@/data'
import type { AvatarProps, AboutProps, LinksProps, CareerProps } from '@/types'

export const data = {
  avatar: AVATAR as AvatarProps,
  about: ABOUT as AboutProps,
  links: LINKS as LinksProps[],
  career: CAREER as CareerProps[]
}
