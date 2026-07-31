import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Pricing', href: '/pricing' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="agency-footer">
      <div className="container">
        <div className="agency-footer-cta rounded-4 p-5 mbe-5">
          <div>
            <div className="badge is-primary is-pill mbe-3">Ready when you are</div>
            <h2 className="h3 text-white mbe-2">Let&apos;s turn your agency website into a premium sales asset.</h2>
            <p className="text-slate-300 mbe-0">Book a strategy call and get a clear path for launch.</p>
          </div>
          <Link href="/contact" className="button is-primary rounded-pill">
            Start a Project <ArrowRight size={17} />
          </Link>
        </div>

        <div className="is-grid grid-cols-1 md:grid-cols-4 gap-5">
          <div>
            <Link href="/" className="agency-brand text-no-decoration mbe-3">
              <span className="agency-brand-mark">A</span>
              <span className="brand-name text-white">Agency.</span>
            </Link>
            <p className="text-slate-300 text-small mbe-4">Premium digital solutions for forward-thinking brands.</p>
            <div className="is-flex gap-4">
              <a href="#" aria-label="Twitter"className="text-no-decoration text-light">Tw</a>
              <a href="#" aria-label="LinkedIn"className='text-no-decoration text-light'>In</a>
              <a href="#" aria-label="Dribbble"className='text-no-decoration text-light'>Dr</a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div className="font-bold text-white mbe-3">{title}</div>
              <ul className="nav is-vertical gap-1 font-heading">
                {links.map((item) => (
                  <li key={item.href} className="nav-item">
                    <Link href={item.href} className="nav-link">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="agency-footer-contact is-grid grid-cols-1 md:grid-cols-3 gap-3 mbs-5">
          <div><Mail size={16} /> hello@agency.com</div>
          <div><Phone size={16} /> +1 555 014 889</div>
          <div><MapPin size={16} /> New York · London · Remote</div>
        </div>

        <div className="is-flex agency-footer-bottom justify-content-between align-items-center mbs-5 border-top text-small">
          <span>&copy; {new Date().getFullYear()} Agency. All rights reserved.</span>
          <span>Built with FrontAlign.</span>
        </div>
      </div>
    </footer>
  );
}
