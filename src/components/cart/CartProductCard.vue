<template>
  <product-card :to="to" :product="cartProduct.product">
    <p class="amount">{{ cartProduct.amount }} шт.</p>
    <div class="controls">
      <action-button class="submit" @click="$emit('remove')">Удалить</action-button>
    </div>
  </product-card>
</template>


<style scoped>
.controls {
  width: 150px;
  max-width: 150px;
  height: 48px;

  margin: 16px 0px;
  padding: 0px;

  display: flex;
}

.amount {
  color: #C3C5CB;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 160%;

  text-align: right;
}

.controls > .submit {
  width: 100%;
}
</style>


<script lang="ts">
import CartProduct from '@/models/cartProduct'
import { defineComponent, PropType } from 'vue'
import ActionButton from '../common/ActionButton.vue'
import ProductCard from '../common/ProductCard.vue'

export default defineComponent({
  name: 'cart-product-card',

  components: { ProductCard, ActionButton },

  emits: ['remove'],

  optionalProps: true,

  props: {
    cartProduct: {
      type: Object as PropType<CartProduct>,
      required: true,
    },
    to: {
      type: String,
      required: true,
    }
  },
})
</script>
