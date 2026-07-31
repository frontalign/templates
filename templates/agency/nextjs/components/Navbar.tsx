'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { useNavbar , useDarkMode } from 'frontalign/react'

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
]

export default function Navbar() {
  const pathname = usePathname()
  useNavbar()
  useDarkMode()
  const showSearch = pathname.startsWith('/blog')

  return (
    <header className="agency-header">
      <nav className="navbar is-medium agency-nav">
        <div className="navbar-left">
          <div className="navbar-brand">
            <Link href="/" className="agency-brand">
              <span className="agency-brand-mark">A</span>
              <span className="brand-name">Agency.</span>
            </Link>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-links">
            <ul className="nav is-hidden md:is-flex gap-2 font-heading">
              {navItems.map((item) => (
                <li key={item.href} className="nav-item">
                  <Link href={item.href} className="nav-link font-bold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/contact" className="button is-primary is-small rounded-pill agency-nav-cta">
            Let&apos;s Talk <ArrowRight size={15} />
          </Link>

          <button
            type="button"
            className="navbar-toggler"
            aria-label="Toggle Menu"
            fa-toggle="navbar"
            data-target="#agency-mobile-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className="navbar-menu" id="agency-mobile-menu">
       <div className="w-full p-3">
        <ul className="nav is-vertical gap-2 font-heading">
          {navItems.map((item) => (
            <li key={item.href} className="nav-item">
              <Link href={item.href} className="nav-link font-bold">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="button is-primary rounded-pill mbs-3">
          Let&apos;s Talk <ArrowRight size={15} />
        </Link>
        
        </div>
      </div>
    </header>
  )
}
