import { PROJECTS as projects } from '@/data'
import { LinkIcon } from '@/icons/link'
import clsx from 'clsx'
import Image from 'next/image'
import { BadgeTag } from './ui/badge-tag'

export function Projects() {
  return (
    <div className='flex flex-col gap-24'>
      {projects.map(({ title, description, tags, image, link }) => (
        <article key={link.href}>
          <a href={link.href} target='_blank' rel='noopener noreferrer'>
            <h3 className='flex items-center gap-x-2 text-xl md:text-2xl font-semibold mb-4 ml-1.5'>
              <LinkIcon className='size-6' />
              <span className='text-blue-100'>{title}</span>
            </h3>
          </a>
          <div className='ml-10'>
            <p className='text-base md:text-lg mb-4 text-pretty'>
              {description}
            </p>
            <div
              className={clsx('flex flex-col', {
                'gap-6': image
              })}
            >
              <ul className='md:flex grid grid-cols-2 md:gap-x-4 gap-x-0 gap-4 items-center justify-items-start'>
                {tags.map((t) => (
                  <li key={t.name}>
                    <BadgeTag>
                      <t.icon className='size-4' />
                      {t.name}
                    </BadgeTag>
                  </li>
                ))}
              </ul>
              {image && (
                <Image
                  className='rounded-xl shadow-2xl shadow-white/5 border border-white/10'
                  width={800}
                  height={400}
                  src={image}
                  alt={title}
                />
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
