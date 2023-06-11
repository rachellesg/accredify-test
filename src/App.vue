<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="menu">
    <img alt="logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
    <nav>
      <RouterLink to="/">
        <img alt="Dashboard Homepage" src="@/assets/icons/home.svg" width="18" height="18" />
      </RouterLink>
      <RouterLink to="/">
        <img alt="Documents" src="@/assets/icons/file.svg" width="18" height="18" />
      </RouterLink>
      <RouterLink to="/">
        <img alt="Some page" src="@/assets/icons/bulb.svg" width="18" height="18" />
      </RouterLink>
      <RouterLink to="/">
        <img alt="Another page" src="@/assets/icons/shield.svg" width="18" height="18" />
      </RouterLink>
      <RouterLink to="/">
        <img alt="Settings" src="@/assets/icons/setting.svg" width="18" height="18" />
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

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
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
</style>
