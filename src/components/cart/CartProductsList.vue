<template>
  <div class="products-list">
    <div class="product-container" v-for="cartProduct in cartProducts" :key="cartProduct.product.id">
      <cart-product-card
        :to="`/catalog/${cartProduct.product.id}`"
        :cartProduct="cartProduct"
        @remove="$emit('remove', cartProduct)"
      />
    </div>
  </div>
</template>

<style scoped>
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
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CartProductCard from '@/components/cart/CartProductCard.vue'
import QuantityInput from '@/components/common/QuantityInput.vue'
import CartProduct from '@/models/cartProduct'

export default defineComponent({
  name: 'cart-product-list',

  components: {
    CartProductCard,
    QuantityInput
  },

  emits: ['remove'],

  props: {
    cartProducts: {
      type: Object as PropType<CartProduct[]>,
      required: true
    }
  },
});
</script>