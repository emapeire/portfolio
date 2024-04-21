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
          <Card key={title} className='flex flex-row border shadow'>
            <div className='p-1'>
              {image && (
                <Image
                  className='rounded-md object-cover'
                  width={1920}
                  height={1280}
                  src={image}
                  alt={title}
                />
              )}
              {video && (
                <video
                  className='rounded-md object-cover'
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

            <div className='flex flex-col'>
              <CardHeader>
                <div className='space-y-1'>
                  <CardTitle className='text-xl'>
                    {link ? (
                      <a
                        href={link.github}
                        target='_blank'
                        className='inline-flex items-center gap-1 hover:underline'
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

              <CardContent className='flex flex-col'>
                <div className='mt-2 flex gap-1'>
                  {tags.map((tag) => (
                    <Badge
                      className='px-1 py-0 text-xs'
                      variant='secondary'
                      key={tag.name}
                    >
                      {tag.name}
                    </Badge>
                  ))}
                </div>
                <div className='flex'>
                  {link.github && (
                    <Button variant='secondary' size='default' asChild>
                      <a
                        href={link.github}
                        target='_blank'
                        className='flex items-center gap-1'
                        rel='noreferrer'
                      >
                        <GitHubIcon className='size-4' />
                      </a>
                    </Button>
                  )}
                  {link.preview && (
                    <Button variant='secondary' size='default' asChild>
                      <a href={link.github} target='_blank' rel='noreferrer'>
                        <LinkIcon className='size-4' />
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
