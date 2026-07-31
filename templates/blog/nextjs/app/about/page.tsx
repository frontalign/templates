import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about FrontPress Starter.',
}

export default function AboutPage() {
  return (
    <div className="container max-w-3xl py-6 min-h-screen px-4">
      <header className="mbe-6 text-center border-bottom pbe-5">
        <h1 className="h1 font-black mbe-4">About FrontPress Starter</h1>
        <p className="text-large text-muted m-0">A lightweight blog foundation for creators, developers and small editorial websites.</p>
      </header>

      <section className="text-base text-body leading-relaxed">
        <h2 className="h3 font-bold mbs-5 mbe-3">Built for simple publishing</h2>
        <p>
          This starter keeps the essentials: a homepage, article index, category archives, single article pages, static content pages and mock data you can edit immediately.
        </p>

        <h2 className="h3 font-bold mbs-5 mbe-3">Upgrade path</h2>
        <p>
          Use this version for a clean free starter. Keep CMS adapters, advanced search, newsletter flows, author archives and premium editorial sections for the Pro version.
        </p>

        <div className="bg-slate-100 border rounded-4 p-5 mbs-6 text-center">
          <h3 className="h4 font-bold mbe-3">Start writing</h3>
          <p className="text-muted mbe-4">Edit the mock posts in <code>lib/data.ts</code> and publish your blog.</p>
          <Link href="/blog" className="button is-primary rounded-pill px-5">View articles</Link>
        </div>
      </section>
    </div>
  )
}
