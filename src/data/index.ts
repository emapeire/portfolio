import { CSSIcon } from '@/components/icons/tags/css'
import { HTMLIcon } from '@/components/icons/tags/html'
import { JavaScriptIcon } from '@/components/icons/tags/javascript'
import { NextJSIcon } from '@/components/icons/tags/nextjs'
import { OpenAIIcon } from '@/components/icons/tags/openai'
import { ReactIcon } from '@/components/icons/tags/react'
import { SWCIcon } from '@/components/icons/tags/swc'
import { TypeScriptIcon } from '@/components/icons/tags/typescript'
import { ViteIcon } from '@/components/icons/tags/vite'
import { ShadcnIcon } from '@/components/icons/tags/shadcn-ui'
import { TailwindCSSIcon } from '@/components/icons/tags/tailwind-css'
import { AstroIcon } from '@/components/icons/tags/astro'
import { SvelteIcon } from '@/components/icons/tags/svelte'
import { NodeJSIcon } from '@/components/icons/tags/nodejs'
import { VitestIcon } from '@/components/icons/tags/vitest'
import { BootstrapIcon } from '@/components/icons/tags/bootstrap'

export const AVATAR = {
  name: 'Emanuel Peire',
  initials: 'EP'
}

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
    company: 'Frontend Lab',
    link: 'https://github.com/thefrontendlab',
    badges: ['Hybrid'],
    title: 'Software Developer and Technical Researcher',
    start: 'Jul, 2021',
    end: 'Present',
    description:
      'Developing and researching new technologies and tools for the frontend community.'
  },
  {
    company: 'Next.js Argentina',
    link: 'https://github.com/nextjsargentina',
    badges: ['Hybrid'],
    title: 'Developer Experience Architect',
    start: 'Aug, 2023',
    end: 'Present',
    description: 'Building a non-profit open community of Next.js Argentina.'
  },
  {
    company: 'Smat SA.',
    link: 'https://smat.io',
    badges: ['Remote'],
    title: 'QA Tester and Frontend Developer',
    start: 'Aug, 2022',
    end: 'Aug, 2023',
    description: `Led QA testing, using Jest and Playwright, ensuring web applications perform flawlessly.
    Collaborated on TDD implementation, optimizing code quality and minimizing bugs.
    Also, contributed to developing user-friendly interfaces with React.js, significantly enhancing user experiences.`
  },
  {
    company: 'MakerDAO',
    link: 'https://makerdao.com',
    badges: ['Remote'],
    title: 'Technical Writer and Translator',
    start: 'Feb, 2022',
    end: 'Aug, 2022',
    description: `Authored and translated technical documentation, including whitepapers,
    guides, and tutorials, to facilitate user understanding of blockchain and DeFi concepts.`
  },
  {
    company: 'El Chaperón',
    badges: ['On-site'],
    title: 'Web Designer and Community Manager',
    start: 'Jan, 2016',
    end: 'Jan, 2019',
    description: `Responsive website development and design in WordPress.
    Online tourist services of the city of Rosario.
    Endorsed by the Rosario Hotel Association and Tourist Entity (ETUR).`
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
  },
  ASTRO: {
    name: 'Astro',
    icon: AstroIcon
  },
  SVELTE: {
    name: 'Svelte',
    icon: SvelteIcon
  },
  NODE: {
    name: 'Node.js',
    icon: NodeJSIcon
  },
  VITEST: {
    name: 'Vitest',
    icon: VitestIcon
  },
  BOOTSTRAP: {
    name: 'Bootstrap',
    icon: BootstrapIcon
  }
} as const

export const PROJECTS = [
  {
    title: 'Cohere Chat',
    tags: [TAGS.JAVASCRIPT, TAGS.NODE],
    description:
      'A chatbot that uses the Cohere API to generate responses to user input.',
    link: 'https://github.com/emapeire/cohere-chat',
    image: '/images/cohere-chat.webp'
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
    link: 'https://github.com/emapeire/eloquent-js-chat',
    image: '/images/eloquent-js-chat.webp'
  },
  {
    title: 'Google Translate Clone',
    tags: [
      TAGS.BOOTSTRAP,
      TAGS.CSS,
      TAGS.OPENAI,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.VITE,
      TAGS.VITEST
    ],
    description:
      'This is a simple API that uses the OpenAI GPT-4-vision-preview model to generate code from images.',
    link: 'https://github.com/emapeire/google-translate-clone',
    image: '/images/google-translate-clone.webp'
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
    link: 'https://github.com/emapeire/image-to-code',
    video: '/videos/image-2-code.webm'
  },
  {
    title: 'React GPT',
    tags: [TAGS.OPENAI, TAGS.REACT],
    description: 'An AI-driven web engineering expert for React community.',
    link: 'https://chat.openai.com/g/g-HNcbE0A5n-reactgpt',
    image: '/images/react-gpt.webp'
  },
  {
    title: 'Screen Recorder',
    tags: [TAGS.CSS, TAGS.HTML, TAGS.JAVASCRIPT],
    description: 'Native screen recorder made with MediaRecorder web-api',
    link: 'https://github.com/emapeire/screen-recorder',
    video: '/videos/screen-recorder.webm'
  },
  {
    title: 'Spotify Clone',
    tags: [
      TAGS.ASTRO,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.SVELTE,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT
    ],
    description: 'An open-source Spotify clone built with Svelte and Astro.',
    link: 'https://github.com/emapeire/spotify-clone',
    image: '/images/spotify-clone.webp'
  },
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
    link: 'https://npmjs.com/package/swc-router',
    image: '/images/swc-router.webp'
  },
  {
    title: 'View Transitions API',
    tags: [TAGS.ASTRO, TAGS.JAVASCRIPT],
    description:
      'This is a sample project that demonstrates how to use the View Transitions API with Astro.',
    link: 'https://github.com/emapeire/view-transitions-api',
    video: '/videos/view-transitions-api.webm'
  },
  {
    title: 'TODO App TS',
    tags: [
      TAGS.CSS,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.VITE
    ],
    description: 'A simple todo app made with React and TypeScript.',
    link: 'https://github.com/emapeire/todo-app-ts',
    image: '/images/todo-app-ts.webp'
  }
]
