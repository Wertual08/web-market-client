<template>
  <div class="admin-view">
    <router-link to="/admin/sections">Секции</router-link>
    <router-link to="/admin/products">Товары</router-link>
  </div>
</template>

<style scoped>
.admin-view {
  background: #192F60;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'admin-view',

  components: {
  }
});
</script>