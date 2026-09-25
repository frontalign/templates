import { FrontAlign, DarkMode } from 'frontalign'

export default defineNuxtPlugin((nuxtApp) => {
  let faInstance: FrontAlign | null = null
  let darkModeInstance: DarkMode | null = null

  if (import.meta.client) {
    faInstance = new FrontAlign()
    darkModeInstance = new DarkMode()

    // Close mobile menu on page transition if opened
    nuxtApp.hook('page:finish', () => {
      const toggler = document.querySelector('[fa-toggle="navbar"].is-active')
      if (toggler) {
        (toggler as HTMLElement).click()
      }
    })
  }

  return {
    provide: {
      frontalign: faInstance,
      darkMode: darkModeInstance,
    },
  }
})
