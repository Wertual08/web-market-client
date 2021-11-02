<template>
  <modal-window v-if="saveError" @close="saveError=null">
    <info-window @close="saveError=null">{{saveError}}</info-window>
  </modal-window>
  <div id="admin-product-view">
    <admin-product-form :product="product" :sections="sections" @save="saveProduct" @delete="deleteProduct"/>
  </div>
</template>


<style scoped>
#admin-product-view {
  width: 100%;
  height: 100%;
  
  display: flex;
}
</style>


<script lang="ts">
import Product from '@/models/admin/product'
import { defineComponent } from 'vue'
import ProductsRepository from '@/repositories/admin/productsRepository'
import Slider from '@/components/common/Slider.vue'
import AdminProductForm from '@/components/admin/product/AdminProductForm.vue'
import SectionsRepository from '@/repositories/admin/sectionsRepository'
import Section from '@/models/admin/section'
import ConflictError from '@/models/errors/conflictError'
import ModalWindow from '@/components/windows/ModalWindow.vue'
import InfoWindow from '@/components/windows/InfoWindow.vue'

export default defineComponent({
  name: 'admin-product-page',

  components: { Slider, AdminProductForm, ModalWindow, InfoWindow },

  setup() {
    return {
      sectionsRepository: new SectionsRepository(),
      productsRepository: new ProductsRepository(),
    }
  },

  data() {
    return {
      sections: [] as Section[],
      product: new Product(),
      saveError: null as string|null,
    }
  },

  mounted() {
    this.sectionsRepository.getSections()
      .then(models => this.sections = models)

    let id = this.$route.params.id;
    if (id !== 'new') {
      this.productsRepository.getProduct(+id)
        .then(product => this.product = product)
    }
  },

  methods: {
    saveProduct(product: Product) {
      if (product.id >= 0) {
        var promise = this.productsRepository.putProduct(product)
      } else {
        var promise = this.productsRepository.createProduct(product)
      }
      promise.then(model => {
        this.product = model
        this.$router.push('/admin/products')
      })
      .catch((conflict: ConflictError) => {
        if (conflict.field == 'Code') {
          this.saveError = 'Артикул уже используется';
        }
      })
    },
    deleteProduct(product: Product) {
      this.productsRepository.deleteProduct(product.id)
        .then(() => this.$router.push('/admin/products'))
    },
  },
});
</script>