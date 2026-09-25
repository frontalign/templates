<script setup lang="ts">
import { Code2, PenTool, Sparkles, TrendingUp } from 'lucide-vue-next'
import { services } from '~/data/mock'
import Reveal from '~/components/shared/Reveal.vue'

const serviceIcons: Record<string, any> = {
  Sparkles,
  PenTool,
  Code2,
  TrendingUp,
}

const getIcon = (iconName: string) => serviceIcons[iconName] ?? Sparkles
</script>

<template>
  <section class="py-6 bg-surface">
    <div class="container">
      <Reveal class="agency-section-heading text-center mx-auto mbe-5">
        <div class="badge is-primary-outline is-pill mbe-3">What we do</div>
        <h2 class="h2 mbe-3">Everything a premium agency website needs.</h2>
        <p class="text-large text-muted">
          Modern sections, strong hierarchy, polished cards, and conversion-focused content blocks.
        </p>
      </Reveal>

      <div class="is-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Reveal
          v-for="(srv, index) in services"
          :key="srv.slug"
          :delay="index * 0.08"
        >
          <NuxtLink
            :to="`/services/${srv.slug}`"
            class="agency-service-card link rounded-4 border p-4 transition-all"
          >
            <div class="agency-icon-wrap mbe-4">
              <component :is="getIcon(srv.icon)" :size="24" />
            </div>
            <div class="badge is-light is-pill mbe-3">{{ srv.metric }}</div>
            <h3 class="h4 mb-2">{{ srv.title }}</h3>
            <p class="text-muted text-small mbe-4">{{ srv.description }}</p>
            <span class="font-bold text-primary">Explore service &rarr;</span>
          </NuxtLink>
        </Reveal>
      </div>
    </div>
  </section>
</template>
