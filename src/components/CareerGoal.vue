<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue'

defineProps<{
  title: string
}>()

const careerGoalData = ref<CareerGoal | null>(null)

interface CareerGoal {
  id: number
  name: string
  description: string
  category: string
  type: string
  progress: number
}

const fetchCareerGoal = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/goal')
    const data = await response.json()
    careerGoalData.value = data.data[0]
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
}

onMounted(fetchCareerGoal)
</script>

<template>
  <section>
    <div class="row">
      <h4>{{ title }}</h4>
    </div>
    <div class="container">
      <h6>Your Progress</h6>
      I want to become a
      <h4>
        {{ careerGoalData?.name }}
      </h4>
      <RouterLink to="/">View Insights</RouterLink>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 25%;
  margin-right: 15px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
