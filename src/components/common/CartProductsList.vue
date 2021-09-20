<template>
  <div class="products-list">
    <div class="product-container" v-for="product in cartProducts" :key="product.id">
      <cart-product-card :cartProduct="product" @add-cart="addCart">
        <div class="controls">
          <button class="submit" @click="remove(product)">Удалить</button>
        </div>
      </cart-product-card>
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

.controls {
  width: 150px;
  height: 48px;

  margin: 16px 0px;
  padding: 0px;

  display: flex;
}

.submit {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  color: white;
  background: #E04040;
  border-radius: 6px;
  border: none;

  cursor: pointer;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
}

.submit:hover {
  background: #C03535;
}

.submit:active {
  background: #A03030;
}
</style>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import CartProductCard from '@/components/common/CartProductCard.vue'
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