<template>
  <product-card :to="to" :product="product">
    <div class="controls">
      <quantity-input class="quantity" v-model="selectedQuantity" :min="1"/>
      <action-button class="submit" @click="addCart">Добавить в корзину</action-button>
    </div>
  </product-card>
</template>


<style scoped>
.controls {
  max-width: 245px;
  height: 48px;

  margin: 16px 0px;
  padding: 0px;

  display: flex;
}

.controls > .quantity {
  width: 40%;
  margin-right: 8px; 
}

.controls > .submit {
  width: 60%;
}
</style>


<script lang="ts">
import QuantityInput from '@/components/common/QuantityInput.vue'
import ActionButton from '@/components/common/ActionButton.vue'
import LiteProduct from '@/models/liteProduct'
import CartRepository from '@/repositories/cartRepository'
import { defineComponent } from 'vue'
import ProductCard from '../common/ProductCard.vue'

export default defineComponent({
  name: 'catalog-product-card',

  emits: ['selected'],

  components: {
    QuantityInput,
    ActionButton,
    ProductCard,
  },

  props: {
    product: {
      type: LiteProduct,
      required: true,
    },

    to: {
      type: String,
      required: true,
    }
  },

  setup() {
    return {
      cartRepository: new CartRepository()
    }
  },

  data() {
    return {
      selectedQuantity: 1
    }
  },

  methods: {
    addCart() {
      let id = this.product.id
      this.cartRepository.addCart(id, this.selectedQuantity)
    },
  }
})
</script>
