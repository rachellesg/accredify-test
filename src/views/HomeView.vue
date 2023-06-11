<script setup lang="ts">
import { ref, onMounted } from 'vue'

import CareerGoal from '@/components/CareerGoal.vue'
import RecentDocument from '@/components/Document/RecentDocument.vue'

const user = ref<User | null>(null)

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

const fetchUser = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/user')
    const data = await response.json()
    user.value = data.data
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
}

onMounted(fetchUser)
</script>

<template>
  <main>
    <header>
      <div class="settings">
        <img :src="(user && user.profile_picture_url) ?? ''" alt="Profile Picture" />
        {{ user && user.name }}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.28255 0.255061C8.98592 -0.0850202 8.51978 -0.0850202 8.22314 0.255061L5.00252 3.94737L1.78189 0.255061C1.48526 -0.0850202 1.01911 -0.0850202 0.722477 0.255061C0.425841 0.595142 0.425841 1.12955 0.722477 1.46964L4.45162 5.74494C4.74826 6.08502 5.2144 6.08502 5.51104 5.74494L9.24018 1.46964C9.57919 1.12955 9.57919 0.595142 9.28255 0.255061Z"
            fill="#151F32"
          />
        </svg>
      </div>
    </header>
    <section>
      <h1>Hi, {{ user && user.name }} 👋</h1>
      <p class="helper-text">
        Manage your documents issued by SMU Academy or track your career goal.
      </p>
    </section>
    <div class="wrapper">
      <CareerGoal title="Career Goal" />
      <RecentDocument title="Recent Document" />
    </div>
  </main>
</template>

<style scoped>
header {
  margin: 0 0 50px;
  height: 64px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

header:after {
  content: '';
  height: 1px;
  width: 100%;
  background: #888888;
  position: absolute;
  bottom: 0;
}
.settings {
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.settings img {
  width: 20px;
  height: 20px;
  border-radius: 10px;
}

main {
  padding: 0 50px 0 0;
}
</style>
