import VueI18n from 'vue-i18n'
// 引入语言包
import Vue from 'vue'
import en from './en'
import zh from './zh'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  fallbackLocale: 'zh',
  messages: {
    zh: {
      ...zh,
    },
    en: {
      ...en,
    },
  },
  // 不显示warn
  // silentTranslationWarn: true,
})

export default i18n
