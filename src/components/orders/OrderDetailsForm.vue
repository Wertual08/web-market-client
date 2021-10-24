<template>
  <div class="order-details-form">
    <label class="field-label">E-Mail</label>
    <text-input class="field" v-model="order.email" :valid="emailValid"/>
    <label class="field-label">Телефон</label>
    <text-input class="field" v-model="order.phone" :valid="phoneValid"/>
    <label class="field-label">Имя</label>
    <text-input class="field" v-model="order.name" :valid="nameValid"/>
    <label class="field-label">Фамилия</label>
    <text-input class="field" v-model="order.surname" :valid="surnameValid"/>
    <label class="field-label">Адрес</label>
    <text-input class="field" v-model="order.address" :valid="addressValid"/>
    <label class="field-label">Коментарий</label>
    <textarea class="field large-field" v-model="order.description"/>
    <action-button class="submit-button" :disabled="!allValid" @click="$emit('submit')">Оформить заказ</action-button>
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
  height: 144px;

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
  
  margin: 32px 8px;
  
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

  emits: ['submit'],

  props: {
    order: {
      type: Object as PropType<Order>,
      required: true,
    }
  },

  setup() {
    return {
      emailRegExp: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      phoneRegExp: /^\+?\d.*\d{3,}.*\d{3,}.*\d{2,}.*\d{2,}$/i,
      requiredRexExp: /^..*$/i,
    }
  },
  
  data() {
    return {
      valid: false,
    }
  },

  computed: {
    emailValid(): boolean {
      return this.emailRegExp.test(this.order.email)
    },
    phoneValid(): boolean {
      return this.phoneRegExp.test(this.order.phone)
    },
    nameValid(): boolean {
      return this.requiredRexExp.test(this.order.name)
    },
    surnameValid(): boolean {
      return this.requiredRexExp.test(this.order.surname)
    },
    addressValid(): boolean {
      return this.requiredRexExp.test(this.order.address)
    },

    allValid(): boolean {
      return this.emailValid &&
        this.phoneValid &&
        this.nameValid &&
        this.surnameValid &&
        this.addressValid
    }
  }
})
</script>
