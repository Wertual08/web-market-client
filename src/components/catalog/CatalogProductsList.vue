<template>
  <div class="catalog-product-list">
    <div class="product-container" v-for="product in products" :key="product.id">
      <product-card :product="product" @add-cart="addCart">
        <div class="controls">
          <quantity-input class="quantity"/>
          <action-button class="submit">Добавить в корзину</action-button>
        </div>
      </product-card>
    </div>
  </div>
</template>


<style scoped>
.catalog-product-list {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-container {
  width: 90%;
  height: 243px;
  display: inline;
  float: left;
  overflow: hidden;

  border-bottom: 1px solid #355396;
}

.controls {
  width: 245px;
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
import Product from '@/models/product'
import ProductsRepository from '@/repositories/productsRepository'
import QuantityInput from '@/components/common/QuantityInput.vue'
import ActionButton from '@/components/common/ActionButton.vue'

export default defineComponent({
  name: 'catalog-product-list',

  components: {
    ProductCard,
    QuantityInput,
    ActionButton,
  },

  setup() {
    return {
      productsRepository: new ProductsRepository()
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
