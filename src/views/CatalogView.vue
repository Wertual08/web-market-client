<template >
  <div class="catalog">
    <catalog-products-list :launch="launch"/>
  </div>
</template>


<style scoped>
.catalog {
  background: #192F60;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


<script>
import { defineComponent } from 'vue'
import CatalogProductsList from '@/components/catalog/CatalogProductsList.vue'

export default defineComponent({
  name: 'catalog-view',

  components: {
    CatalogProductsList,
  },

  props: {
    launch: {
      type: String,
      default: '',
    },
  },
});
</script>