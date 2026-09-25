<script setup lang="ts">
import { ArrowRight, Sparkles } from 'lucide-vue-next'
import { projects, type Project } from '~/data/mock'
import Reveal from '~/components/shared/Reveal.vue'

useHead({
  title: 'Portfolio & Case Studies | Agency Starter Template',
  meta: [
    {
      name: 'description',
      content:
        'Explore our featured case studies and portfolio projects across branding, web design, development, and growth marketing.',
    },
  ],
})

const categories = ['All', 'Web Design', 'Branding', 'Development', 'Marketing'] as const
type Category = (typeof categories)[number]

const selectedCategory = ref<Category>('All')

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects
  }
  return projects.filter((project) => project.category === selectedCategory.value)
})

const featuredProjects = computed(() => projects.filter((p) => p.featured))

function getCategoryCount(cat: Category): number {
  if (cat === 'All') return projects.length
  return projects.filter((p) => p.category === cat).length
}
</script>

<template>
  <main class="py-6 container">
    <!-- Hero Section -->
    <Reveal>
      <div class="text-center max-w-3xl mx-auto mbe-6">
        <div class="badge is-primary-outline is-pill mbe-3">Selected Work</div>
        <h1 class="h1 mbe-3">Work that transforms brands and scales businesses.</h1>
        <p class="text-large text-muted mbe-4">
          A curated selection of our recent digital products, brand identities, and custom engineering for venture-backed startups and category leaders.
        </p>
        <div class="is-flex justify-content-center gap-3">
          <NuxtLink to="/contact" class="button is-primary is-medium rounded-pill">
            Start a Project <ArrowRight :size="16" />
          </NuxtLink>
          <NuxtLink to="/services" class="button is-light is-medium rounded-pill">
            Explore Capabilities
          </NuxtLink>
        </div>
      </div>
    </Reveal>

    <!-- Featured Projects Showcase -->
    <section v-if="selectedCategory === 'All'" class="mbe-6">
      <Reveal>
        <div class="is-flex align-items-center justify-content-between mbe-4">
          <div>
            <div class="text-small text-muted text-uppercase font-bold tracking-widest mbe-1">Highlights</div>
            <h2 class="h3 mbe-0">Featured Case Studies</h2>
          </div>
          <span class="badge is-primary is-pill">Flagship Partnerships</span>
        </div>
      </Reveal>

      <div class="is-grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Reveal
          v-for="(project, index) in featuredProjects"
          :key="project.slug"
          :delay="index * 0.1"
        >
          <div class="border rounded-4 bg-white overflow-hidden shadow-medium is-flex flex-col h-full">
            <div class="ratio is-16x9 overflow-hidden is-relative">
              <img
                :src="project.image"
                :alt="project.title"
                class="object-fit-cover w-full h-full"
                referrerpolicy="no-referrer"
              >
              <div class="is-absolute top-3 left-3 is-flex gap-2">
                <span class="badge is-dark is-pill">{{ project.category }}</span>
                <span class="badge is-primary is-pill">{{ project.metric }}</span>
              </div>
            </div>

            <div class="p-5 is-flex flex-col flex-1 justify-content-between">
              <div>
                <div class="is-flex align-items-center justify-content-between text-small text-muted mbe-2">
                  <span>{{ project.client }}</span>
                  <span>{{ project.year }}</span>
                </div>
                <h3 class="h3 mbe-2">{{ project.title }}</h3>
                <p class="text-muted mbe-4 leading-relaxed">{{ project.shortDescription }}</p>
                
                <div class="is-flex flex-wrap gap-2 mbe-4">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="badge is-light is-pill"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <div>
                <NuxtLink
                  :to="`/portfolio/${project.slug}`"
                  class="button is-primary is-pill"
                >
                  View Case Study &rarr;
                </NuxtLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- Filter Buttons -->
    <Reveal>
      <div class="mbe-5">
        <div class="is-flex flex-wrap align-items-center justify-content-center gap-2">
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            class="button is-pill is-small"
            :class="selectedCategory === category ? 'is-primary' : 'is-light'"
            @click="selectedCategory = category"
          >
            {{ category }}
            <span class="text-small m-inline-start-1 opacity-75">
              ({{ getCategoryCount(category) }})
            </span>
          </button>
        </div>
      </div>
    </Reveal>

    <!-- Project Grid -->
    <section class="mbe-6">
      <div class="is-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Reveal
          v-for="(project, index) in filteredProjects"
          :key="project.slug"
          :delay="index * 0.06"
        >
          <NuxtLink
            :to="`/portfolio/${project.slug}`"
            class="agency-service-card link border rounded-4 bg-white overflow-hidden shadow-medium is-flex flex-col h-full text-no-decoration"
          >
            <div class="ratio is-16x9 overflow-hidden is-relative">
              <img
                :src="project.image"
                :alt="project.title"
                class="object-fit-cover w-full h-full"
                referrerpolicy="no-referrer"
              >
              <div class="is-absolute top-2 right-2">
                <span class="badge is-light is-pill">{{ project.metric }}</span>
              </div>
            </div>

            <div class="p-4 is-flex flex-col flex-1 justify-content-between">
              <div>
                <div class="badge is-primary-outline is-pill mbe-2">{{ project.category }}</div>
                <h3 class="h4 mb-2 text-dark">{{ project.title }}</h3>
                <p class="text-muted text-small mbe-3 leading-relaxed">{{ project.shortDescription }}</p>

                <div class="is-flex flex-wrap gap-1 mbe-4">
                  <span
                    v-for="tag in project.tags.slice(0, 3)"
                    :key="tag"
                    class="badge is-light is-pill text-small"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <div class="font-bold text-primary is-flex align-items-center gap-1 text-small">
                Read Case Study <ArrowRight :size="14" />
              </div>
            </div>
          </NuxtLink>
        </Reveal>
      </div>

      <div v-if="filteredProjects.length === 0" class="text-center py-6">
        <p class="text-muted">No projects found in this category.</p>
      </div>
    </section>

    <!-- Call to Action Banner -->
    <Reveal>
      <div class="agency-offer-card rounded-4 p-6 text-center shadow-large">
        <div class="max-w-2xl mx-auto">
          <div class="badge is-primary is-pill mbe-3">Have a project in mind?</div>
          <h2 class="h2 text-white mbe-3">Let's craft your next digital success story.</h2>
          <p class="text-slate-300 text-large mbe-4">
            We partner with forward-thinking businesses to design, engineer, and scale industry-leading digital experiences.
          </p>
          <NuxtLink to="/contact" class="button is-primary is-large rounded-pill">
            Get in Touch <ArrowRight :size="18" />
          </NuxtLink>
        </div>
      </div>
    </Reveal>
  </main>
</template>
