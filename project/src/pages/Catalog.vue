<template>
  <div id="container">
    <Tree/>
    <div class="prod_list">
      <ProductsList @load-product="$emit('load-product', $event)" />
    </div>
  </div>
</template>



<script>
import { defineComponent } from 'vue'
import ProductsList from "@/components/ProductsList.vue";
import Tree from "@/components/DropdownMenu.vue"

export default defineComponent({
  components: {
    ProductsList,
    Tree
  },

  methods: {},

  emits: ["load-product"],
});
</script>


<style>
.work_in_progress {
  font: bold 10em "Fira Sans", serif;
}

</style>