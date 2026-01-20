export default defineAppConfig({
  socials: {
    x: 'https://x.com/ngisweden',
    youtube: 'https://www.youtube.com/channel/UCkOM8G7wEJKloyYT6sIo63w',
    linkedin: 'https://www.linkedin.com/company/national-genomics-infrastructure-sweden/',
    instagram: 'https://www.instagram.com/ngisweden/',
    github: 'https://github.com/NationalGenomicsInfrastructure',
  },
  toc: {
    bottom: {
      links: [
        {
          icon: 'i-lucide-book-open',
          label: 'Nuxt UI docs',
          to: 'https://ui.nuxt.com/getting-started/installation/nuxt',
          target: '_blank',
        },
        {
          icon: 'i-lucide-book-open',
          label: 'Nuxt Content docs',
          to: 'https://content.nuxt.com/docs/getting-started/installation/',
          target: '_blank',
        },
        {
          icon: 'i-lucide-book-open',
          label: 'Nuxt Studio docs',
          to: 'https://nuxt.studio/introduction',
          target: '_blank',
        },
      ],
    },
  },
  github: {
    rootDir: '.',
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'slate'
    },
    pageHero: {
      slots: {
        title: 'font-semibold sm:text-6xl',
        container: '!pb-0',
      },
    },
    pageCard: {
      slots: {
        container: 'lg:flex min-w-0',
        wrapper: 'flex-none',
      },
    },
  },
})
