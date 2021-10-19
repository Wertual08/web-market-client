<template>
  <div class="admin-view">
    <div class="navigator">
      <router-link class="item" to="/admin/records">Редактирование файлов</router-link>
      <router-link class="item" to="/admin/sections">Редактирование секций</router-link>
      <router-link class="item" to="/admin/products">Редактирование товаров</router-link>
    </div>
  </div>
</template>

<style scoped>
.admin-view {
  width: 100%;
  height: 100%;
  
  background: #192F60;

  display: flex;
  justify-content: center;
  align-items: center;
}

.admin-view > .navigator {
  width: 90%;
  display: flex;
  justify-content: space-around;
}

.admin-view > .navigator > .item {
  text-decoration: none;
  color: red;
  
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
}
.admin-view > .navigator > .item:hover {
  color: #AA0000;
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