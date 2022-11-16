import { createI18n } from 'vue-i18n'
//import { componentNames } from '~~/.nuxt/components';
import zh from '../locales/zh.json'
import en from '../locales/en.json'


export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'zh',
    messages: {
      zh,
      en
    }
  })

  vueApp.use(i18n)
})
