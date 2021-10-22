<template>
  <div class="admin-products-view">
    <div class="controls">
      <admin-products-toolbar @create="onCreate"/>
      <admin-products-list/>
    </div>
  </div>
</template>


<style scoped>
.admin-products-view {
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.admin-products-view > .controls {
  width: 90%;
  height: 100%;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import AdminProductsList from '@/components/admin/products/AdminProductsList.vue'
import AdminProductsToolbar from '@/components/admin/products/AdminProductsToolbar.vue';

export default defineComponent({
  name: 'admin-products-view',
  components: {
    AdminProductsList,
    AdminProductsToolbar,
  },

  methods: {
    onCreate() {
      this.$router.push('/admin/products/new')
    }
  }
});
</script>
