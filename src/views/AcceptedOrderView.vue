<template>
  <div class="accepted-order-view">
    <p class="title">Поздравляем, ваш заказ принят!</p>
    <p class="message">
      В ближайшее время на указанный вами адрес электронной почты 
      будет доставлено письмо с деталями вашего заказа.
    </p>
    <router-link class="return" to="/">Вернуться на главную</router-link>
  </div>
</template>


<style scoped>
.accepted-order-view {
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

.accepted-order-view > .title {
  padding: 0px;
  margin: 24px 0px;

  color: #E04040;

  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 120%;

  display: flex;
  align-items: center;
}

.accepted-order-view > .message {
  color: white;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 120%;
}

.accepted-order-view > .return {
  text-decoration: none;

  color: lightgray;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 120%;
}

.accepted-order-view > .return:hover {
  text-decoration: none;

  color: gray;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 120%;
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
  name: 'accepted-order-view',

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
          console.log(model)
        })
    },
  }
})
</script>