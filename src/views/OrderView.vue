<template>
  <div class="order-view">
    <p class="title">Информация по заказу</p>
    <div class="content">
      <order-details class="details" :order="order" @cancel="pendingCancel=true"/>
      <order-products-list class="products" :products="products" :amounts="amounts"/>
    </div>

    <modal-window v-if="pendingCancel" @close="pendingCancel=false">
      <delete-warning-window cancelMessage="Назад" deleteMessage="Да" @reject="pendingCancel=false" @submit="cancelOrder">
        Вы уверены что хотите отменить этот заказ?
      </delete-warning-window>
    </modal-window>
  </div>
</template>


<style scoped>
.order-view {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.order-view > .title {
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

.order-view > .content {
  width: 90%;
  display: flex;
}

.order-view > .content > .details {
  width: 30%;
}

.order-view > .content > .products {
  width: 70%;
}
</style>


<script lang="ts">
import Order from '@/models/order'
import OrdersRepository from '@/repositories/ordersRepository'
import { defineComponent } from 'vue'
import OrderDetails from '@/components/orders/OrderDetails.vue'
import OrderProductsList from '@/components/orders/OrderProductsList.vue'
import LiteProduct from '@/models/liteProduct'
import LiteProductsRepository from '@/repositories/liteProductsRepository'
import DeleteWarningWindow from '@/components/windows/DeleteWarningWindow.vue'
import ModalWindow from '@/components/windows/ModalWindow.vue'

export default defineComponent({
  name: 'order-view',

  components: { OrderDetails, OrderProductsList, DeleteWarningWindow, ModalWindow },

  setup() {
    return {
      ordersRepository: new OrdersRepository(),
      liteProductsRepository: new LiteProductsRepository(),
    }
  },

  data() {
    return {
      order: new Order(),
      products: [] as LiteProduct[],
      amounts: new Map<number, number>(),
      pendingCancel: false,
    }
  },

  mounted() {
    const id = +this.$route.params.id
    this.ordersRepository.getOrder(id)
      .then(model => this.order = model)
    
    this.ordersRepository.getOrderProducts(id)
      .then(models => {
        this.products = []
        this.amounts.clear()
        models.forEach(model => {
          model.product.price = model.price
          this.products.push(model.product)
          this.amounts.set(model.product.id, model.amount)
        })
      })
  },

  methods: {
    cancelOrder() {
      this.ordersRepository.cancelOrder(this.order.id)
        .then(() => this.$router.push('/orders'))
    }
  }
})
</script>
