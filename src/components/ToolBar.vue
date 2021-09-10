<template>
  <div class="tool-bar">
    <div class="profile">
      <dropdown text="Профиль">
        <profile-card @register="$emit('register')"/>
      </dropdown>
    </div>
    <div class="utils">
      
    </div>
  </div>
</template>


<style scoped>
.tool-bar {
  height: 20px;

  position: sticky;
  top: 0px;

  background: dimgray;

  display: flex;
  justify-content: space-between;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import Dropdown from './common/Dropdown.vue'
import ProfileCard from './common/ProfileCard.vue'

export default defineComponent({
  components: { 
    Dropdown,
    ProfileCard 
  },
  name: 'tool-bar',

  emits: ['register'],

  setup() {
    
  },
})
</script>
