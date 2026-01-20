export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxtjs/plausible', 'nuxt-studio'],
  css: ['~/assets/css/main.css'],
  site: {
    name: 'National Genomics Infrastructure Sweden',
  },
  compatibilityDate: '2025-07-18',
  llms: {
    domain: 'https://ngisweden.scilifelab.se',
    title: 'National Genomics Infrastructure Sweden',
    description: 'National Genomics Infrastructure Sweden',
    full: {
      title: 'National Genomics Infrastructure Sweden',
      description: 'National Genomics Infrastructure Sweden',
    },
  },
  mcp: {
    name: 'National Genomics Infrastructure Sweden',
    browserRedirect: '/ai/mcp',
  },
  studio: {
    route: '/coordinators',
    repository: {
      provider: 'github',
      owner: 'NationalGenomicsInfrastructure',
      repo: 'ngi-landing',
      branch: 'dev',
      rootDir: '.',
    },
  },
})
