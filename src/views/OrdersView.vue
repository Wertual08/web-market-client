<template>
  <div class="orders-view">
    <p class="title">Мои заказы</p>

    <table class="cards">
      <tr>
        <th>Оформлен</th>
        <th>Завершен</th>
        <th>Статус</th>
        <th>E-Mail</th>
        <th>Телефон</th>
        <th>Адрес</th>
      </tr>
      <tr class="card" v-for="order in orders" :key="order.id" @click="select(order.id)">
        <td>{{ formatDate(order.createdAt) }}</td>
        <td>{{ formatDate(order.finishedAt) }}</td>
        <td>{{ formatStatus(order.state) }}</td>
        <td>{{ order.email }}</td>
        <td>{{ order.phone }}</td>
        <td>{{ order.address }}</td>
      </tr>
    </table>
  </div>
</template>


<style scoped>
.orders-view {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.orders-view > .title {
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

.orders-view > .cards {
  width: 90%;

  color: white;
}

.orders-view > table, th, td {
  border-collapse: collapse;
  border: 1px solid #355396;
}

.orders-view > .cards > .card {
  cursor: pointer;
}
.orders-view > .cards > .card:hover {
  background: #355396;
}
</style>


<script lang="ts">
import Order from '@/models/order'
import OrdersRepository from '@/repositories/ordersRepository'
import { defineComponent } from 'vue'
import { dateToString } from '@/services/datetime'

export default defineComponent({
  name: 'orders-view',
    
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
  },

  methods: {
    formatDate(date: number|null): string {
      if (date !== null) {
        return dateToString(date)
      } else {
        return '-'
      }
    },
    formatStatus(status: string): string {
      if (status === 'Requested') {
        return 'В обработке'
      } else if (status === 'Accepted') {
        return 'Принят'
      } else if (status === 'Processed') {
        return 'Собран'
      } else  if (status === 'Sent') {
        return 'Отправлен'
      } else  if (status === 'Completed') {
        return 'Выполнен'
      } else  if (status === 'Canceled') {
        return 'Отменен'
      } else {
        return 'Неизвестный'
      } 
    },

    select(id: number) {
      this.$router.push(`/orders/${id}`)
    }
  },
})
</script>
