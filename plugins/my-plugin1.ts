export default defineNuxtPlugin((/* nuxtApp */) => {
    return {
      provide: {
        myPlugin11: (msg: string) => `String generated from my auto-imported plugin! ${msg}`
      }
    }
  })
  