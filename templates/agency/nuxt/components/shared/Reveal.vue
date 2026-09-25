<script setup lang="ts">
import { Motion } from 'motion-v'

const props = withDefaults(
  defineProps<{
    delay?: number
    className?: string
  }>(),
  {
    delay: 0,
    className: '',
  }
)
</script>

<template>
  <Motion
    as="div"
    :class="className"
    :initial="{ opacity: 0, y: 32 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once: true, margin: '-100px' }"
    :transition="{
      duration: 0.7,
      delay: props.delay,
      ease: [0.16, 1, 0.3, 1],
    }"
  >
    <slot />
  </Motion>
</template>
