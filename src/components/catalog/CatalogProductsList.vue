<template>
  <div class="catalog-product-list">
    <search-bar class="search-bar" v-model="filterQuery"/>
    <div class="columns">
      <div class="filter-column">
        <p class="title">Каталог</p>
        <catalog-filter :sections="sections"/>
      </div>
      <div class="products-list">
        <div class="product-container" v-for="product in products" :key="product.id">
          <product-card :product="product" @add-cart="addCart">
            <div class="controls">
              <quantity-input class="quantity"/>
              <action-button class="submit">Добавить в корзину</action-button>
            </div>
          </product-card>
        </div>
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
  position: sticky;
  top: 75px;

  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;

  user-select: none;
}

.filter-column > .title {
  padding: 0px;
  margin: 24px 0px;

  color: #E04040;

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

.controls {
  max-width: 245px;
  height: 48px;

  margin: 16px 0px;
  padding: 0px;

  display: flex;
}

.quantity {
  width: 40%;
  margin-right: 8px; 
}

.submit {
  width: 60%;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from '@/components/common/ProductCard.vue'
import SectionsRepository from '@/repositories/sectionsRepository'
import SearchRepository from '@/repositories/searchRepository'
import QuantityInput from '@/components/common/QuantityInput.vue'
import ActionButton from '@/components/common/ActionButton.vue'
import CatalogFilter from './CatalogFilter.vue'
import Section from '@/models/section'
import SearchBar from './SearchBar.vue'
import SearchProduct from '@/models/searchProduct'

export default defineComponent({
  name: 'catalog-product-list',

  components: {
    CatalogFilter,
    ProductCard,
    QuantityInput,
    ActionButton,
    SearchBar,
  },

  props: {
    launch: {
      type: String,
      default: '',
    },
  },

  setup() {
    return {
      sectionsRepository: new SectionsRepository(),
      searchRepository: new SearchRepository(),
    }
  },

  data() {
    return {
      sections: [] as Section[],
      products: [] as SearchProduct[],
      productsToLoad: true,
      loading: false,

      filterQuery: this.launch,
      filterPage: 0 as number,
      filterCategories: null as number[]|null,
      filterSections: null as number[]|null,
      filterMinPrice: null as number|null,
      filterMaxPrice: null as number|null,
    };
  },

  mounted() {
    this.sectionsRepository.getSections()
      .then(sections => this.sections = sections)

    this.loadUp(true)

    window.onscroll = () => {
      this.onScroll()
    }
  },

  methods: {
    onScroll(): void {
      let height = document.documentElement.scrollTop + window.innerHeight
      let bottomOfWindow = height === document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.loadUp(false)
      }
    },
    
    loadUp(refresh: boolean): void {
      if (refresh) {
        this.filterPage = 0
        this.productsToLoad = true
        this.loading = false
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
