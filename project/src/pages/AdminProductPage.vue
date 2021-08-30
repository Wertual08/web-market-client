<template>
  <div style="box">
    <admin-product-form :product="product"/>
  </div>
</template>

<script lang="ts">
import Product from '@/models/admin/product'
import { defineComponent } from "vue"
import ProductsRepository from '@/repositories/admin/productsRepository'
import AdminProductForm from '@/components/common/AdminProductForm.vue';

export default defineComponent({
  name: "admin-product-page",

  setup() {
    return {
      productsRepository: new ProductsRepository(),
    }
  },

  components: {
    AdminProductForm
  },

  data() {
    return {
      product: new Product()
    }
  },

  mounted() {
    this.productsRepository.getProduct(+this.$route.params.id)
      .then(product => this.product = product)
  },

  methods: {
  },
});
</script>


<style scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>
