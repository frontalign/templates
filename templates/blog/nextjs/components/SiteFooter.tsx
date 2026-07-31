import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white mbs-auto pt-6 pbe-4">
      <div className="container px-4">
        <div className="is-grid grid-cols-1 md:grid-cols-4 gap-4 mbe-5">
          <div className="md:col-span-2">
            <Link href="/" className="text-white text-no-decoration font-bold text-large mbe-3 is-inline-block">
              FrontPress<span className="text-muted">.</span>
            </Link>
            <p className="text-slate-400 text-small max-w-md">
              A lightweight Next.js blog starter built with FrontAlign. Edit the mock data, customize the pages and publish.
            </p>
          </div>
          <div>
            <h3 className="h6 font-semibold mbe-3 text-uppercase text-muted">Links</h3>
            <ul className="list is-unstyled text-small">
              <li><Link href="/" className="link text-slate-300 hover:text-primary transition">Home</Link></li>
              <li><Link href="/blog" className="link text-slate-300 hover:text-primary transition">Articles</Link></li>
              <li><Link href="/categories" className="link text-slate-300 hover:text-primary transition">Categories</Link></li>
              <li><Link href="/about" className="link text-slate-300 hover:text-primary transition">About</Link></li>
              <li><Link href="/contact" className="link text-slate-300 hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="h6 font-semibold mbe-3 text-uppercase text-muted">Legal</h3>
            <ul className="list is-unstyled text-small">
              <li><Link href="/privacy" className="link text-slate-300 hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="link text-slate-300 hover:text-primary transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-top pbs-4">
          <p className="text-muted text-tiny text-uppercase font-bold m-0">&copy; {new Date().getFullYear()} FrontPress Starter.</p>
        </div>
      </div>
    </footer>
  )
}
