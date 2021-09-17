<template>
  <div class="catalog-filter">
    <p class="title">Модельный ряд</p>
  </div>
</template>


<style scoped>
.catalog-filter {
  width: 100%;
  height: 1200px;

  background: blue;

  display: flex;
  flex-direction: column;
}

.catalog-filter > .title {
  padding: 0px;
  margin: 0px;

  color: #C3C5CB;
  
  text-align: left;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 200%;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'catalog-filter',

  setup() {
        
  },
})
</script>
