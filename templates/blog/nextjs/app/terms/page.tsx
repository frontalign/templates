import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for FrontPress Starter.',
}

export default function TermsPage() {
  return (
    <div className="container max-w-3xl py-6 min-h-screen px-4">
      <header className="mbe-6 border-bottom pbe-5">
        <h1 className="h1 font-black mbe-4">Terms of Service</h1>
        <p className="text-large text-muted m-0">Last updated: June 2026</p>
      </header>
      <div className="text-base text-body leading-relaxed">
        <h2 className="h4 font-bold mbs-5 mbe-3">1. Agreement to terms</h2>
        <p>By accessing this website, visitors agree to follow the terms you define for your own publication.</p>
        <h2 className="h4 font-bold mbs-5 mbe-3">2. Customize before launch</h2>
        <p>This is placeholder legal content. Replace it with policy text appropriate for your project before publishing.</p>
      </div>
    </div>
  )
}
