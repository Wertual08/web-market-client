<template>
  <div class="cart-view">
    <p class="title">Корзина</p>
    <div class="products-list">
      <cart-product-card class="product-card"
        v-for="product in products" :key="product.id"
        :to="`/catalog/${product.id}`"
        :product="product"
        :amount="amount(product.id)"
        @remove="remove"
      />
    </div>
    <cart-bar :totalAmount="totalAmount" :totalPrice="totalPrice" @empty-cart="clearCart" @submit-cart="submitCart"/>
  </div>
</template>

<style scoped>

.cart-view {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}

.cart-view > .title {
  padding: 0px;
  margin: 24px 0px;

  color: #E04040;

  text-decoration: none;

  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 120%;

  display: flex;
  align-items: center;
}

.cart-view > .products-list {
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cart-view > .products-list > .product-card {
  width: 100%;
  height: 243px;
  
  overflow: hidden;

  border-bottom: 1px solid #355396;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import CartBar from '@/components/cart/CartBar.vue'
import CartRepository from '@/repositories/cartRepository'
import LiteProduct from '@/models/liteProduct'
import LiteProductsRepository from '@/repositories/liteProductsRepository'
import CartProductCard from '@/components/cart/CartProductCard.vue'

export default defineComponent({
  name: 'cart-view',

  components: {
    CartBar,
    CartProductCard,
  },

  setup() {
    return {
      cartRepository: new CartRepository(),
      liteProductsRepository: new LiteProductsRepository(),
    }
  },

  data() {
    return {
      products: [] as LiteProduct[],
    }
  },

  mounted() {
    const cartProducts = this.cartRepository.getCart()
    let ids: number[] = []
    for (let i = 0; i < cartProducts.length; i++) {
      ids.push(cartProducts[i].productId)
    }
    this.liteProductsRepository.getLiteProducts(ids)
      .then(models => this.products = models)
  },

  computed: {
    totalAmount(): number {
      return this.cartRepository.getAmount()
    },
    totalPrice(): number {
      let price = 0
      this.products.forEach(product => {
        price += product.price * this.amount(product.id)
      })
      return price
    }
  },

  methods: {
    amount(id: number): number {
      return this.cartRepository.getCart().find(model => model.productId == id)?.amount ?? -1;
    },

    remove(id: number) {
      this.cartRepository.removeProduct(id)
        .then(() => {this.products = this.products.filter(p => p.id !== id)})
    },

    clearCart() {
      this.cartRepository.clearCart()
        .then(() => this.products = [])
    },

    submitCart() {
      this.$router.push('/orders/new')
    },
  },
});
</script>