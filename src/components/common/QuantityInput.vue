<template>
  <div class="quantity-input">
    <button class="counter" @click="value--">-</button>
    <input class="field" type="text" v-model="value"/>
    <button class="counter" @click="value++">+</button>
  </div>
</template>


<style scoped>
.quantity-input {
  background: #FAFAFA;
  border-radius: 6px;

  display: flex;
}

.counter {
  width: 31px;
  height: 100%;
  background: none;
  border: none;
  border-radius: 6px;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;

  text-align: center;

  color: #E04040;

  cursor: pointer;
}

.counter:hover {
  background: #00000044;
}

.field:focus,
.field {
  width: 100%;
  height: 100%;

  color: #363F53;

  background: none;
  border: none;
  outline: none;

  text-align: center;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'quantity-input',
  emits: ['update:modelValue'],
  
  props: {
    modelValue: {
      type: Number,
      default: 0,
    }
  },

  data() {
    return {
      value: this.modelValue,
    }
  },

  watch: {
    modelValue(payload: number) {
      this.value = payload
    },
    value(payload: number) {
      this.$emit('update:modelValue', payload)
    },
  }
})
</script>
