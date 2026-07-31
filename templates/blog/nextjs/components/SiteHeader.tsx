"use client";

import Link from "next/link";
import type { Category } from "@/lib/data";
import { useNavbar } from "frontalign/react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  useNavbar();

  return (
    <header className="bg-white">
      <nav className="navbar border-bottom is-sticky z-sticky px-4 lg:px-6">
        <div className="navbar-start">
          <Link
            href="/"
            className="navbar-brand text-primary text-no-decoration font-bold text-large m-0"
          >
            FrontPress<span className="text-slate-400">.</span>
          </Link>
        </div>

        <div className="navbar-center is-hidden md:is-flex ms-5">
          <ul className="nav expand gap-4">
            {navItems.map((item) => (
              <li className="nav-item" key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link text-small font-medium text-muted hover:text-slate-900 text-uppercase"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <Link
            href="/blog"
            className="button is-primary is-small rounded-pill is-hidden sm:is-inline-flex"
          >
            Read the blog
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            fa-toggle="navbar"
            data-target="#blog-mobile-menu"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div id="blog-mobile-menu" className="navbar-menu">
        <div className="p-4">
          <ul className="nav is-vertical gap-2">
            {navItems.map((item) => (
              <li className="nav-item" key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link text-small font-medium text-slate-900 text-uppercase"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="nav-item mt-3">
              <Link
                href="/blog"
                className="button is-primary w-full rounded-pill"
              >
                Read the blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
