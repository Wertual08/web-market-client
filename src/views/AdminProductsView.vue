<template>
  <div class="admin-products-view">
    <admin-products-toolbar @create="onCreate"/>
    <admin-products-list/>
  </div>
</template>


<style scoped>
.admin-products-view {
  width: 100%;
  height: 100%;
  background: #192F60;
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
