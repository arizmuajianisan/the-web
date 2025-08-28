import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Ariz Muajianisan',
  description:
    "Tech lead in manufacturing, passionate about digital transformation and modern web development. I turn ideas into efficient systems, build impactful web apps, and share tutorials, project insights, and programming tips. Follow my journey to explore tech that works in the real world.",
  href: 'https://arzlabserver.my.id',
  author: 'Ariz Muajianisan',
  locale: 'en-US',
  location: 'Indonesia',
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/blog',
    label: 'blog',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/arizmuajianisan?ref=personal-website',
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/arizmuajianisan',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:contact@arizmuajianisan@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

export interface Category {
  text: string
  logo: string
}

export type Technologies = {
  'Web Development': Category[]
  'Development Tools': Category[]
  'Hosting and Cloud Services': Category[]
  'Operating Systems': Category[]
  'Other Programming Languages and Technologies': Category[]
  'Web Servers': Category[]
  Databases: Category[]
  'Other Software': Category[]
}

export const technologies: Technologies = {
  'Web Development': [
    { text: 'HTML', logo: 'mdi:language-html5' },
    { text: 'JavaScript', logo: 'mdi:language-javascript' },
    { text: 'CSS', logo: 'mdi:language-css3' },
    { text: 'PHP', logo: 'mdi:language-php' },
    { text: 'Astro', logo: 'simple-icons:astro' },
    { text: 'Tailwind CSS', logo: 'mdi:tailwind' },
  ],
  'Development Tools': [
    { text: 'Visual Studio Code', logo: 'mdi:visual-studio-code' },
    { text: 'Git', logo: 'mdi:git' },
  ],
  'Hosting and Cloud Services': [
    { text: 'DigitalOcean', logo: 'mdi:digital-ocean' },
    { text: 'Cloudflare', logo: 'cib:cloudflare' },
    { text: 'Netlify', logo: 'cib:netlify' },
  ],
  'Operating Systems': [
    { text: 'Windows', logo: 'mdi:windows' },
    { text: 'Ubuntu', logo: 'mdi:ubuntu' },
  ],
  'Other Programming Languages and Technologies': [
    { text: 'Lua', logo: 'mdi:language-lua' },
    { text: 'Golang', logo: 'mdi:language-go' },
    { text: 'Node.js', logo: 'mdi:nodejs' },
  ],
  'Web Servers': [
    { text: 'Apache', logo: 'cib:apache' },
    { text: 'Nginx', logo: 'cib:nginx' },
  ],
  Databases: [
    { text: 'MySQL', logo: 'cib:mysql' },
    { text: 'MongoDB', logo: 'cib:mongodb' },
  ],
  'Other Software': [
    { text: 'Discord', logo: 'mdi:discord' },
    { text: 'Spotify', logo: 'mdi:spotify' },
    { text: 'Visual Studio', logo: 'mdi:visual-studio' },
    { text: 'Brave', logo: 'cib:brave' },
  ],
}
