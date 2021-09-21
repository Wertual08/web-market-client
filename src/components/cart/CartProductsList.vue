<template>
  <div class="products-list">
    <div class="product-container" v-for="product in cartProducts" :key="product.product.id">
      <cart-product-card :cartProduct="product" @remove="remove(product)"/>
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
import { defineComponent } from 'vue'
import CartProductCard from '@/components/cart/CartProductCard.vue'
import QuantityInput from '@/components/common/QuantityInput.vue'
import CartRepository from '@/repositories/cartRepository'
import CartProduct from '@/models/cartProduct'

export default defineComponent({
  name: 'cart-product-list',

  components: {
    CartProductCard,
    QuantityInput
  },

  setup() {
    return {
      cartRepository: new CartRepository()
    }
  },

  data() {
    return {
      cartProducts: [] as CartProduct[]
    }
  },

  mounted() {
    this.cartRepository.getCart()
      .then(cartProducts => this.cartProducts = cartProducts)
  },

  methods: {
    remove(cartProd: CartProduct) {
      this.cartRepository.removeProduct(cartProd.product.id)
      this.cartProducts = this.cartProducts.filter(p => p.product.id !== cartProd.product.id)
    }
  }
});
</script>