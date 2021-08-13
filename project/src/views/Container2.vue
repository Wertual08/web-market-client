<template>
  <div>{{ product.id }}</div>
  <div>{{ product.name }}</div>
  <div>{{ product.description }}</div>
  <img :src="getCoverImage(product)" alt="../assets/meme.gif" />
  <div></div>
</template>

/* гори в аду Коля */
<script lang="ts">
import { defineComponent } from "vue";
import Repa from "@/repositories/repository";
import Product from "@/models/product";

export default defineComponent({
  name: "ff",
  data() {
    return { product: new Product(), id: null as any };
  },

  mounted() {
    this.id = this.$route.params.id;
    Repa.getProdById(this.id).then((result: Product) => {
      this.product = result;
    });
  },
  methods: {
    getCoverImage(product: Product): String {
      if (product.records.length > 0) {
        return product.records[0];
      } else {
        return require("@/assets/meme.gif");
      }
    },
  },
});
</script>


<style scoped>
</style>
