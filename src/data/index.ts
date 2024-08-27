import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { XIcon } from '@/components/icons/x'
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
import { SupabaseIcon } from '@/components/icons/tags/supabase'
import { ReduxIcon } from '@/components/icons/tags/redux'
import { PNPMIcon } from '@/components/icons/tags/pnpm'
import { VercelIcon } from '@/components/icons/tags/vercel'
import { BasehubIcon } from '@/components/icons/tags/basehub'
import { GraphQLIcon } from '@/components/icons/tags/graphql'
import { FileTextIcon, LinkIcon, MailIcon } from 'lucide-react'

export const AVATAR = {
  name: 'Emanuel Peire',
  initials: 'EP'
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/emapeire',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/emanuelpeire',
    icon: LinkedInIcon
  },
  {
    title: 'X (Twitter)',
    url: 'https://x.com/emapeire',
    icon: XIcon
  },
  {
    title: 'Email',
    url: 'mailto:hi@emapeire.xyz',
    icon: MailIcon
  },
  {
    title: 'CV App',
    url: 'https://cv.emapeire.xyz',
    icon: FileTextIcon
  },
  {
    title: 'Link App',
    url: 'https://link.emapeire.xyz',
    icon: LinkIcon
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
  },
  SUPABASE: {
    name: 'Supabase',
    icon: SupabaseIcon
  },
  REDUX: {
    name: 'Redux',
    icon: ReduxIcon
  },
  PNPM: {
    name: 'PNPM',
    icon: PNPMIcon
  },
  VERCEL: {
    name: 'Vercel',
    icon: VercelIcon
  },
  BASEHUB: {
    name: 'BaseHub',
    icon: BasehubIcon
  },
  GRAPHQL: {
    name: 'GraphQL',
    icon: GraphQLIcon
  }
}

