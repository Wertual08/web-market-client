<template>
  <div class="catalog-product-list">
    <search-bar class="search-bar" v-model="filterQuery"/>
    <div class="columns">
      <div class="filter-column">
        <router-link to="/catalog" class="title">Каталог</router-link>
        <products-filter 
          :selectedIds="filterSections" 
          :sections="sections" 
          :products-stats="productsStats" 
          @selection="filterSelectionChanged" 
          @price-range="filterPrice"
        />
      </div>
      <div class="products-list">
        <div class="product-container" v-for="product in products" :key="product.id">
          <catalog-product-card :product="product" :to="`/catalog/${product.id}`"></catalog-product-card>
        </div>
        <p class="not-found" v-if="notFound">Ничего не найдено :(</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.catalog-product-list {
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.catalog-product-list > .search-bar {
  width: 100%;
  height: 48px;
  margin-top: 48px;
}

.catalog-product-list > .columns { 
  width: 100%;
  height: 100%;
  display: flex;
}

.filter-column {
  width: 20%;

  margin-right: 50px;

  display: flex;
  flex-direction: column;

  user-select: none;
}

.filter-column > .title {
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

.products-list {
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-container {
  width: 100%;
  height: 243px;
  display: inline;
  float: left;
  overflow: hidden;

  border-bottom: 1px solid #355396;
}

.not-found {
  color: white;

  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 100%;
}
</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CatalogProductCard from '@/components/catalog/CatalogProductCard.vue'
import SectionsRepository from '@/repositories/sectionsRepository'
import SearchRepository from '@/repositories/searchRepository'
import ProductsFilter from '@/components/common/ProductsFilter.vue'
import Section from '@/models/section'
import SearchBar from '@/components/common/SearchBar.vue'
import LiteProduct from '@/models/liteProduct'
import ProductsRepository from '@/repositories/productsRepository'
import ProductsStats from '@/models/productsStats'

export default defineComponent({
  name: 'catalog-product-list',

  components: {
    ProductsFilter,
    CatalogProductCard,
    SearchBar,
  },

  props: {
    launchQuery: {
      type: String,
      default: '',
    },
    launchSelections: {
      type: Array as PropType<number[]>,
      default: [],
    }
  },

  setup() {
    return {
      sectionsRepository: new SectionsRepository(),
      searchRepository: new SearchRepository(),
      productsRepository: new ProductsRepository(),
    }
  },

  data() {
    return {
      productsStats: new ProductsStats(),
      sections: [] as Section[],
      products: [] as LiteProduct[],
      productsToLoad: true,
      loading: false,

      filterQuery: this.launchQuery,
      filterPage: 0 as number,
      filterCategories: [] as number[],
      filterSections: this.launchSelections,
      filterMinPrice: null as number|null,
      filterMaxPrice: null as number|null,
      notFound: false,
    };
  },

  mounted() {
    this.productsRepository.getProductsStats()
      .then(model => this.productsStats = model)
    this.sectionsRepository.getSections()
      .then(sections => this.sections = sections)

    this.loadUp(true)

    window.addEventListener('scroll', this.onScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    filterSelectionChanged(id: number) {
      let index = this.filterSections.indexOf(id)
      if (index >= 0) {
        this.filterSections.splice(index, 1)
      } else { 
        this.filterSections.push(id)
      }

      this.loadUp(true)
    },

    filterPrice(minPrice: number, maxPrice: number) {
      this.filterMinPrice = minPrice
      this.filterMaxPrice = maxPrice
      this.loadUp(true)
    },

    onScroll(): void {
      const fraction = window.scrollY / (window.document.body.clientHeight - window.innerHeight)
      if (fraction > 0.7) {
        this.loadUp(false)
      }
    },
    
    loadUp(refresh: boolean): void {
      if (refresh) {
        this.filterPage = 0
        this.productsToLoad = true
        this.loading = false
        this.notFound = false
      }

      if (!this.loading && this.productsToLoad) {
        this.loading = true
        this.searchRepository.getProducts(
          this.filterQuery,
          this.filterPage,
          this.filterCategories, 
          this.filterSections,
          this.filterMinPrice,
          this.filterMaxPrice,
        ).then(result => {
            if (refresh) {
              this.products = []
            }
            result.forEach(item => this.products.push(item))
            this.filterPage++

            if (result.length < 1) {
              this.productsToLoad = false
            }
            if (this.products.length == 0) {
              this.notFound = true
            }
            this.loading = false
            this.onScroll()
          })
      }
    },
  },

  watch: {
    filterQuery() {
      this.loadUp(true)
    },

    launch(payload: string) {
      this.filterQuery = payload
    },
  }
});
</script>
