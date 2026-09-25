<script setup lang="ts">
import { stats } from '~/data/mock'
import Reveal from '~/components/shared/Reveal.vue'
</script>

<template>
  <section class="py-6">
    <div class="container">
      <div class="is-grid grid-cols-2 md:grid-cols-4 gap-3">
        <Reveal
          v-for="(item, index) in stats"
          :key="item.label"
          :delay="index * 0.08"
        >
          <div class="agency-stat-card text-center rounded-4 border">
            <div class="text-4xlarge font-black leading-none mbe-2">{{ item.value }}</div>
            <div class="text-muted font-medium">{{ item.label }}</div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>
