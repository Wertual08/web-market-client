<template>
  <div class="order-details-form">
    <label class="field-label">E-Mail</label>
    <text-input class="field" type="email" v-model="order.email"/>
    <label class="field-label">Телефон</label>
    <text-input class="field" v-model="order.phone"/>
    <label class="field-label">Имя</label>
    <text-input class="field" v-model="order.name"/>
    <label class="field-label">Фамилия</label>
    <text-input class="field" v-model="order.surname"/>
    <label class="field-label">Адрес</label>
    <text-input class="field" v-model="order.address"/>
    <label class="field-label">Коментарий</label>
    <textarea class="field large-field" v-model="order.description"/>
    <action-button class="submit-button">Оформить заказ</action-button>
  </div>
</template>


<style scoped>
.order-details-form {
  text-align: left;

  display: flex;
  flex-direction: column;
}

.order-details-form > .field-label {
  margin: 0px 8px;
}

.order-details-form > .field {
  width: 500px;
  height: 48px;

  margin: 8px;
  padding: 0px 16px;

  box-sizing: border-box;
  
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}

.order-details-form > .large-field {
  padding: 8px 16px;
  
  resize: vertical;

  color: white;
  background: #355396;

  border: none;
  border-radius: 5px;
  
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}
.order-details-form > .large-field:focus {
  border: none;
  outline: none;
}

.order-details-form > .submit-button {
  width: 500px;
  height: 48px;

  margin: 8px;
  
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
}
</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import TextInput from '@/components/common/TextInput.vue'
import Order from '@/models/order'
import ActionButton from '../common/ActionButton.vue'

export default defineComponent({
  name: 'order-details-form',

  components: { TextInput, ActionButton },

  props: {
    order: {
      type: Object as PropType<Order>,
      required: true,
    }
  },

  setup() {
        
  },
  
  data() {
    return {
      valid: false,
    }
  },
})
</script>
