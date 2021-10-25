<template>
  <div class="admin-orders-list">
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
        <td>{{ order.formatState() }}</td>
        <td>{{ order.email }}</td>
        <td>{{ order.phone }}</td>
        <td>{{ order.address }}</td>
      </tr>
    </table>
  </div>
</template>


<style scoped>
.admin-orders-list > .cards {
  width: 100%;

  color: white;
}

.admin-orders-list > table, th, td {
  border-collapse: collapse;
  border: 1px solid #355396;
}

.admin-orders-list > .cards > .card {
  cursor: pointer;
}
.admin-orders-list > .cards > .card:hover {
  background: #355396;
}
</style>


<script lang="ts">
import Order from '@/models/order'
import { defineComponent, PropType } from 'vue'
import { dateToString } from '@/services/datetime'

export default defineComponent({
  name: 'admin-orders-list',

  props: {
    orders: {
      type: Array as PropType<Order[]>,
      required: true,
    }
  },

  setup() {
        
  },

  methods: {
    formatDate(date: number|null): string {
      if (date !== null) {
        return dateToString(date)
      } else {
        return '-'
      }
    },

    select(id: number) {
      this.$router.push(`/admin/orders/${id}`)
    },
  },
})
</script>
