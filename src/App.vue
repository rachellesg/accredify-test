<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const menuLinks = [
  {
    name: 'Dashboard Homepage',
    link: '/',
    icon: '/src/assets/icons/home.svg'
  },
  {
    name: 'Documents',
    link: '/',
    icon: '/src/assets/icons/file.svg'
  },
  {
    name: 'Some Page',
    link: '/',
    icon: '/src/assets/icons/bulb.svg'
  },
  {
    name: 'Another Page',
    link: '/',
    icon: '/src/assets/icons/shield.svg'
  },
  {
    name: 'Settings',
    link: '/',
    icon: '/src/assets/icons/setting.svg'
  }
]
</script>

<template>
  <div class="menu">
    <img alt="logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
    <nav>
      <RouterLink v-for="link in menuLinks" :to="link.link" :key="link.name">
        <img :alt="link.name" :src="link.icon" />
      </RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
.menu {
  line-height: 1.5;
  background: var(--background-dark);
  color: var(--white);
  height: 100vh;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0;
}

.logo {
  display: block;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

nav a {
  width: 60px;
  height: 60px;
  display: flex;
  padding: 18px;
  align-items: center;
  justify-content: center;
}

nav a:hover {
  background-color: #353d4e !important;
}

nav a img {
  filter: invert(92%) sepia(10%) saturate(78%) hue-rotate(182deg) brightness(93%) contrast(87%);
}
</style>
