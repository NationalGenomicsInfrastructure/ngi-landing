---
seo:
  title: NGI Sweden
  description: Our mission at NGI is to operate a world-leading genomics infrastructure that provides state-of-the-art technology and expertise, drives technology development, and supports its users in applying genomics across the spectrum of life sciences.
---

::u-page-hero
#title
Join us on a base odyssey...

#description
NGI is one of the largest technical platforms at SciLifeLab. We provide access to technology for sequencing, genotyping and associated bioinformatics support to researchers based in Sweden.

#links
  :::u-button
  ---
  color: primary
  size: xl
  to: getting-started/installation
  trailing-icon: i-lucide-arrow-right
  ---
  Get started at NGI
  :::

  :::u-button
  ---
  color: primary
  size: xl
  to: https://ngisweden.scilifelab.se/orders
  trailing-icon: i-lucide-dna
  ---
  New order
  :::

  :::u-button
  ---
  color: neutral
  icon: simple-icons-github
  size: xl
  to: https://github.com/NationalGenomicsInfrastructure/
  variant: outline
  ---
  Open-source is in our DNA
  :::
::

::u-page-section
  :::u-page-grid
    ::::u-page-card
    ---
    spotlight: true
    class: group col-span-2 lg:col-span-1
    target: _blank
    to: https://nuxt.com
    ---
    - mHello
    - jkkj

    #title
    Built with [Nuxt](https://nuxt.com)

    #description
    Optimized by the most famous Vue framework. Docus gives you everything you need to build fast, performant, and SEO-friendly websites.
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    to: https://ui.nuxt.com
    ---
      :::::u-color-mode-image
      ---
      height: 320
      width: 859
      alt: Beautiful visual powered by UI
      class: w-full h-80 object-cover rounded-lg
      dark: /landing/dark/templates-ui-pro.webp
      light: /landing/light/templates-ui-pro.webp
      ---
      :::::

    #title
    Powered by [Nuxt UI](https://ui.nuxt.com)

    #description
    Beautiful out of the box, minimal by design but highly customizable. Docus leverages Nuxt UI to give you the best docs writing experience with zero boilerplate, just focus on your content.
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    ---
      :::::tabs
        ::::::tabs-item{.mt-5 icon="i-lucide-eye" label="Preview"}
          :::::::div{.flex.flex-col.gap-4}
            ::::::::note{.my-0}
            Here's some additional information for you.
            ::::::::

            ::::::::tip{.my-0}
            Here's a helpful suggestion.
            ::::::::

            ::::::::warning{.my-0}
            Be careful with this action as it might have unexpected results.
            ::::::::

            ::::::::caution{.my-0}
            This action cannot be undone.
            ::::::::
          :::::::
        ::::::

        ::::::tabs-item
        ---
        class: mt-5 mb-2 text-xs overflow-x-auto
        icon: i-lucide-code
        label: Code
        ---
        ```mdc
        ::note
        Here's some additional information.
        ::

        ::tip
        Here's a helpful suggestion.
        ::

        ::warning
        Be careful with this action as it might have unexpected results.
        ::

        ::caution
        This action cannot be undone.
        ::
        ```
        ::::::
      :::::

    #title
    Enhanced Markdown syntax by [Nuxt Content](https://content.nuxt.com)

    #description
    The only thing you need to take care about is writing your content. Write your pages in Markdown and extend with MDC syntax to embed Nuxt UI or custom Vue components. Structure, routing, and rendering are handled for you.
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 md:col-span-1
    target: _blank
    ---
      :::::div{.bg-elevated.rounded-lg.p-3.overflow-x-auto}
      ```ts [app.config.ts]
      export default defineAppConfig({
      ui: {
      colors: {
      primary: 'green',
      secondary: 'sky',
      },
      },
      socials: {
      x: 'https://x.com/nuxt_js',
      nuxt: 'https://nuxt.com'
      }
      })
      ```
      :::::

    #title
    Customize with [Nuxt App Config](https://nuxt.com/docs/4.x/getting-started/configuration#app-configuration)

    #description
    Update colors, social links, header logos and component styles globally using the `app.config.ts`, no direct code modifications required.
    ::::
  :::
::
