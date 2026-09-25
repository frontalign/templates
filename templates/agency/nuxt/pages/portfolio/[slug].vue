<script setup lang="ts">
import { ArrowRight, BadgeCheck, ExternalLink } from 'lucide-vue-next'
import { projects } from '~/data/mock'
import Reveal from '~/components/shared/Reveal.vue'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const project = computed(() => projects.find((p) => p.slug === slug.value))

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project Not Found',
    fatal: true,
  })
}

// Next project for footer navigation
const currentIndex = computed(() => projects.findIndex((p) => p.slug === slug.value))
const nextProject = computed(() => {
  if (currentIndex.value === -1) return null
  const nextIdx = (currentIndex.value + 1) % projects.length
  return projects[nextIdx]
})

useHead({
  title: computed(() =>
    project.value
      ? `${project.value.title} | Agency Case Study`
      : 'Project Not Found'
  ),
  meta: [
    {
      name: 'description',
      content: computed(() => project.value?.shortDescription ?? ''),
    },
  ],
})
</script>

<template>
  <main v-if="project" class="py-6 container max-w-4xl">
    <!-- Back Navigation -->
    <NuxtLink to="/portfolio" class="link text-muted mb-4 is-inline-block font-semibold">
      &larr; Back to all projects
    </NuxtLink>

    <!-- Project Header -->
    <Reveal>
      <div class="mbe-5">
        <div class="is-flex align-items-center gap-2 mbe-2">
          <span class="badge is-primary is-pill">{{ project.category }}</span>
          <span class="text-small text-muted font-bold">{{ project.year }}</span>
        </div>
        <h1 class="h1 mbe-3">{{ project.title }}</h1>
        <p class="text-large text-muted leading-relaxed max-w-3xl mbe-4">
          {{ project.shortDescription }}
        </p>

        <!-- Project Quick Stats Strip -->
        <div class="is-grid grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-4 border bg-surface">
          <div>
            <div class="text-small text-muted font-medium">Client</div>
            <div class="font-bold text-dark">{{ project.client }}</div>
          </div>
          <div>
            <div class="text-small text-muted font-medium">Timeline</div>
            <div class="font-bold text-dark">{{ project.year }}</div>
          </div>
          <div>
            <div class="text-small text-muted font-medium">Discipline</div>
            <div class="font-bold text-dark">{{ project.category }}</div>
          </div>
          <div>
            <div class="text-small text-muted font-medium">Key Result</div>
            <div class="font-bold text-primary">{{ project.metric }}</div>
          </div>
        </div>
      </div>
    </Reveal>

    <!-- Main Visual Asset -->
    <Reveal :delay="0.1">
      <div class="ratio is-16x9 rounded-4 overflow-hidden border shadow-large mbe-6">
        <img
          :src="project.image"
          :alt="project.title"
          class="object-fit-cover w-full h-full"
          referrerpolicy="no-referrer"
        >
      </div>
    </Reveal>

    <!-- Case Study Narrative -->
    <div class="is-grid grid-cols-1 lg:grid-cols-3 gap-6 mbe-6">
      <div class="lg:col-span-2">
        <Reveal>
          <div class="content text-base leading-relaxed mbe-5">
            <h2 class="h3 mbe-3">The Background</h2>
            <p class="text-muted mbe-4">{{ project.description }}</p>

            <h2 class="h3 mbe-3">The Challenge</h2>
            <p class="text-muted mbe-4">{{ project.challenge }}</p>

            <h2 class="h3 mbe-3">Our Strategic Approach</h2>
            <p class="text-muted mbe-4">{{ project.solution }}</p>

            <h2 class="h3 mbe-3">Measurable Impact</h2>
            <p class="text-muted mbe-4">{{ project.outcome }}</p>
          </div>
        </Reveal>

        <Reveal :delay="0.15">
          <div class="border rounded-4 bg-surface p-5 mbe-5">
            <div class="text-small text-muted text-uppercase font-bold tracking-widest mbe-2">
              Performance Snapshot
            </div>
            <div class="h2 text-primary font-black mbe-2">
              {{ project.metric }}
            </div>
            <p class="text-muted text-small mbe-0">
              Verified metric reported within the first quarter post-launch.
            </p>
          </div>
        </Reveal>
      </div>

      <!-- Sidebar -->
      <div>
        <Reveal :delay="0.2">
          <div class="border rounded-4 bg-white p-5 shadow-medium mbe-4">
            <h3 class="h5 font-bold mbe-3">Capabilities Delivered</h3>
            <ul class="list is-unstyled mbe-4">
              <li
                v-for="tag in project.tags"
                :key="tag"
                class="is-flex align-items-center gap-2 mbe-2 text-small font-medium"
              >
                <BadgeCheck :size="16" class="text-primary" />
                <span>{{ tag }}</span>
              </li>
            </ul>

            <div class="border-top pt-4">
              <div class="font-bold text-dark mbe-1">Need a similar build?</div>
              <p class="text-small text-muted mbe-3">
                Let's discuss how we can adapt this approach for your brand.
              </p>
              <NuxtLink to="/contact" class="button is-primary is-small rounded-pill w-full">
                Request a Proposal
              </NuxtLink>
            </div>
          </div>
        </Reveal>
      </div>
    </div>

    <!-- Next Case Study & CTA Footer -->
    <Reveal>
      <div class="border-top pt-5 is-flex flex-col md:is-flex md:flex-row align-items-center justify-content-between gap-4">
        <NuxtLink to="/portfolio" class="button is-light rounded-pill">
          &larr; All Case Studies
        </NuxtLink>

        <div v-if="nextProject" class="is-flex align-items-center gap-3 text-right">
          <div>
            <div class="text-small text-muted">Next Project</div>
            <div class="font-bold text-dark">{{ nextProject.title }}</div>
          </div>
          <NuxtLink :to="`/portfolio/${nextProject.slug}`" class="button is-primary rounded-pill">
            Next Case Study <ArrowRight :size="16" />
          </NuxtLink>
        </div>
      </div>
    </Reveal>
  </main>
</template>
