import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { CodeIcon, LinkIcon } from 'lucide-react'
import { GitHubIcon } from './icons/github'
import { data } from '@/constants'

export function Projects() {
  const { projects } = data

  return (
    <>
      <h2 className='dark:text-neutral-100 text-neutral-800 flex gap-x-4 items-center text-3xl font-bold text-balance'>
        <CodeIcon className='size-6' />
        Projects
      </h2>

      <div className='flex flex-col gap-y-8'>
        {projects.map(({ title, description, tags, image, video, link }) => (
          <Card key={title} className='flex flex-col md:flex-row border shadow'>
            <div className='flex flex-row w-full md:py-1 md:pl-1 md:pr-0 pt-1 px-1'>
              {image && (
                <Image
                  className='rounded-md object-fill shadow'
                  width={1920}
                  height={1280}
                  src={image}
                  alt={title}
                  loading='lazy'
                />
              )}
              {video && (
                <video
                  className='rounded-md object-fill shadow'
                  width={1920}
                  height={1280}
                  controls
                  muted
                  autoPlay
                  loop
                >
                  <source src={video} type='video/webm' />
                </video>
              )}
            </div>

            <div className='flex flex-col w-full'>
              <CardHeader className='flex p-4'>
                <div className='space-y-2'>
                  <CardTitle className='text-xl'>
                    {link ? (
                      <a
                        href={link.github}
                        target='_blank'
                        className='inline-flex items-center hover:underline underline-offset-4'
                        rel='noreferrer'
                      >
                        {title}
                      </a>
                    ) : (
                      title
                    )}
                  </CardTitle>

                  <CardDescription className='font-mono text-sm'>
                    {description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className='flex flex-col gap-y-4 px-4 pb-4'>
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
                  {link.github && (
                    <Button
                      variant='default'
                      size='default'
                      className='px-2 shadow'
                      asChild
                    >
                      <a
                        href={link.github}
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center gap-1'
                      >
                        <GitHubIcon className='size-4' />
                        <p>GitHub</p>
                      </a>
                    </Button>
                  )}
                  {link.preview && (
                    <Button
                      variant='default'
                      size='default'
                      className='px-2 shadow'
                      asChild
                    >
                      <a
                        href={link.preview}
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center gap-1'
                      >
                        <LinkIcon className='size-4' />
                        <p>Preview</p>
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}
