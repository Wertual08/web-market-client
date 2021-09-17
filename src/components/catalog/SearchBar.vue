<template>
  <div class="search-bar">
    <text-input class="text-input" placeholder="Поиск товара"/>
    <img class="icon" src="@/assets/ic_search.svg"/>
  </div>
</template>


<style scoped>
.search-bar {
  background: #355396;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.search-bar > .text-input {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.search-bar > .icon {
  width: 24px;
  height: 24px;
  padding-right: 16px;

  cursor: pointer;
}

.search-bar > .icon:hover {
  filter: brightness(200%);
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import TextInput from '@/components/common/TextInput.vue'

export default defineComponent({
  components: { TextInput },
  name: 'search-bar',

  setup() {
        
  },
})
</script>
