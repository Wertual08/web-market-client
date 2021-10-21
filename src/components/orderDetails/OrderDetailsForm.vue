<template>
  <div class="order-details-form">
    <label class="field-label">E-Mail</label>
    <text-input class="field"/>
    <label class="field-label">Телефон</label>
    <text-input class="field"/>
    <label class="field-label">Имя</label>
    <text-input class="field"/>
    <label class="field-label">Фамилия</label>
    <text-input class="field"/>
    <label class="field-label">Адрес</label>
    <text-input class="field"/>
    <label class="field-label">Коментарий</label>
    <textarea class="field large-field"/>
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
</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import TextInput from '@/components/common/TextInput.vue'
import Order from '@/models/order'

export default defineComponent({
  name: 'order-details-form',

  components: { TextInput },

  props: {
    order: {
      type: Object as PropType<Order>,
      required: true,
    }
  },

  setup() {
        
  },
})
</script>
