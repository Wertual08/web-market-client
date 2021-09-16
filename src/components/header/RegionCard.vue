<template>
  <div class="box">
    <p>Ваш регион</p>
    <p class="region">{{ region }}?</p>
  </div>  
</template>


<style scoped>
.box {
  color: white;
  display: flex;
  justify-content: space-between;
}

.region {
  padding-left: 16px;
  text-decoration: underline;
  cursor: pointer;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'region-card',

  setup() {
    
  },

  data() {
    return {
      region: 'Москва',
    }
  }
})
</script>
