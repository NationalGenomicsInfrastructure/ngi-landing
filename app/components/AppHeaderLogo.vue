<template>
    <div class="flex items-center gap-2 mr-8">
      <LogoNGI class="ngi-logo-icon" />
      <h1 class="ngi-logo-title">
        <div class="ngi-logo-line">
          <span class="text-gray-200 dark:text-gray-800">GA</span>
          <span class="ngi-logo-primary">N</span>
          <span class="ngi-logo-secondary">at</span>
          <span class="ngi-logo-primary">ion</span>
          <span class="ngi-logo-secondary">a</span>
          <span class="ngi-logo-primary">l</span>
          <span class="text-gray-200 dark:text-gray-800">CTAC</span>
        </div>
        <div class="ngi-logo-line">
          <span class="text-gray-200 dark:text-gray-800">ATCA</span>
          <span class="ngi-logo-secondary">G</span>
          <span class="ngi-logo-primary">enomi</span>
          <span class="ngi-logo-secondary">c</span>
          <span class="ngi-logo-primary">s</span>
          <span class="text-gray-200 dark:text-gray-800">GT</span>
        </div>
        <div class="ngi-logo-line">
          <span class="ngi-logo-primary">Infr</span>
          <span class="ngi-logo-secondary">a</span>
          <span class="ngi-logo-primary">s</span>
          <span class="ngi-logo-secondary">t</span>
          <span class="ngi-logo-primary">ru</span>
          <span class="ngi-logo-secondary">ct</span>
          <span class="ngi-logo-primary">ure</span>
        </div>
      </h1>
    </div>
</template>

<style scoped>
.ngi-logo-icon {
  height: var(--ngi-logo-height, 2.5em);
  width: auto;
  flex-shrink: 0;
}

.ngi-logo-title {
  font-family: var(--ngi-logo-font, inherit);
  text-transform: uppercase;
  line-height: 0.01;
  font-size: calc(var(--ngi-logo-height, 2.5em) / 3.6);
  height: var(--ngi-logo-height, 2.5em);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ngi-logo-primary {
  color: var(--ngi-logo-color-primary, var(--color-primary));
}

.ngi-logo-secondary {
  color: var(--ngi-logo-color-secondary, var(--color-secondary));
}

.ngi-logo-line {
  display: inline;
}

</style>

