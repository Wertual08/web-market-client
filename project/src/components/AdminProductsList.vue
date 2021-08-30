<template>
  <div v-for="product in products" :key="product.id">
    <admin-product-card :product="product" @add-cart="addCart"/>
  </div>
</template>

<script lang = 'ts'>
import { defineComponent } from "vue";
import Product from "@/models/admin/product";
import ProductsRepository from "@/repositories/admin/productsRepository";
import AdminProductCard from "./common/AdminProductCard.vue";

export default defineComponent({
  name: 'admin-products-list',

  components: {
    AdminProductCard,
  },

  setup() {
    return {
      productsRepository: new ProductsRepository
    }
  },

  data() {
    return {
      products: [] as Product[],
      page: 0 as number,
      productsToLoad: true,
      loading: false,
    };
  },

  mounted() {
    this.loadUp()

    window.onscroll = () => {
      this.onScroll()
    }
  },

  methods: {
    onScroll(): void {
      let height = document.documentElement.scrollTop + window.innerHeight
      let bottomOfWindow = height === document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.loadUp()
      }
    },

    loadUp(): void {
      if (!this.loading) {
        this.loading = true
        this.productsRepository.getProducts(this.page)
          .then(result => {
            if (result.length > 0 && this.productsToLoad) {
              result.forEach(item => this.products.push(item))
              this.page++
            } else {
              this.productsToLoad = true
            }
            this.loading = false
            this.onScroll()
          })
      }
    },

    addCart(id: number): void {
      alert(`DEBUG_MESSAGE: Добавлено в корзину ${id}`)
    },
  },
});
</script>

<style scoped>
</style>
