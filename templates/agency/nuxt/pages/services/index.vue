<script setup lang="ts">
import { services } from '~/data/mock'
import Reveal from '~/components/shared/Reveal.vue'

useHead({
  title: 'Our Services | Agency Starter Template',
})
</script>

<template>
  <main class="py-6 container">
    <Reveal>
      <div class="text-center mbe-6 max-w-3xl mx-auto">
        <h1 class="h1">Our Services</h1>
        <p class="text-large text-muted mbe-4">
          We offer a full suite of digital capabilities. Everything you need to grow your
          business online.
        </p>
      </div>
    </Reveal>

    <div class="is-grid grid-cols-1 md:grid-cols-2 gap-4">
      <Reveal
        v-for="(srv, index) in services"
        :key="srv.slug"
        :delay="index * 0.08"
      >
        <div class="border bg-slate-50 rounded-4 p-5">
          <h2 class="h3 mbe-2">{{ srv.title }}</h2>
          <p class="text-muted mbe-4">{{ srv.description }}</p>
          <NuxtLink :to="`/services/${srv.slug}`" class="button is-primary is-pill">
            View Details
          </NuxtLink>
        </div>
      </Reveal>
    </div>
  </main>
</template>
