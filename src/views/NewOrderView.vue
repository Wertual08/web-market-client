<template>
  <div class="new-order-view">
    <p class="title">Оформление заказа</p>
    <div class="content">
      <order-details-form class="details" :order="order" @submit="submitOrder"/>
      <order-products-list class="products" :products="products" :amounts="amounts"/>
    </div>
  </div>
</template>


<style scoped>
.new-order-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;

  color: white;
}

.new-order-view > .title {
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

.new-order-view > .content {
  width: 90%;

  display: flex;
}

/* .new-order-view > .content > .details {
  width: 100%;
} */

.new-order-view > .content > .products {
  width: 100%;
}
</style>


<script lang="ts">
import OrderDetailsForm from '@/components/newOrder/OrderDetailsForm.vue'
import OrderProductsList from '@/components/newOrder/OrderProductsList.vue'
import Order from '@/models/order'
import { defineComponent } from 'vue'
import ProfileRepository from '@/repositories/profileRepository'
import LiteProduct from '@/models/liteProduct'
import LiteProductsRepository from '@/repositories/liteProductsRepository'
import CartRepository from '@/repositories/cartRepository'
import OrdersRepository from '@/repositories/ordersRepository'

export default defineComponent({
  components: { OrderDetailsForm, OrderProductsList },
  name: 'new-order-view',

  setup() {
    return {
      cartRepository: new CartRepository(),
      profileRepository: new ProfileRepository(),
      liteProductsRepository: new LiteProductsRepository(),
      ordersRepository: new OrdersRepository(),
    }
  },

  data() {
    return {
      order: new Order(),

      products: [] as LiteProduct[],
      amounts: new Map<number, number>(),
    }
  },

  mounted() {
    const cartProducts = this.cartRepository.getCart()

    this.profileRepository.get()
      .then(profile => {
        if (profile !== null) {
          this.order.email = profile.email
          this.order.phone = profile.phone
          this.order.name = profile.name
          this.order.surname = profile.surname
        }
      })
    
    let ids: number[] = []
    let amounts = new Map<number, number>()
    for (let i = 0; i < cartProducts.length; i++) {
      const id = cartProducts[i].productId
      ids.push(id)
      amounts.set(id, cartProducts[i].amount)
    }
    this.liteProductsRepository.getLiteProducts(ids)
      .then(models => this.products = models)
    this.amounts = amounts
  },

  methods: {
    submitOrder() {
      this.ordersRepository.createOrder(this.order, this.amounts)
        .then(model => {
          this.cartRepository.clearCart()
            .then(() => this.$router.push('/orders/accepted'))
        })
    },
  }
})
</script>