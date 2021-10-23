<template>
  <div class="profile-dropdown">
    <router-link class="navigator" to="/orders">Мои заказы</router-link>
    <p class="navigator" @click="$emit('change-password')">Изменить пароль</p>
    <action-button class="logout" @click="$emit('logout')">Выйти</action-button>
  </div>
</template>


<style scoped>
.profile-dropdown {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.profile-dropdown > .navigator {
  margin: 16px 16px 0 16px;

  cursor: pointer;
  color: white;

  text-decoration: none;
  
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
}
.profile-dropdown > .navigator:hover {
  color: lightgray;
}

.profile-dropdown > .logout {
  width: 60px;
  height: 40px;

  margin: 16px;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import ActionButton from '../common/ActionButton.vue'

export default defineComponent({
  components: { ActionButton },
  name: 'profile-dropdown',

  emits: ['logout', 'change-password'],

  setup() {
        
  },

  data() {
    return {
      
    }
  }
})
</script>
