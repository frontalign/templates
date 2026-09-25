<!--
  Optional Logo Strip

  Uncomment this section if you have real client logos.

  Recommended:
  - Real customer logos
  - Partner logos
  - Press mentions

  Avoid:
  - Fake company names
  - Placeholder brands

<script setup lang="ts">
import { logos } from '~/data/mock'
import Reveal from '~/components/shared/Reveal.vue'
</script>

<template>
  <section class="py-5 border-bottom agency-logo-strip">
    <div class="container">
      <Reveal>
        <p class="text-center text-muted text-small text-uppercase font-bold mbe-4">
          Trusted by ambitious teams
        </p>
        <div class="agency-logo-grid">
          <div v-for="logo in logos" :key="logo" class="agency-logo-item">
            {{ logo }}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
</template>
-->
<template>
  <!-- Optional Logo Strip - uncomment above when needed -->
  <div v-if="false" />
</template>
