<template >
  <div class="catalog">
    <products-list :launch="launch"/>
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
import ProductsList from '@/components/catalog/CatalogProductsList.vue'

export default defineComponent({
  name: 'catalog-view',

  components: {
    ProductsList,
  },

  props: {
    launch: {
      type: String,
      default: '',
    },
  },
});
</script>