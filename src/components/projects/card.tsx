import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card'
import { Tooltip, TooltipTrigger, TooltipContent } from '../ui/tooltip'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ArrowUpRightIcon, LinkIcon } from 'lucide-react'
import { GitHubIcon } from '../icons/github'
import type { ProjectProps } from '@/types'

export function ProjectCard({ projects }: { projects: ProjectProps[] }) {
  return (
    <div className='flex flex-col gap-4'>
      {projects.map(({ title, description, tags, image, video, link }) => (
        <Card key={title} className='flex flex-col border shadow w-full'>
          <CardHeader className='flex flex-col space-y-2 p-4'>
            <CardTitle className='text-xl dark:text-neutral-100 text-neutral-900'>
              <Tooltip>
                <TooltipTrigger asChild>
                  {link.preview ? (
                    <a
                      href={link.preview}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center hover:underline group underline-offset-4 gap-2'
                    >
                      <h3>{title}</h3>
                      <ArrowUpRightIcon className='size-4 text-neutral-500 dark:group-hover:text-neutral-100 group-hover:text-neutral-900' />
                    </a>
                  ) : (
                    link.github && (
                      <a
                        href={link.github}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center hover:underline group underline-offset-4 gap-2'
                      >
                        <h3>{title}</h3>
                        <ArrowUpRightIcon className='size-4 text-neutral-500 dark:group-hover:text-neutral-100 group-hover:text-neutral-900' />
                      </a>
                    )
                  )}
                </TooltipTrigger>
                <TooltipContent className='p-1' side='bottom'>
                  {image ? (
                    <Image
                      className='rounded object-fill max-w-xs w-full mx-auto'
                      width={1920}
                      height={1280}
                      src={image}
                      alt={title}
                      loading='lazy'
                    />
                  ) : (
                    video && (
                      <video
                        className='rounded object-fill max-w-xs w-full mx-auto'
                        width={1920}
                        height={1280}
                        muted
                        autoPlay
                        loop
                      >
                        <source src={video} type='video/webm' />
                      </video>
                    )
                  )}
                </TooltipContent>
              </Tooltip>
            </CardTitle>

            <CardDescription className='font-mono dark:text-neutral-400 text-neutral-600'>
              {description}
            </CardDescription>
          </CardHeader>

          <CardContent className='flex flex-col space-y-6 p-4 pt-0'>
            <div className='flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <Badge
                  className='p-1 gap-1 rounded-md shadow'
                  variant='secondary'
                  key={tag.name}
                >
                  <tag.icon className='size-4' />
                  <p className='text-xs'>{tag.name}</p>
                </Badge>
              ))}
            </div>

            <div className='flex gap-x-2'>
              {link.preview && (
                <Button
                  variant='default'
                  size={null}
                  className='p-2 shadow'
                  asChild
                >
                  <a
                    href={link.preview}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2'
                  >
                    <LinkIcon className='size-4' />
                    <p>Preview</p>
                  </a>
                </Button>
              )}
              {link.github && (
                <Button
                  variant='default'
                  size={null}
                  className='p-2 shadow'
                  asChild
                >
                  <a
                    href={link.github}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2'
                  >
                    <GitHubIcon className='size-4' />
                    <p>GitHub</p>
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
