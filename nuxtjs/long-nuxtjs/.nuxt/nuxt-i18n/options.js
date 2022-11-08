import locale77427fae from '../../cores/langs/en.ts'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en"},
  vueI18nLoader: false,
  locales: [{"name":"Eng","code":"en","iso":"en-US","file":"en.ts"},{"name":"Viet Name","code":"vi","iso":"vi","file":"vi.ts"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "no_prefix",
  lazy: true,
  langDir: "/Users/longnguyen/Desktop/Nuxt-Hiko/nuxtjs/long-nuxtjs/cores/langs",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieAge":365,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"name":"Eng","code":"en","iso":"en-US","file":"en.ts"},{"name":"Viet Name","code":"vi","iso":"vi","file":"vi.ts"}],
  localeCodes: ["en","vi"],
  additionalMessages: [],
}

export const localeMessages = {
  'en.ts': () => Promise.resolve(locale77427fae),
  'vi.ts': () => import('../../cores/langs/vi.ts' /* webpackChunkName: "lang-vi.ts" */),
}
