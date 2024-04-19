export interface AvatarProps {
  name: string
  initials: string
}

export interface AboutProps {
  title: string
  description: string
}

export interface LinksProps {
  title: string
  url: string
  icon: any
}

export interface CareerProps {
  company: string
  link?: string
  badges: string[]
  title: string
  start: string
  end: string
  description: string
}

export interface ProjectProps {
  title: string
  tags: string[]
  description: string
  link: string
  image?: string
  video?: string
}
