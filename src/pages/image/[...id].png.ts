import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'

// Using system fonts to avoid external requests
const fonts = {
  regular: {
    name: 'sans-serif',
    weight: 400,
    style: 'normal',
  },
  bold: {
    name: 'sans-serif',
    weight: 700,
    style: 'normal',
  },
} as const;

// Empty font data since we're using system fonts
const MontserratRegularBase64 = ''
const MontserratBoldBase64 = ''

const dimensions = {
  width: 1200,
  height: 630,
}

const colors = {
  background: {
    from: '#2c2c2c',
    via: '#181818',
    to: '#000000',
  },
  text: {
    primary: '#ffffff',
    secondary: '#b8b8b8',
    muted: '#7a7a7a',
  },
  accent: {
    primary: 'rgba(112, 112, 112, 0.5)',
    secondary: 'rgba(21, 21, 21, 0.8)',
    highlight: 'rgba(255, 255, 255, 0.05)',
  },
}

interface Props {
  title: string
  date: Date
  description: string
  tags: string[]
}

export async function GET(context: APIContext) {
  const { title, date, description, tags } = context.props as Props

  const formattedDate = date.toLocaleDateString('en-US', { dateStyle: 'full' })

  const tagElements = tags
    .map(
      (tag) =>
        `<div style="background: rgba(21, 21, 21, 0.5); color: #e0e0e0; font-size: 14px; font-weight: 500; padding: 6px 14px; border-radius: 18px; margin: 4px; display: flex; border: 1px solid rgba(255, 255, 255, 0.1);">#${tag}</div>`,
    )
    .join('')

  // Create a simple SVG as a fallback
  const svg = `
    <svg width="${dimensions.width}" height="${dimensions.height}" viewBox="0 0 ${dimensions.width} ${dimensions.height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="${dimensions.width}" height="${dimensions.height}" fill="#1a1a1a"/>
      <rect x="40" y="40" width="${dimensions.width - 80}" height="${dimensions.height - 80}" rx="16" fill="#2a2a2a" stroke="#444" stroke-width="1"/>
      <text x="80" y="120" font-family="sans-serif" font-size="60" font-weight="700" fill="#ffffff">${title}</text>
      <text x="80" y="180" font-family="sans-serif" font-size="24" fill="#a0a0a0">${new Date(date).toLocaleDateString()}</text>
      <text x="80" y="230" font-family="sans-serif" font-size="24" fill="#ffffff" width="${dimensions.width - 160}">${description}</text>
      <text x="80" y="300" font-family="sans-serif" font-size="16" fill="#888888">arizmuajianisan.my.id</text>
    </svg>
  `.trim()

  // Convert SVG to PNG using a simple approach
  const pngData = Buffer.from(svg)

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Content-Disposition': 'inline; filename="social-card.svg"',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Length': svg.length.toString(),
      'Surrogate-Key': tags.join(' '),
      'Query-String-Hash': title.toLowerCase().replace(/\s+/g, '-'),
      'Cache-Tag': 'social-image',
      'X-Content-Type-Options': 'nosniff',
      'Last-Modified': new Date().toUTCString(),
      Expires: new Date(Date.now() + 31536000000).toUTCString(),
      ETag: `"${svg.length}-${Date.now()}"`,
      'Access-Control-Allow-Origin': '*',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    },
  })
}

export async function getStaticPaths() {
  const posts = await getCollection('blog')
  return posts.map((post) => ({
    params: {
      id: post.id,
    },
    props: {
      title: post.data.title,
      date: post.data.date,
      description: post.data.description,
      tags: post.data.tags,
    },
  }))
}
