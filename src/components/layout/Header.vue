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
    <div class="content">
      <div />
      <div class="settings">
        <img :src="profilePictureUrl" class="profile-picture" alt="Profile Picture" />
        {{ name }}

        <img src="@/assets/icons/chevron-down.svg" />
      </div>
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
  margin: 0 0 30px;
}

header:after {
  content: '';
  height: 1px;
  width: 100%;
  background: #d0d2d6;
  position: absolute;
  bottom: 0;
}
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.settings {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 150px;
}
.profile-picture {
  width: 20px;
  height: 20px;
  border-radius: 10px;
}
</style>