export const PROJECTS = [
  {
    title: 'BaseHub - Next.js blog',
    tags: [
      TAGS.BASEHUB,
      TAGS.CSS,
      TAGS.NEXT,
      TAGS.PNPM,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
      TAGS.VERCEL
    ],
    description:
      'A starter guide template blog made with Next.js and BaseHub CMS. It uses the BaseHub API to fetch and display posts.',
    link: {
      github: 'https://github.com/basehub-ai/nextjs-blog',
      preview: 'https://nextjs-blog-basehub.vercel.app'
    },
    image: '/projects/images/basehub-nextjs-blog.png'
  },
  {
    title: 'Basement Challenge',
    tags: [
      TAGS.CSS,
      TAGS.NEXT,
      TAGS.PNPM,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT
    ],
    description: 'Basement studio stream challenge.',
    link: {
      github: 'https://github.com/emapeire/basement-challenge',
      preview: 'https://emapeire-basement-challenge.vercel.app'
    },
    image: '/projects/images/basement-challenge.png'
  },
  {
    title: 'Chat With Vader',
    tags: [
      TAGS.JAVASCRIPT,
      TAGS.NEXT,
      TAGS.OPENAI,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT
    ],
    description:
      'A simple chat app that uses the OpenAI API and Vercel AI SDK to chat with Darth Vader.',
    link: {
      github: 'https://github.com/emapeire/chat-with-vader'
    },
    image: '/projects/images/chat-with-vader.png'
  },
  {
    title: 'Cohere Chat',
    tags: [TAGS.JAVASCRIPT, TAGS.NODE],
    description:
      'A chatbot that uses the Cohere API to generate responses to user input.',
    link: {
      github: 'https://github.com/emapeire/cohere-chat'
    },
    image: '/projects/images/cohere-chat.png'
  },
  {
    title: 'Comments App',
    tags: [
      TAGS.CSS,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.VITE
    ],
    description: 'A simple comments app made with React and Vite.',
    link: {
      github: 'https://github.com/emapeire/comments-react-query'
    },
    image: '/projects/images/comments-app.png'
  },
  {
    title: 'Crud App',
    tags: [
      TAGS.CSS,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.REDUX,
      TAGS.TYPESCRIPT,
      TAGS.VITE
    ],
    description: 'A simple CRUD app made with React and Vite.',
    link: {
      github: 'https://github.com/emapeire/crud-react-redux',
      preview: 'https://emapeire-crud-react-redux.netlify.app'
    },
    image: '/projects/images/crud-app.png'
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
      github: 'https://github.com/emapeire/eloquent-js-chat'
    },
    image: '/projects/images/eloquent-js-chat.png'
  },
  {
    title: 'Google Translate UI',
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
    link: {
      github: 'https://github.com/emapeire/google-translate-clone'
    },
    image: '/projects/images/google-translate-clone.png'
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
      github: 'https://github.com/emapeire/image-to-code'
    },
    video: '/projects/videos/image-2-code.webm'
  },
  {
    title: 'JavaScript Quiz',
    tags: [
      TAGS.CSS,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.VITE
    ],
    description: 'A simple quiz app made with React and Zustand.',
    link: {
      github: 'https://github.com/emapeire/javascript-quiz',
      preview: 'https://emapeire-javascript-quiz.netlify.app'
    },
    image: '/projects/images/javascript-quiz.png'
  },
  {
    title: 'Mercado Libre Challenge',
    tags: [
      TAGS.CSS,
      TAGS.NEXT,
      TAGS.PNPM,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT
    ],
    description:
      'Challenge to create a product search app using the Mercado Libre API. Built with Next.js and TypeScript.',
    link: {
      github: 'https://github.com/emapeire/meli-challenge',
      preview: 'https://emapeire-meli-challenge.vercel.app'
    },
    image: '/projects/images/meli-challenge.png'
  },
  {
    title: 'Mouse Follower',
    tags: [TAGS.CSS, TAGS.HTML, TAGS.JAVASCRIPT, TAGS.REACT, TAGS.VITE],
    description: 'A simple mouse follower app made with React and Vite.',
    link: {
      github: 'https://github.com/emapeire/mouse-follower',
      preview: 'https://emapeire-mouse-follower.netlify.app'
    },
    video: '/projects/videos/mouse-follower.webm'
  },
  {
    title: "Morty's characters",
    tags: [
      TAGS.CSS,
      TAGS.GRAPHQL,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT
    ],
    description:
      "A simple app that lists all Morty's characters. Built with Next.js and GraphQL.",
    link: {
      github: 'https://github.com/emapeire/nextjs-graphql',
      preview: 'https://emapeire-nextjs-graphql.vercel.app'
    },
    image: '/projects/images/morty-s-characters.png'
  },
  {
    title: 'Movie Search App',
    tags: [TAGS.CSS, TAGS.HTML, TAGS.JAVASCRIPT, TAGS.REACT, TAGS.VITE],
    description: 'A simple movie search app made with React and Vite.',
    link: {
      github: 'https://github.com/emapeire/react-movie-search',
      preview: 'https://emapeire-react-movie-search.netlify.app'
    },
    image: '/projects/images/movie-search.png'
  },
  {
    title: 'Next.js Chat App',
    tags: [
      TAGS.CSS,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.NEXT,
      TAGS.PNPM,
      TAGS.REACT,
      TAGS.SHADCN,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT
    ],
    description:
      'NextJS-Chat offers beginners a chat-based interface to learn Next.js and best coding practices through an AI expert.',
    link: {
      github: 'https://github.com/nextjsargentina/next.js-chat'
    },
    video: '/projects/videos/nextjs-chat.webm'
  },
  {
    title: 'Next.js Releases App',
    tags: [
      TAGS.CSS,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.NEXT,
      TAGS.PNPM,
      TAGS.REACT,
      TAGS.SHADCN,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT
    ],
    description:
      "NextJS Releases is an App that tracks new releases on NextJS's GitHub repo.",
    link: {
      github: 'https://github.com/nextjsargentina/next.js-releases',
      preview: 'https://nextjs-releases.vercel.app'
    },
    image: '/projects/images/nextjs-releases-app.png'
  },
  {
    title: 'React GPT',
    tags: [TAGS.OPENAI, TAGS.REACT],
    description: 'An AI-driven web engineering expert for React community.',
    link: {
      preview: 'https://chat.openai.com/g/g-HNcbE0A5n-reactgpt'
    },
    image: '/projects/images/react-gpt.png'
  },
  {
    title: 'Screen Recorder',
    tags: [TAGS.CSS, TAGS.HTML, TAGS.JAVASCRIPT],
    description: 'Native screen recorder made with MediaRecorder web-api',
    link: {
      github: 'https://github.com/emapeire/screen-recorder'
    },
    video: '/projects/videos/screen-recorder.webm'
  },
  {
    title: 'Shopping Cart',
    tags: [TAGS.CSS, TAGS.HTML, TAGS.JAVASCRIPT, TAGS.REACT, TAGS.VITE],
    description: 'A simple shopping cart app made with React and Vite.',
    link: {
      github: 'https://github.com/emapeire/shopping-cart',
      preview: 'https://emapeire-shopping-cart.netlify.app'
    },
    image: '/projects/images/shopping-cart.png'
  },
  {
    title: 'Space X Launches',
    tags: [TAGS.ASTRO, TAGS.JAVASCRIPT, TAGS.TYPESCRIPT],
    description:
      'A simple app that lists all SpaceX launches. Built with Astro and TypeScript.',
    link: {
      github: 'https://github.com/emapeire/spacex-launches',
      preview: 'https://emapeire-spacex-launches.vercel.app'
    },
    image: '/projects/images/spacex-launches.png'
  },
  {
    title: 'Spotify UI',
    tags: [
      TAGS.ASTRO,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.SVELTE,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT
    ],
    description: 'An open-source Spotify clone built with Svelte and Astro.',
    link: {
      github: 'https://github.com/emapeire/spotify-clone',
      preview: 'https://emapeire-spotify-clone.vercel.app'
    },
    image: '/projects/images/spotify-clone.png'
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
    link: {
      github: 'https://github.com/emapeire/swc-router',
      preview: 'https://npmjs.com/package/swc-router'
    },
    image: '/projects/images/swc-router.png'
  },
  {
    title: 'View Transitions API',
    tags: [TAGS.ASTRO, TAGS.JAVASCRIPT],
    description:
      'This is a sample project that demonstrates how to use the View Transitions API with Astro.',
    link: {
      github: 'https://github.com/emapeire/view-transitions-api',
      preview: 'https://emapeire-view-transitions-api.vercel.app'
    },
    video: '/projects/videos/view-transitions-api.webm'
  },
  {
    title: 'Tesla Landing UI',
    tags: [TAGS.ASTRO, TAGS.JAVASCRIPT, TAGS.TAILWIND],
    description:
      'An open-source Tesla landing page built with Astro and Tailwind CSS.',
    link: {
      github: 'https://github.com/emapeire/tesla-landing',
      preview: 'https://emapeire-tesla-landing.vercel.app'
    },
    video: '/projects/videos/tesla-landing-clone.webm'
  },
  {
    title: 'Tic Tac Toe',
    tags: [TAGS.CSS, TAGS.HTML, TAGS.JAVASCRIPT, TAGS.REACT, TAGS.VITE],
    description: 'A simple tic-tac-toe game made with React and TypeScript.',
    link: {
      github: 'https://github.com/emapeire/tic-tac-toe',
      preview: 'https://emapeire-tic-tac-toe.netlify.app'
    },
    image: '/projects/images/tic-tac-toe.png'
  },
  {
    title: 'Todo App',
    tags: [
      TAGS.CSS,
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.VITE
    ],
    description: 'A simple todo app made with React and TypeScript.',
    link: {
      github: 'https://github.com/emapeire/todo-app-ts',
      preview: 'https://emapeire-todo-ts.netlify.app'
    },
    image: '/projects/images/todo-app-ts.png'
  },
  {
    title: 'Twitter Follow Card UI',
    tags: [TAGS.CSS, TAGS.HTML, TAGS.JAVASCRIPT, TAGS.REACT, TAGS.VITE],
    description:
      'An open-source Twitter follow card built with React and Vite.',
    link: {
      github: 'https://github.com/emapeire/twitter-follow-card',
      preview: 'https://emapeire-twitter-follow-card.netlify.app'
    },
    image: '/projects/images/twitter-follow-card.png'
  },
  {
    title: 'Twitter UI',
    tags: [
      TAGS.JAVASCRIPT,
      TAGS.NEXT,
      TAGS.REACT,
      TAGS.SUPABASE,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT
    ],
    description:
      'An open-source Twitter clone built with Next.js and Supabase.',
    link: {
      github: 'https://github.com/emapeire/twitter-clone'
    },
    image: '/projects/images/twitter-clone.png'
  }
]
