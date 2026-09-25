<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
]
</script>

<template>
  <header class="agency-header">
    <nav class="navbar is-medium agency-nav">
      <div class="navbar-left">
        <div class="navbar-brand">
          <NuxtLink to="/" class="agency-brand">
            <span class="agency-brand-mark">A</span>
            <span class="brand-name">Agency.</span>
          </NuxtLink>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-links">
          <ul class="nav is-hidden md:is-flex gap-2 font-heading">
            <li v-for="item in navItems" :key="item.href" class="nav-item">
              <NuxtLink :to="item.href" class="nav-link font-bold">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <NuxtLink to="/contact" class="button is-primary is-small rounded-pill agency-nav-cta">
          Let's Talk <ArrowRight :size="15" />
        </NuxtLink>

        <button
          type="button"
          class="navbar-toggler"
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

    <div class="navbar-menu" id="agency-mobile-menu">
      <div class="w-full p-3">
        <ul class="nav is-vertical gap-2 font-heading">
          <li v-for="item in navItems" :key="item.href" class="nav-item">
            <NuxtLink :to="item.href" class="nav-link font-bold">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <NuxtLink to="/contact" class="button is-primary rounded-pill mbs-3">
          Let's Talk <ArrowRight :size="15" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
