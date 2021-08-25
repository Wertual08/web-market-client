<template>
  <div class="box">
    <h3 class="p-3 text-center"></h3>
    <table class="table table-striped table-bordered">
      <div class="productCardContainer" v-for="product in products" :key="product.id">
        <ProductCard :product="product" @add-cart="addCart"/>
      </div>
    </table>
  </div>
</template>

<script lang = 'ts'>
import { defineComponent } from "vue";
import ProductCard from "@/components/ProductCard.vue"
import Product from "@/models/product";
import productsRepository from "@/repositories/productsRepository";

export default defineComponent({
  components: {
    ProductCard,
  },

  data() {
    return {
      products: [] as Product[],
    };
  },

  mounted() {
    productsRepository.getProducts()
      .then((result: Product[]) => {
        this.products = result;
      });
  },

  methods: {
    addCart(id: number) {
      alert(`DEBUG_MESSAGE: Добавлено в корзину ${id}`)
    },
  },
});
</script>

<style scoped>
.productCardContainer {
  width: 220px;
  height: 300px;
  display: inline;
  float: left;
  overflow: hidden;
  background: lightblue;
  margin: 10px;
}
</style>
