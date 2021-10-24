<template>
  <div class="order-details">
    <p>E-Mail: {{ order.email }}</p>
    <p>Телефон: {{ order.phone }}</p>
    <p>Имя: {{ order.name }}</p>
    <p>Фамилия: {{ order.surname }}</p>
    <p>Адрес: {{ order.address }}</p>
    <p>Коментарий: {{ order.description }}</p>
    <p>Статус: {{ order.formatState() }}</p>

    <action-button class="cancel-button" v-if="order.cancelable()" @click="$emit('cancel')">Отменить</action-button>
  </div>
</template>


<style scoped>
.order-details {
  text-align: left;

  display: flex;
  flex-direction: column;
  
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;

  color: white;
}

.order-details > .cancel-button {
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
import { defineComponent, PropType } from 'vue'
import Order from '@/models/order'
import ActionButton from '../common/ActionButton.vue'

export default defineComponent({
  name: 'order-details',

  components: { ActionButton },

  emits: ['cancel'],

  props: {
    order: {
      type: Object as PropType<Order>,
      required: true,
    }
  },
})
</script>
