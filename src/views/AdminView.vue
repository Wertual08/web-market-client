<template>
  <div class="admin-view">
    <div class="navigator">
      <router-link class="item" to="/admin/records">Редактирование файлов</router-link>
      <router-link class="item" to="/admin/sections">Редактирование секций</router-link>
      <router-link class="item" to="/admin/products">Редактирование товаров</router-link>
      <router-link class="item" to="/admin/products/bulk">Массовое редактирование товаров</router-link>
      <router-link class="item" to="/admin/public">Редактирование главной страницы</router-link>
    </div>
    <p class="section-title">Список заказов</p>
    <admin-orders-list class="orders" :orders="orders"/>
  </div>
</template>

<style scoped>
.admin-view {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.admin-view > .section-title {
  color: white;

  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
}

.admin-view > .navigator {
  width: 90%;

  padding: 16px;

  display: flex;
  justify-content: space-around;
}

.admin-view > .navigator > .item {
  padding: 16px;

  text-decoration: none;
  color: red;
  
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
}
.admin-view > .navigator > .item:hover {
  color: #AA0000;
}

.admin-view > .orders {
  width: 90%;
}
</style>

<script lang="ts">
import AdminOrdersList from '@/components/admin/orders/AdminOrdersList.vue';
import Order from '@/models/order';
import OrdersRepository from '@/repositories/admin/ordersRepository';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'admin-view',

  components: { 
    AdminOrdersList
  },

  setup() {
    return {
      ordersRepository: new OrdersRepository(),
    }
  },

  data() {
    return {
      orders: [] as Order[],
    }
  },

  mounted() {
    this.ordersRepository.getOrders(0)
      .then(models => this.orders = models)
  }
});
</script>
    