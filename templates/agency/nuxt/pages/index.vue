<script setup lang="ts">
import AgencyHero from '~/components/agency/AgencyHero.vue'
import StatsSection from '~/components/agency/StatsSection.vue'
import ServicesSection from '~/components/agency/ServicesSection.vue'

useHead({
  title: 'Agency Starter Template',
})
</script>

<template>
  <main class="agency-starter">
    <AgencyHero />
    <StatsSection />
    <ServicesSection />

    <section class="py-6">
      <div class="container text-center">
        <h2 class="h2 mb-3">Need the complete agency system?</h2>
        <p class="text-large text-muted mb-4">
          Unlock portfolio, testimonials, pricing, process timeline, blog,
          about, contact pages, and premium hero visuals with Agency Premium.
        </p>
        <NuxtLink
          to="https://frontalign.dev/templates/agency"
          class="button is-primary is-large rounded-pill"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Agency Premium
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
