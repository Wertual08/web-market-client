<template>
  <div class="profile-dropdown">
    <action-button class="logout" @click="$emit('logout')">Выйти</action-button>
  </div>
</template>


<style scoped>
.profile-dropdown {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profile-dropdown > .logout {
  width: 60px;
  height: 40px;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import ActionButton from '../common/ActionButton.vue'

export default defineComponent({
  components: { ActionButton },
  name: 'profile-dropdown',

  emits: ['logout'],

  setup() {
        
  },
})
</script>
