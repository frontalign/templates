<script setup lang="ts">
useHead({
  title: '404 - Page Not Found | Agency Starter Template',
})
</script>

<template>
  <main
    class="py-6 container text-center is-flex flex-col align-items-center justify-content-center min-h-full"
    style="min-height: 60vh"
  >
    <h1 class="h1" style="font-size: 6rem">404</h1>
    <h2 class="h2 mbe-3">Page Not Found</h2>
    <p class="text-large text-muted mbe-5">
      The page you are looking for doesn't exist or has been moved.
    </p>
    <NuxtLink to="/" class="button is-primary is-large rounded-pill">
      Return Home
    </NuxtLink>
  </main>
</template>
