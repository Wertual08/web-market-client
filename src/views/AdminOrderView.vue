<template>
  <div class="admin-order-view">
    <admin-order-products-list :products="products" :amounts="amounts"/>
  </div>
</template>


<style scoped>
.admin-order-view {

}
</style>


<script lang="ts">
import AdminOrderProductsList from '@/components/admin/orders/AdminOrderProductsList.vue'
import LiteProductsRepository from '@/repositories/liteProductsRepository'
import OrdersRepository from '@/repositories/admin/ordersRepository'
import { defineComponent } from 'vue'
import LiteProduct from '@/models/liteProduct'
import Order from '@/models/order'

export default defineComponent({
  name: 'admin-order-view', 
  
  components: { AdminOrderProductsList },
  
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
})
</script>
