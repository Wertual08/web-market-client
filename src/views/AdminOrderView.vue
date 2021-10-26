<template>
  <div class="admin-order-view">
    <admin-order-products-list class="products" :products="products" :amounts="amounts"/>
    <admin-order-details class="details" :order="order"/>
    <admin-order-state-form class="state" :state="order.state" @apply="applyState"/>
  </div>
</template>


<style scoped>
.admin-order-view {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.admin-order-view > .products {
  width: 90%;
}

.admin-order-view > .details {
  width: 90%;
}

.admin-order-view > .state {
  width: 90%;
}
</style>


<script lang="ts">
import AdminOrderProductsList from '@/components/admin/orders/AdminOrderProductsList.vue'
import LiteProductsRepository from '@/repositories/liteProductsRepository'
import OrdersRepository from '@/repositories/admin/ordersRepository'
import { defineComponent } from 'vue'
import LiteProduct from '@/models/liteProduct'
import Order from '@/models/order'
import AdminOrderDetails from '@/components/admin/orders/AdminOrderDetails.vue'
import AdminOrderStateForm from '@/components/admin/orders/AdminOrderStateForm.vue'

export default defineComponent({
  name: 'admin-order-view', 
  
  components: { AdminOrderProductsList, AdminOrderDetails, AdminOrderStateForm },
  
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
    applyState(state: string) {
      this.ordersRepository.updateOrder(this.order.id, state)
        .then(model => this.order = model)
    }
  }
})
</script>
