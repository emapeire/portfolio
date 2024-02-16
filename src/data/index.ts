import { CSSIcon } from '@/icons/tags/css'
import { HTMLIcon } from '@/icons/tags/html'
import { JavaScriptIcon } from '@/icons/tags/javascript'
import { NextJSIcon } from '@/icons/tags/nextjs'
import { OpenAIIcon } from '@/icons/tags/openai'
import { ReactIcon } from '@/icons/tags/react'
import { SWCIcon } from '@/icons/tags/swc'
import { TypeScriptIcon } from '@/icons/tags/typescript'
import { ViteIcon } from '@/icons/tags/vite'
import { ShadcnIcon } from '@/icons/tags/shadcn-ui'
import { TailwindCSSIcon } from '@/icons/tags/tailwind-css'

export const ABOUT = {
  title: `Frontend Engineer, OSS Developer, LLMs technical researcher and DX
  Architect. Always influenced by design. Based in Rosario, Argentina 🇦🇷`,
  description: `As a Web Developer with Machine Learning research experience, I'm
  passionate about creating innovative tech solutions for social impact.
  I focus on using advanced frontend technologies to improve
  accessibility and performance in web applications. My main goal is to
  enhance user experience, making the web a better place for everyone.`
}

export const CAREER = [
  {
    company: 'Smat SA.',
    link: 'https://smat.io',
    badges: ['Remote'],
    title: 'QA Tester and Frontend Developer',
    logo: 'https://assets-global.website-files.com/63055fe72615549c6cfae8e0/63c55f389bcbb423249e730f_Frame%20560.png',
    start: '2022',
    end: '2023',
    description: `Led QA testing, using Jest and Playwright, ensuring web applications perform flawlessly.
    Collaborated on TDD implementation, optimizing code quality and minimizing bugs.
    Also, contributed to developing user-friendly interfaces with React.js, significantly enhancing user experiences.`
  }
]

const TAGS = {
  NEXT: {
    name: 'Next.js',
    icon: NextJSIcon
  },
  REACT: {
    name: 'React',
    icon: ReactIcon
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    icon: TypeScriptIcon
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    icon: JavaScriptIcon
  },
  HTML: {
    name: 'HTML',
    icon: HTMLIcon
  },
  CSS: {
    name: 'CSS',
    icon: CSSIcon
  },
  VITE: {
    name: 'Vite',
    icon: ViteIcon
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    icon: TailwindCSSIcon
  },
  SHADCN: {
    name: 'Shadcn/ui',
    icon: ShadcnIcon
  },
  SWC: {
    name: 'SWC',
    icon: SWCIcon
  },
  OPENAI: {
    name: 'OpenAI',
    icon: OpenAIIcon
  }
} as const

export const PROJECTS = [
  {
    title: 'SWC Router',
    tags: [
      TAGS.CSS,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.SWC,
      TAGS.VITE
    ],
    description:
      'Simple single-page applications (SPA) with ease using swc-router. This lightweight routing solution for React applications leverages the speed of SWC.',
    link: {
      label: 'npmjs.com/package/swc-router',
      href: 'https://npmjs.com/package/swc-router'
    }
  },
  {
    title: 'Eloquent JavaScript Chat',
    tags: [
      TAGS.NEXT,
      TAGS.OPENAI,
      TAGS.REACT,
      TAGS.SHADCN,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT
    ],
    description:
      'In this app you will be able to interact with a intelligent llama that will answer your questions about JavaScript.',
    link: {
      label: 'github.com/emapeire/eloquent-js-chat',
      href: 'https://github.com/emapeire/eloquent-js-chat'
    },
    image:
      'https://github.com/emapeire/eloquent-js-chat/assets/63935846/29ecbabb-bdd0-4df3-89f7-ff49a3692963'
  },
  {
    title: 'Image 2 Code',
    tags: [
      TAGS.NEXT,
      TAGS.OPENAI,
      TAGS.REACT,
      TAGS.SHADCN,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT
    ],
    description:
      'This is a tool that converts images to code. It uses AI to generate code from images. It is based on the GPT-4-vision-preview model.',
    link: {
      label: 'github.com/emapeire/image-to-code',
      href: 'https://github.com/emapeire/image-to-code'
    }
  }
]
