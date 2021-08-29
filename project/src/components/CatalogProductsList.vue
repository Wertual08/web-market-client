<template>
  <div class="box">
    <h3 class="p-3 text-center">ГДЕ МОЙ КЭШ?</h3>
    <table class="table table-striped table-bordered">
      <div class="productCardContainer" v-for="product in products" :key="product.id">
        <catalog-product-card :product="product" @add-cart="addCart"/>
      </div>
    </table>
  </div>
</template>


<style scoped>
.box {
  height: 100%;
}

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


<script lang = 'ts'>
import { defineComponent } from "vue";
import CatalogProductCard from "@/components/common/CatalogProductCard.vue"
import Product from "@/models/product";
import productsRepository from "@/repositories/productsRepository";

export default defineComponent({
  components: {
    CatalogProductCard,
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
        productsRepository.getProducts(this.page)
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
