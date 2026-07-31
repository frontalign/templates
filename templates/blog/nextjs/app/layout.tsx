import type { Metadata } from 'next'
import 'frontalign/css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: {
    default: 'FrontPress Starter',
    template: '%s - FrontPress Starter',
  },
  description: 'A clean, responsive Next.js blog starter built with FrontAlign.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="is-flex flex-col min-h-screen text-body">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
