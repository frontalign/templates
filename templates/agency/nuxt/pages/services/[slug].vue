<script setup lang="ts">
import { services } from '~/data/mock'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const service = computed(() => services.find((s) => s.slug === slug.value))

if (!service.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Service Not Found',
    fatal: true,
  })
}

useHead({
  title: computed(() =>
    service.value
      ? `${service.value.title} | Agency Starter Template`
      : 'Service Not Found'
  ),
})
</script>

<template>
  <main v-if="service" class="py-6 container max-w-4xl">
    <NuxtLink to="/services" class="link text-muted mb-4 is-inline-block">
      &larr; Back to services
    </NuxtLink>

    <div class="bg-slate-50 p-6 rounded-4 border mb-5">
      <h1 class="h1 mb-3">{{ service.title }}</h1>
      <p class="text-large text-muted">{{ service.description }}</p>
    </div>

    <div class="content text-base leading-relaxed">
      <h2 class="h3 mb-3">Our Process</h2>

      <p>
        We take a strategic approach to {{ service.title.toLowerCase() }}. Our
        process involves deep research, iterative design, and robust
        implementation.
      </p>

      <div class="is-grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
        <div class="border rounded-3 p-3 text-center bg-white">
          <div class="font-bold text-primary mb-1">1. Discovery</div>
          <p class="text-small text-muted">Understanding your goals.</p>
        </div>

        <div class="border rounded-3 p-3 text-center bg-white">
          <div class="font-bold text-primary mb-1">2. Execution</div>
          <p class="text-small text-muted">Building the solution.</p>
        </div>

        <div class="border rounded-3 p-3 text-center bg-white">
          <div class="font-bold text-primary mb-1">3. Delivery</div>
          <p class="text-small text-muted">Launching to the world.</p>
        </div>
      </div>
    </div>

    <div class="mt-6 pt-5 border-top text-center">
      <h3 class="h3 mb-3">Need {{ service.title }}?</h3>

      <NuxtLink
        to="/contact"
        class="button is-primary is-large rounded-pill"
      >
        Request a Quote
      </NuxtLink>
    </div>
  </main>
</template>
