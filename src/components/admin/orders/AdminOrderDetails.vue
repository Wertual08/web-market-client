<template>
  <div class="admin-order-details">
    <table>
      <tr>
        <th>E-Mail</th>
        <th>Телефон</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Адрес</th>
      </tr>
      <tr>
        <td>{{ order.email }}</td>
        <td>{{ order.phone }}</td>
        <td>{{ order.name }}</td>
        <td>{{ order.surname }}</td>
        <td>{{ order.address }}</td>
      </tr>
    </table>


    <p>Коментарий: {{ order.description }}</p>
    <p>Статус: {{ order.formatState() }}</p>
  </div>
</template>


<style scoped>
.admin-order-details {
  text-align: left;

  display: flex;
  flex-direction: column;
  
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;

  color: white;
}

.admin-order-details > table, tr, th, td {
  border-collapse: collapse;
  border: 1px solid #355396;
}

.admin-order-details > .cancel-button {
  width: 120px;
  height: 48px;
  
  margin: 32px 0px;
  
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
}
</style>


<script lang="ts">
import Order from '@/models/order'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'admin-order-details',

  props: {
    order: {
      type: Object as PropType<Order>,
      required: true,
    },
  },

  setup() {
        
  },
})
</script>
