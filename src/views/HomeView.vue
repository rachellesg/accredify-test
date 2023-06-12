<script setup lang="ts">
import { ref, onMounted } from 'vue'

const fetchUser = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/user')
    const data = await response.json()
    userData.value = data.data
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
}

onMounted(fetchUser)
</script>

<script lang="ts">
import CareerGoal from '@/components/CareerGoal.vue'
import RecentDocument from '@/components/RecentDocument.vue'
import Header from '@/components/layout/Header.vue'

const userData = ref<User | null>(null)

interface User {
  id: number
  name: string
  email: string
  profile_picture_url: string
  email_verified_at: string
  identification_number: string
  current_organisation: {
    id: number
    name: string
    logo_url: string
    is_personal: boolean
  }
}
</script>

<template>
  <main>
    <Header :profilePictureUrl="userData?.profile_picture_url" :name="userData?.name" />

    <div class="content">
      <section>
        <h1>Hi, {{ userData?.name }} 👋</h1>
        <p class="helper-text">
          Manage your documents issued by SMU Academy or track your career goal.
        </p>
      </section>
      <div class="wrapper">
        <!-- <component
          v-if="userData && userData?.current_organisation?.is_personal"
          :is="CareerGoal"
          title="Career Goal"
        /> -->

        <CareerGoal title="Career Goal" />
        <RecentDocument title="Recent Document" />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  flex: 1;
  padding: 0 0 50px;
  background: white;
  border-top-left-radius: 16px;
}

@media screen and (max-width: 768px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>
