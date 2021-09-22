<template>
  <div class="admin-products-toolbar">
    <action-button class="create" @click="$emit('create')">Добавить товар</action-button>
  </div>
</template>


<style scoped>
.admin-products-toolbar {
  display: flex;
  justify-content: space-around;
}

.admin-products-toolbar > .create {
  height: 32px;
  width: auto;

  padding: 0px 8px; 
}
</style>


<script lang="ts">
import ActionButton from '@/components/common/ActionButton.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'admin-products-toolbar',
  components: { ActionButton },

  emits: ['create'],

  setup() {
        
  },
})
</script>
