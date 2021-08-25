<template >
  <div class="catalog">
    <SearchBar />
    <div id="container">
      <Tree />
      <div class="prod_list">
        <ProductsList @load-product="$emit('load-product', $event)" />
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

  methods: {},

  emits: ["load-product"],
});
</script>


<style scoped>
.catalog {
  background-color: rgba(169, 241, 241, 0.377);
  height: 100%;
}
</style>