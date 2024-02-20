export interface AboutProps {
  name: string
  ininitials: string
  title: string
  description: string
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
