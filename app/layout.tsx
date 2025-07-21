import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JustJava - Java Quizzes",
  description: "Java quizzes to test your knowledge on Strings, Arrays, Collections, OOP and more",
  generator: 'Next.js',
  applicationName: 'JustJava',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'Java', 'Quizzes', 'Programming', 'AI'],
  authors: [{ name: 'Jordi Ayala', url: "https://asjordi.dev"}],
  creator: 'Jordi Ayala',
  publisher: 'Jordi Ayala',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://quiz.asjordi.dev'),
  openGraph: {
    title: 'JustJava - Java Quizzes',
    description: 'Java quizzes to test your knowledge on Strings, Arrays, Collections, OOP and more',
    url: 'https://quiz.asjordi.dev',
    siteName: 'JustJava - Java Quizzes',
    images: '/og-image.png',
    locale: 'en_US',
    type: 'website',
    // authors: ['Jordi Ayala'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JustJava - Java Quizzes',
    description: 'Java quizzes to test your knowledge on Strings, Arrays, Collections, OOP and more',
    siteId: '1467726470533754880',
    creator: '@ASJordi',
    creatorId: '1931911256488767914',
    images: ['https://quiz.asjordi.dev/og-image.png'], // Must be an absolute URL
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
