<script setup lang="ts">
import RecentDocumentItem from './RecentDocumentItem.vue'

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
      <RecentDocumentItem>
        <template #heading>Documentation</template>
        <template #date>23 July 2023</template>
        <template #action
          ><svg
            width="4"
            height="18"
            viewBox="0 0 4 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2" cy="2" r="2" fill="#5B6270" />
            <circle cx="2" cy="9" r="2" fill="#5B6270" />
            <circle cx="2" cy="16" r="2" fill="#5B6270" />
          </svg>
        </template>
      </RecentDocumentItem>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 74%;
  flex: 1;
}
.document-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
