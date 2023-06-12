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
      <div class="progress-bar">
        <progress
          :value="careerGoalData?.progress"
          min="0"
          max="100"
          style="visibility: hidden; height: 0; width: 0"
        />
      </div>
      I want to become a
      <h4 class="title">
        {{ careerGoalData?.name }}
      </h4>
      <RouterLink to="/">View Insights</RouterLink>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 30%;
  margin-right: 15px;
}

@media screen and (max-width: 768px) {
  section {
    width: 100%;
  }
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.progress-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(var(--primary) 35%, #e8e9eb 0);
}

.progress-bar:before {
  content: '35%';
  font-weight: 700;
  font-size: 28px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #2b22b5;
}

@property --progress-value {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}

.title {
  margin: 0 0 15px;
}
</style>
