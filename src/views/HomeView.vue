<script setup lang="ts">
import CareerGoal from '@/components/CareerGoal.vue'
import RecentDocument from '@/components/Document/RecentDocument.vue'
</script>

<template>
  <main>
    <h1>Hi, Gerald Goh 👋</h1>
    <p class="helper-text">
      Manage your documents issued by SMU Academy or track your career goal.
    </p>
    <CareerGoal title="Career Goal" />
    <RecentDocument title="Recent Document" />
  </main>
</template>
