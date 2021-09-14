<template >
  <div class="catalog">
    <div id="container">
      <Tree />
      <div class="prod_list">
        <ProductsList />
      </div>
    </div>
  </div>
</template>



<script>
import { defineComponent } from "vue";
import ProductsList from "@/components/CatalogProductsList.vue";
import Tree from "@/components/DropdownMenu.vue";

export default defineComponent({
  components: {
    ProductsList,
    Tree,
  },
});
</script>


<style scoped>
.catalog {
  background-color: rgba(169, 241, 241, 0.377);
  height: 100%;
}
</style>