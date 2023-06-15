<script lang="ts">
import { ref, onMounted } from 'vue'

export default {
  props: {
    profilePictureUrl: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const profilePictureUrl = ref<string | null>(props.profilePictureUrl)
    const name = ref<string | null>(props.name)
    const isDropdownVisible = ref(false)

    const toggleDropdown = () => {
      isDropdownVisible.value = !isDropdownVisible.value
    }

    const handleContentClick = (event: MouseEvent) => {
      const dropdownMenu = document.querySelector('.dropdown-menu')
      if (dropdownMenu && !dropdownMenu.contains(event.target as Node)) {
        isDropdownVisible.value = false
      }
    }

    onMounted(() => {
      isDropdownVisible.value = false
    })

    return {
      profilePictureUrl,
      name,
      toggleDropdown,
      handleContentClick,
      isDropdownVisible
    }
  }
}
</script>

<template>
  <header>
    <div class="content">
      <div />
      <div :class="['settings', { active: isDropdownVisible }]" @click="toggleDropdown">
        <img
          :src="profilePictureUrl ? profilePictureUrl : 'https://placehold.co/400x400.png'"
          class="profile-picture"
          alt="Profile Picture"
        />
        {{ name ? name : 'Settings' }}

        <img src="@/assets/icons/chevron-down.svg" />
        <div v-if="isDropdownVisible" class="dropdown-menu" @click.stop>
          <!-- Dropdown menu content goes here -->
          <div class="profile">
            <img
              :src="profilePictureUrl ? profilePictureUrl : 'https://placehold.co/400x400.png'"
              class="profile-picture"
              alt="Profile Picture"
            />
            <div class="name">
              {{ name ? name : 'Hi!' }}<br />
              <small>Recipient</small>
            </div>
          </div>
          <div class="logout"><img src="@/assets/icons/door.svg" alt="Log Out" />Log Out</div>
        </div>
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
  justify-content: flex-end;
  align-items: center;
  column-gap: 10px;
  position: relative;
  border: 1px solid transparent;
  padding: 8px;
}

.settings.active {
  border: 1px solid var(--primary);
  border-radius: 4px;
}

.dropdown-menu {
  position: absolute;
  right: 0;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  width: 272px;
  z-index: 1;
  background-color: var(--white);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}

.profile {
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
  position: relative;
  padding: 0 0 15px;
  margin: 0 0 15px;
}

.profile .name {
  font-weight: bold;
  width: 100%;
  line-height: 15px;
}

.profile .profile-picture {
  width: 48px;
  height: 48px;
}

.profile:after {
  position: absolute;
  background: var(--neutral-20);
  content: '';
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
}

.logout {
  display: flex;
  justify-content: flex-start;
  column-gap: 10px;
}
.profile-picture {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
</style>
