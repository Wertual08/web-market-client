<template >
  <div class="catalog">
    <catalog-products-list :launchQuery="launch" :launchSelections="querySections"/>
  </div>
</template>


<style scoped>
.catalog {
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


<script lang="ts">
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

  computed: {
    querySections(): number[] {
      var items = this.$route.query.sections
      var result: number[] = []
      if (Array.isArray(items)) {
        items.forEach(item => {
          if (item) {
            result.push(+item)
          } 
        })
      } else if (items && !isNaN(+items)) {
        result.push(+items)
      }
      console.log(items)
      return result
    }
  },
});
</script>