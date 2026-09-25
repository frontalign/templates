<script setup lang="ts">
import { BadgeCheck } from 'lucide-vue-next'
import Reveal from '~/components/shared/Reveal.vue'

const pricingFeatures = [
  'Premium landing page system',
  'Brand direction and conversion copy',
  'Responsive build with FrontAlign',
  'Launch checklist and 14-day support',
]
</script>

<template>
  <section class="py-6">
    <div class="container">
      <Reveal>
        <div class="agency-offer-card rounded-4 overflow-hidden shadow-large">
          <div class="is-grid grid-cols-1 lg:grid-cols-2">
            <div class="agency-offer-copy p-6">
              <div class="badge is-primary is-pill mbe-3">Agency Pro Package</div>
              <h2 class="h2 text-white mbe-3">
                Launch a premium agency website without starting from zero.
              </h2>
              <p class="text-slate-300 text-large mbe-4">
                Perfect for selling this as a paid template: strong hero, trust proof, services, work, process, testimonials, CTA, and footer.
              </p>
              <div class="is-flex agency-actions gap-3">
                <NuxtLink to="/pricing" class="button is-primary is-large rounded-pill">
                  View Pricing
                </NuxtLink>
                <NuxtLink to="/contact" class="button is-light is-large rounded-pill">
                  Get Proposal
                </NuxtLink>
              </div>
            </div>

            <div class="agency-offer-panel p-6">
              <div class="agency-price-card rounded-4 p-4">
                <div class="text-muted text-small mbe-1">Starting package</div>
                <div class="is-flex align-items-end gap-2 mbe-4">
                  <span class="text-5xlarge font-black leading-none">$2.9k</span>
                  <span class="text-muted mbe-2">/ project</span>
                </div>
                <ul class="list is-unstyled mbe-4">
                  <li
                    v-for="feature in pricingFeatures"
                    :key="feature"
                    class="is-flex align-items-center gap-2 mbe-2"
                  >
                    <BadgeCheck :size="18" class="text-primary" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
                <NuxtLink to="/contact" class="button is-dark rounded-pill w-full">
                  Start now
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
</template>
