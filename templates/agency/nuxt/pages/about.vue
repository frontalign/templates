<script setup lang="ts">
import Reveal from '~/components/shared/Reveal.vue'

useHead({
  title: 'About | Agency Starter Template',
})
</script>

<template>
  <main class="py-6 container">
    <div class="is-grid grid-cols-1 md:grid-cols-2 gap-6 align-items-center mbe-6 pbe-6 border-bottom">
      <Reveal>
        <div>
          <h1 class="h1 mbe-3">About Agency.</h1>
          <p class="text-large text-muted mbe-4 text-balance">
            We are a team of passionate designers, developers, and strategists dedicated to
            delivering exceptional digital experiences.
          </p>

          <div class="is-flex gap-4">
            <div>
              <div class="h2 text-primary m-0">10+</div>
              <div class="text-muted text-small text-uppercase font-bold tracking-widest mbs-1">
                Years Experience
              </div>
            </div>

            <div>
              <div class="h2 text-primary m-0">150+</div>
              <div class="text-muted text-small text-uppercase font-bold tracking-widest mbs-1">
                Projects Delivered
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal :delay="0.15">
        <div class="ratio is-4x3 rounded-4 overflow-hidden shadow-medium">
          <img
            src="https://picsum.photos/seed/about/800/600"
            alt="Team"
            class="object-fit-cover w-full h-full"
            referrerpolicy="no-referrer"
          >
        </div>
      </Reveal>
    </div>

    <Reveal :delay="0.2">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="h2 mbe-4">Our Mission</h2>
        <p class="text-large text-muted">
          To empower brands with cutting-edge technology and aesthetic design that captivates
          audiences and drives measurable business results. We believe in transparency,
          craftsmanship, and continuous learning.
        </p>
      </div>
    </Reveal>
  </main>
</template>
