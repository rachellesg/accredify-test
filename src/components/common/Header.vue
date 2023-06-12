<script lang="ts">
export default {
  props: {
    profilePictureUrl: {
      type: String
    },
    name: {
      type: String
    }
  }
}
</script>

<template>
  <header>
    <div />
    <div class="content settings">
      <img :src="profilePictureUrl" class="profile-photo" alt="Profile Picture" />
      {{ name }}

      <img src="@/assets/icons/chevron-down.svg" />
    </div>
  </header>
</template>

<style scoped>
header {
  height: 64px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

header:after {
  content: '';
  height: 1px;
  width: 100%;
  background: #d0d2d6;
  position: absolute;
  bottom: 0;
}
.settings {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
}
.profile-photo {
  width: 20px;
  height: 20px;
  border-radius: 10px;
}
</style>
