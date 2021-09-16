<template>
  <div class="dropdown">
    {{ text }}
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>


<style scoped>
.dropdown {
  display: inline-block;
  position: relative;
}

.dropdown > .content {
  display: none;
  position: absolute;

  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.4);
}

.dropdown:hover {
  background: rgba(150, 150, 200, 0.5);
}

.dropdown:hover > .content {
  display: block;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'dropdown',
  
  props: {
    text: String,
  },

  setup() {
    
  },
})
</script>
