<script setup lang="ts">
import type { NuxtError } from '#app'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })

useHead({
  title: '404 - Page Not Found | Agency Starter Template',
})
</script>

<template>
  <div>
    <Navbar />
    <main
      class="py-6 container text-center is-flex flex-col align-items-center justify-content-center min-h-full"
      style="min-height: 60vh"
    >
      <h1 class="h1" style="font-size: 6rem">404</h1>
      <h2 class="h2 mbe-3">Page Not Found</h2>
      <p class="text-large text-muted mbe-5">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <button
        type="button"
        class="button is-primary is-large rounded-pill"
        @click="handleError"
      >
        Return Home
      </button>
    </main>
    <Footer />
  </div>
</template>
