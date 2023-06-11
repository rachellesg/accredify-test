<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section>
    <div class="row">
      <h4>{{ title }}</h4>
    </div>
    <div class="container">
      <h6>Your Progress</h6>
      I want to become a
      <h4>Tax Manager</h4>
      <RouterLink to="/">View Insights</RouterLink>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 25%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
