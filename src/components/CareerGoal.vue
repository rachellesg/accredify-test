<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="container">
    <h4>{{ title }}</h4>
  </div>
</template>

<style scoped></style>
