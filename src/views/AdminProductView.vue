<template>
  <div id="admin-product-view">
    <admin-product-form :product="product" @save="save"/>
  </div>
</template>


<style scoped>
#admin-product-view {
  width: 100%;
  height: 100%;
  
  background: #192F60;
  display: flex;
}
</style>


<script lang="ts">
import Product from '@/models/admin/product'
import { defineComponent } from 'vue'
import ProductsRepository from '@/repositories/admin/productsRepository'
import Slider from '@/components/common/Slider.vue'
import AdminProductForm from '@/components/admin/product/AdminProductForm.vue'

export default defineComponent({
  name: 'admin-product-page',

  components: { Slider, AdminProductForm },

  setup() {
    return {
      productsRepository: new ProductsRepository(),
    }
  },

  data() {
    return {
      product: new Product()
    }
  },

  mounted() {
    let id = this.$route.params.id;
    if (id !== 'new') {
      this.productsRepository.getProduct(+id)
        .then(product => this.product = product)
    }
  },

  methods: {
    async save(product: Product) {
      if (product.id >= 0) {
        this.productsRepository.putProduct(product)
          .then(model => this.product = model)
      } else {
        this.productsRepository.createProduct(product)
          .then(model => this.product = model)
      }
    }
  },
});
</script>