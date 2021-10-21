<template>
  <div class="cart">
    <cart-bar @empty-cart="emptyCart"/>
    <cart-product-list :cartProducts="cartProducts" @remove="remove"/>
  </div>
</template>

<style scoped>

.cart {
  background: hsl(221, 59%, 24%);
  height: 100%;
  min-height: 1080px;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import CartProductList from '@/components/cart/CartProductsList.vue'
import CartBar from '@/components/cart/CartBar.vue'
import CartRepository from '@/repositories/cartRepository'
import CartProduct from '@/models/cartProduct'

export default defineComponent({
  name: 'cart-view',

  components: {
    CartProductList,
    CartBar
  },

  setup() {
    return {
      cartRepository: new CartRepository()
    }
  },

  data() {
    return {
      cartProducts: [] as CartProduct[],
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
    },

    emptyCart() {
      this.cartRepository.emptyCart()
      this.cartProducts = []
    }
  },
});
</script>