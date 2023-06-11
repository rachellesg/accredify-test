<script setup lang="ts">
import DocumentItem from './DocumentItem.vue'

defineProps<{
  title: string
}>()
</script>

<template>
  <section>
    <div class="row">
      <h4>{{ title }}</h4>
      <RouterLink to="/">View All Documents</RouterLink>
    </div>
    <div class="container document-wrapper">
      <DocumentItem>
        <template #heading>Documentation</template>

        Vue’s
        <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
        provides you with all information you need to get started.
      </DocumentItem>

      <DocumentItem>
        <template #heading>Tooling</template>

        This project is served and bundled with
        <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>.
        The recommended IDE setup is
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>.
        If you need to test your components and web pages, check out
        <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
        <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.

        <br />

        More instructions are available in <code>README.md</code>.
      </DocumentItem>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 74%;
}
.document-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
