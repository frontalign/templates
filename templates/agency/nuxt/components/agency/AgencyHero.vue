<script setup lang="ts">
import { Motion } from 'motion-v'
import { ArrowRight, BadgeCheck, BarChart3, Play, Sparkles } from 'lucide-vue-next'

const highlights = [
  'Strategy-first creative direction',
  'Premium component-based delivery',
  'SEO, analytics, and launch support',
]

const chartBars = ['38%', '58%', '46%', '74%', '66%', '92%']

const metrics = [
  ['Leads', '2,840'],
  ['Conv.', '18.7%'],
  ['ROI', '4.8x'],
]
</script>

<template>
  <section class="agency-hero overflow-hidden is-relative border-bottom">
    <div class="agency-hero-orb agency-hero-orb-one" />
    <div class="agency-hero-orb agency-hero-orb-two" />

    <div class="container py-6">
      <div class="is-grid grid-cols-1 lg:grid-cols-2 gap-5 align-items-center">
        <Motion
          as="div"
          class="agency-hero-copy"
          :initial="{ opacity: 0, y: 32 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }"
        >
          <div class="badge is-primary is-pill mb-3">Premium Digital Agency Template</div>
          <h1 class="font-black text-5xlarge leading-none text-balance mbe-4">
            Build a brand people remember and a website that sells.
          </h1>
          <p class="text-large text-muted leading-relaxed mbe-4 max-w-3xl">
            A high-end agency experience for studios, consultants, SaaS teams, and creative businesses that need a premium web presence fast.
          </p>

          <div class="is-flex agency-actions gap-3 mbe-5">
            <NuxtLink to="/contact" class="button is-primary is-large rounded-pill">
              Start a Project <ArrowRight :size="18" />
            </NuxtLink>
            <NuxtLink to="/portfolio" class="button is-dark is-large rounded-pill">
              <Play :size="17" /> View Case Studies
            </NuxtLink>
          </div>

          <div class="is-grid grid-cols-1 md:grid-cols-3 gap-3">
            <Motion
              v-for="(item, index) in highlights"
              :key="item"
              as="div"
              class="agency-check-card"
              :initial="{ opacity: 0, y: 18 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.55, delay: 0.18 + index * 0.08, ease: [0.16, 1, 0.3, 1] }"
            >
              <BadgeCheck :size="18" />
              <span>{{ item }}</span>
            </Motion>
          </div>
        </Motion>

        <Motion
          as="div"
          class="agency-hero-visual is-relative"
          :initial="{ opacity: 0, y: 42, scale: 0.96, rotateX: 8, rotateY: -8 }"
          :animate="{ opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0 }"
          :transition="{ duration: 0.95, delay: 0.12, ease: [0.16, 1, 0.3, 1] }"
        >
          <div class="agency-hero-glow" />
          <div class="agency-hero-grid" />

          <div class="agency-dashboard-card shadow-large rounded-4 overflow-hidden">
            <div class="agency-dashboard-body">
              <div class="agency-dashboard-header">
                <div>
                  <div class="text-small text-muted mbe-1">Live campaign intelligence</div>
                  <div class="h4 mbe-0">Revenue Performance</div>
                </div>
                <div class="badge is-success is-pill">Live</div>
              </div>

              <div class="agency-revenue-card">
                <div>
                  <div class="text-muted text-small">Revenue influenced</div>
                  <div class="agency-revenue-value">$427k</div>
                </div>
                <div class="agency-growth-pill">+38%</div>
              </div>

              <div class="agency-chart">
                <Motion
                  v-for="(height, index) in chartBars"
                  :key="height"
                  as="span"
                  :style="{ height }"
                  :initial="{ scaleY: 0 }"
                  :animate="{ scaleY: 1 }"
                  :transition="{ duration: 0.7, delay: 0.45 + index * 0.06, ease: [0.16, 1, 0.3, 1] }"
                />
              </div>

              <div class="is-grid grid-cols-3 gap-3 mt-4">
                <div v-for="[label, value] in metrics" :key="label" class="agency-metric-card">
                  <div class="text-muted text-small">{{ label }}</div>
                  <div class="h4 mb-0">{{ value }}</div>
                </div>
              </div>
            </div>
          </div>

          <Motion
            as="div"
            class="agency-floating-card agency-floating-card-one shadow-medium"
            :initial="{ opacity: 0, y: 18, scale: 0.94 }"
            :animate="{ opacity: 1, y: [0, -8, 0], scale: 1 }"
            :transition="{
              opacity: { duration: 0.45, delay: 0.65 },
              scale: { duration: 0.45, delay: 0.65 },
              y: { duration: 4.2, delay: 0, repeat: Infinity, ease: 'easeInOut' },
            }"
          >
            <Sparkles :size="18" />
            <span>Brand system approved</span>
          </Motion>

          <Motion
            as="div"
            class="agency-floating-card agency-floating-card-two shadow-medium"
            :initial="{ opacity: 0, y: 18, scale: 0.94 }"
            :animate="{ opacity: 1, y: [0, -8, 0], scale: 1 }"
            :transition="{
              opacity: { duration: 0.45, delay: 0.65 + 0.3 },
              scale: { duration: 0.45, delay: 0.65 + 0.3 },
              y: { duration: 4.2, delay: 0.3, repeat: Infinity, ease: 'easeInOut' },
            }"
          >
            <BarChart3 :size="18" />
            <span>+68% qualified leads</span>
          </Motion>

          <Motion
            as="div"
            class="agency-floating-card agency-floating-card-three shadow-medium"
            :initial="{ opacity: 0, y: 18, scale: 0.94 }"
            :animate="{ opacity: 1, y: [0, -8, 0], scale: 1 }"
            :transition="{
              opacity: { duration: 0.45, delay: 0.65 + 0.6 },
              scale: { duration: 0.45, delay: 0.65 + 0.6 },
              y: { duration: 4.2, delay: 0.6, repeat: Infinity, ease: 'easeInOut' },
            }"
          >
            <span class="agency-dot" />
            <span>12 assets shipped</span>
          </Motion>
        </Motion>
      </div>
    </div>
  </section>
</template>
