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
    <div class="container">Etc etc</div>
  </section>
</template>

<style scoped>
section {
  width: 25%;
}
</style>
