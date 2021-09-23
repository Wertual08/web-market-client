<template>
  <div id="admin-product-view">
    <admin-product-form :product="product"/>
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
import PutProductRequest from '@/repositories/requests/admin/putProductRequest';
import AdminProductForm from '@/components/admin/product/AdminProductForm.vue'

export default defineComponent({
  name: "admin-product-page",

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
    if (id === 'new') {

    } else {
      this.productsRepository.getProduct(+id)
        .then(product => this.product = product)
    }
  },

  methods: {
    save() {
      const request = new PutProductRequest(this.product)
      this.productsRepository.putProduct(request)
        .then(response => this.product = response)
    }
  },
});
</script>