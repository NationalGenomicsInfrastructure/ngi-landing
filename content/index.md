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
    #title
    How do the services at NGI work?

    #description
    A typical project at NGI consists of six phases

      :::::steps{level="3"}
      ### Order

      ### Planning meeting

      ### Sample submission

      ### Sequencing or genotyping

      ### Bioinformatic processing

      ### Data delivery
      :::::
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    ---
      :::::u-color-mode-image
      ---
      height: 474
      width: 859
      alt: Flowcell inspection
      class: w-full h-80 object-cover rounded-lg
      dark: /landing/flowcell.webp
      light: /landing/flowcell.webp
      ---
      :::::

    #title
    What is the National Genomics Infrastructure?

    #description
    We are a national Swedish research infrastructure and the largest facility within SciLifeLab. NGI provides access to technology for library preparations, sequencing, genotyping and associated bioinformatics support. The platform comprises two nodes: NGI Stockholm and NGI Uppsala; SNP\&SEQ Technology Platform, and Uppsala Genome Center (UGC). Please visit the About Us page to read more.

    NGI services include a variety of different applications on a range of instruments. You can read more about our services by browsing the Applications, Technologies, or Bioinformatics tabs from the menu above.
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-1
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
    How would editing the new website work?

    #description
    The only thing you need to take care about is writing your content. Write your pages in Markdown and extend with MDC syntax to embed components. Structure and more complex features are handled for you.

    You can use a Markdown editor like Notion or directly edit in the browser (You need to authenticate to GitHub). Changes would be committed to a development branch on GitHub and merged to the main branch when ready. Then the production website will reflect your changes.
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    ---
    #body
    ## Is renewing our website reasonable?

    ### No

    - We have a working website and a full rebuild would require significant effort.
    - Editors are (somewhat) familiar with our current interface.
    - Wordpress powers about a quarter of all websites of the world!
    - GitHub as American service may be affected by tensions between US and Europe.
    - Migrating all existing content may introduce errors or lose information.
    - Some integrations on the old site could be difficult to replicate on a new platform.

    ### Yes

    - KTH IT plans to retire the *Hulk* server. We need to change our current setup anyway.
    - Wordpress sites get hacked frequently. Our backup strategy has never been put to test.
    - Much of the functionality depends on Wordpress plugins od 3rd party authors. Risk for supply-chain attacks.
    - Many features of our Wordpress website are factually not used. Maybe we can omit them to speed up transition?
    - Copying and pasting from Word or Google Docs into Wordpress has left behind many unclosed or stray HTML-like tags that clutter our old website.
    - Using Markdown makes it easier to write content and enforce consistent design across all pages.
    - We could use a proper Continuous integration including tests.
    - Static websites load faster.
    - We could improve accessibility for LLMs via MCP. Users could ask their LLM model about NGI services.
    - A new site would allow for a more modern look, improved accessibility, and better compliance with current web standards.
    ::::
  :::
::

::u-page-section
  :::u-page-card
    ::::accordion
      :::::accordion-item
      ---
      icon: i-lucide-circle-help
      label: What is NGI and where is it located?
      ---
      The National Genomics Infrastructure (NGI) is part of SciLifeLab and is Sweden's largest facility for genomics technologies. It has two nodes: NGI Stockholm and NGI Uppsala (SNP\&SEQ Technology Platform and Uppsala Genome Center).
      :::::

      :::::accordion-item
      ---
      icon: i-lucide-circle-help
      label: How do NGI services work?
      ---
      You place an order through the NGI order portal. Registration is required. If multiple applications are needed (e.g. library prep plus genotyping), separate orders are required for each. A planning meeting is part of the process for new users or new methods. Samples are delivered, processed (sequencing/genotyping + bioinformatics), and data is delivered via the Data Delivery System (DDS).
      :::::

      :::::accordion-item
      ---
      icon: i-lucide-circle-help
      label: What is a planning meeting?
      ---
      A planning meeting is optional but recommended for first-time users or when using new applications. In this meeting you discuss project scope: costs, timeline, sample requirements, and experimental approach. The meeting is free and non-binding.
      :::::

      :::::accordion-item
      ---
      icon: i-lucide-circle-help
      label: How do I place an order?
      ---
      Choose the correct form in the order portal (sequencing or genotyping). Use "Request a meeting" if unsure. Provide project title, contact information, invoice details, plus as much project-specific information as possible. Mandatory fields are marked. You may save an incomplete order, but you can only submit when all required fields are filled. Once submitted, the order cannot be edited. Orders are viewable in "My orders".
      :::::

      :::::accordion-item
      ---
      icon: i-lucide-circle-help
      label: What happens after I submit my order?
      ---
      NGI reviews your order for technical feasibility. Projects requiring more than 5% of NGI's total sequencing capacity undergo external review. If accepted, you'll receive a project ID and an agreement. No sample delivery is permitted until the agreement is signed.
      :::::

      :::::accordion-item
      ---
      icon: i-lucide-circle-help
      label: How are agreements prepared?
      ---
      Agreements are based on order details and project coordinator communications. You'll be contacted for clarifications if needed. No action can proceed until the agreement is signed, and samples cannot be sent before that.
      :::::

      :::::accordion-item
      ---
      icon: i-lucide-circle-help
      label: What are the sequencing and genotyping prices?
      ---
      Academic users are charged based on consumables cost. Reagents, consumables, etc., are costed using vendor prices. Commercial users are charged to cover all costs.
      :::::

      :::::accordion-item
      ---
      icon: i-lucide-circle-help
      label: How is my personal account data handled?
      ---
      Data from registration will be used for contacting, administrative tasks, and invoicing. It is also reported, where required, to funding bodies. Data is stored up to 10 years after your last logged-in activity and processed per GDPR.
      :::::

      :::::accordion-item
      ---
      icon: i-lucide-circle-help
      label: How should I acknowledge NGI in publications?
      ---
      You must acknowledge SciLifeLab, NGI, VR, and UPPMAX when using data from NGI. The exact wording is in the project report delivered with your data. Using NGI's logo in presentations and posters is encouraged. Acknowledgement demonstrates the contribution and is critical for infrastructure funding.
      :::::
    ::::
  :::

#title
Frequently asked questions
::
