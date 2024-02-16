export interface AboutProps {
  title: string
  description: string
}

export interface CareerProps {
  company: string
  link: string
  badges: string[]
  title: string
  logo: string
  start: string
  end: string
  description: string
}

export interface ProjectProps {
  title: string
  link: string
  description: string
  tags: string[]
  image?: string
}
