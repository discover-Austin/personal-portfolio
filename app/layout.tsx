import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Personal Portfolio',
    template: '%s | Personal Portfolio',
  },
  description: 'A modern personal portfolio website built with Next.js and Tailwind CSS. Showcasing projects, blog posts, and professional experience.',
  keywords: ['portfolio', 'web development', 'Next.js', 'React', 'Tailwind CSS'],
  authors: [{ name: 'Portfolio Owner' }],
  creator: 'Portfolio Owner',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Personal Portfolio',
    description: 'A modern personal portfolio website built with Next.js and Tailwind CSS. Showcasing projects, blog posts, and professional experience.',
    siteName: 'Personal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Portfolio',
    description: 'A modern personal portfolio website built with Next.js and Tailwind CSS. Showcasing projects, blog posts, and professional experience.',
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
