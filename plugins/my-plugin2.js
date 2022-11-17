export default defineNuxtPlugin((/* nuxtApp */) => {
    return {
      provide: {
        myPlugin22: (msg) => `String generated from my auto-imported plugin 22! ${msg}`
      }
    }
  })
  