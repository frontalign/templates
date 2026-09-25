<script setup lang="ts">
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

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
}
</script>

<template>
  <footer class="agency-footer">
    <div class="container">
      <div class="agency-footer-cta rounded-4 p-5 mbe-5">
        <div>
          <div class="badge is-primary is-pill mbe-3">Ready when you are</div>
          <h2 class="h3 text-white mbe-2">Let's turn your agency website into a premium sales asset.</h2>
          <p class="text-slate-300 mbe-0">Book a strategy call and get a clear path for launch.</p>
        </div>
        <NuxtLink to="/contact" class="button is-primary rounded-pill">
          Start a Project <ArrowRight :size="17" />
        </NuxtLink>
      </div>

      <div class="is-grid grid-cols-1 md:grid-cols-4 gap-5">
        <div>
          <NuxtLink to="/" class="agency-brand text-no-decoration mbe-3">
            <span class="agency-brand-mark">A</span>
            <span class="brand-name text-white">Agency.</span>
          </NuxtLink>
          <p class="text-slate-300 text-small mbe-4">Premium digital solutions for forward-thinking brands.</p>
          <div class="is-flex gap-4">
            <a href="#" aria-label="Twitter" class="text-no-decoration text-light">Tw</a>
            <a href="#" aria-label="LinkedIn" class="text-no-decoration text-light">In</a>
            <a href="#" aria-label="Dribbble" class="text-no-decoration text-light">Dr</a>
          </div>
        </div>

        <div v-for="(links, title) in footerLinks" :key="title">
          <div class="font-bold text-white mbe-3">{{ title }}</div>
          <ul class="nav is-vertical gap-1 font-heading">
            <li v-for="item in links" :key="item.href" class="nav-item">
              <NuxtLink :to="item.href" class="nav-link">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="agency-footer-contact is-grid grid-cols-1 md:grid-cols-3 gap-3 mbs-5">
        <div><Mail :size="16" /> hello@agency.com</div>
        <div><Phone :size="16" /> +1 555 014 889</div>
        <div><MapPin :size="16" /> New York · London · Remote</div>
      </div>

      <div class="is-flex agency-footer-bottom justify-content-between align-items-center mbs-5 border-top text-small">
        <span>&copy; {{ currentYear }} Agency. All rights reserved.</span>
        <span>Built with FrontAlign.</span>
      </div>
    </div>
  </footer>
</template>
