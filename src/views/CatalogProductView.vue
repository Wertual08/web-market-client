<template class = 'card'>
  <div class="catalog-product-view">
    <div class="content">
      <search-bar class="search-bar" v-model="filterQuery"/>
      <div class="columns">
        <div class="filter-column">
          <router-link to="/catalog" class="title">Каталог</router-link>
          <products-filter :sections="sections" :products-stats="productsStats"/> <!-- @selection="filterSelectionChanged" @price-range="filterPrice"-->
        </div>
        <div class="product-column">
          <catalog-product-details class="details" :product="product"/>
          <router-link class="back" to="/catalog">Вернуться назад</router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.catalog-product-view {

  display: flex;
  justify-content: center;
}

.catalog-product-view > .content {
  width: 90%;

  display: flex;
  flex-direction: column;
}

.catalog-product-view > .content > .search-bar {
  width: 100%;
  height: 48px;
  margin-top: 48px;
}

.catalog-product-view > .content > .columns { 
  width: 100%;
  height: 100%;
  display: flex;
}

.catalog-product-view > .content > .columns > .filter-column {
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: column;
}

.catalog-product-view > .content > .columns > .filter-column > .title {
  padding: 0px;
  margin: 24px 0px;

  color: #E04040;

  text-align: left;
  text-decoration: none;

  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 120%;
}

.catalog-product-view > .content > .columns > .product-column {
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.catalog-product-view > .content > .columns > .product-column > .details {
  width: 100%;
  height: auto;

  margin-top: 106px;

  display: flex;
}

.catalog-product-view > .content > .columns > .product-column > .back {
  margin: 48px 0px;

  color: #E04040;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import ProductsRepository from '@/repositories/productsRepository'
import Product from '@/models/product'
import SearchBar from '@/components/common/SearchBar.vue'
import ProductsFilter from '@/components/common/ProductsFilter.vue'
import SectionsRepository from '@/repositories/sectionsRepository'
import Section from '@/models/section'
import ProductsStats from '@/models/productsStats'
import CatalogProductDetails from '@/components/catalog/product/CatalogProductDetails.vue'

export default defineComponent({
  name: "catalog-product-view",

  components: {
    SearchBar,
    ProductsFilter,
    CatalogProductDetails,
  },

  setup() {
    return {
      sectionsRepository: new SectionsRepository(),
      productsRepository: new ProductsRepository(),
    }
  },

  data() {
    return { 
      sections: [] as Section[],
      productsStats: new ProductsStats(),
      filterQuery: '',
      product: new Product(),
    };
  },

  mounted() {
    this.productsRepository.getProduct(+this.$route.params.id)
      .then(model => this.product = model)

    this.sectionsRepository.getSections()
      .then(sections => this.sections = sections)
      
    this.productsRepository.getProductsStats()
      .then(model => this.productsStats = model)
  },

  methods: {
  },
});
</script>