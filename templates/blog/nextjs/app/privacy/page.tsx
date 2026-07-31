import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for FrontPress Starter.',
}

export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl py-6 min-h-screen px-4">
      <header className="mb-6 border-bottom pbe-5">
        <h1 className="h1 font-black mbe-4">Privacy Policy</h1>
        <p className="text-large text-muted m-0">Last updated: June 2026</p>
      </header>
      <div className="text-base text-body leading-relaxed">
        <h2 className="h4 font-bold mbs-5 mbe-3">1. Information we collect</h2>
        <p>This starter does not include analytics, accounts or form handling by default.</p>
        <h2 className="h4 font-bold mbs-5 mbe-3">2. How to customize</h2>
        <p>Update this page when you connect analytics, forms, email providers or third-party services.</p>
      </div>
    </div>
  )
}
