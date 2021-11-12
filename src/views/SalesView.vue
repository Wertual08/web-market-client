<template>
  <div class="sales-view">
    <p class="title">Товары по акции</p>
    <catalog-product-card
      class="product"
      v-for="product in products"
      :key="product.id" 
      :product="product" 
      :to="`/catalog/${product.id}`"
    />
  </div>
</template>


<style scoped>
.sales-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sales-view > .title {
  padding: 0px;
  margin: 24px 0px;

  color: #E04040;

  text-decoration: none;

  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 120%;

  display: flex;
  align-items: center;
}

.sales-view > .product {
  width: 90%;
  border-bottom: 1px solid #355396;
}
</style>


<script lang="ts">
import CatalogProductCard from '@/components/catalog/CatalogProductCard.vue'
import LiteProduct from '@/models/liteProduct'
import SearchRepository from '@/repositories/searchRepository'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { CatalogProductCard },
  name: 'sales-view',
  
  setup() {
    return {
      searchRepository: new SearchRepository(),
    }
  },

  data() {
    return {
      page: 0,
      allLoaded: false,
      products: [] as LiteProduct[],
    }
  },

  mounted() {
    this.loadUp()
  },

  methods: {
    loadUp() {
      this.searchRepository.getProducts(
        '', 
        this.page++,
        [],
        [],
        null,
        null,
        true 
      ).then(models => {
        models.forEach(model => this.products.push(model))
      })
    },
  },
})
</script>
