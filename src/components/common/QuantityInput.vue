<template>
  <div :class="{ 'quantity-input': true, invalid }">
    <button class="counter" @click="decrement">-</button>
    <input class="field" type="text" v-model="textValue"/>
    <button class="counter" @click="increment">+</button>
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

.invalid {
  outline: solid rgba(255, 0, 0, 0.5);
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
    },
    min: {
      type: Number,
      requeired: false,
    },
    max: {
      type: Number,
      required: false,
    },
  },

  data() {
    return {
      textValue: '1',
      value: this.modelValue,
      invalid: false,
    }
  },

  methods: {
    increment() {
      if (isNaN(this.value)) {
        this.value = 1
      } else if (!this.max || this.value < this.max) {
        this.value++
      }
    },
    decrement() {
      if (isNaN(this.value)) {
        this.value = 1
      } else if (!this.min || this.value > this.min) {
        this.value--
      }
    },
  },

  watch: {
    textValue(payload: string) {
      const value = +payload
      if (!isNaN(value) && 
        (this.min === undefined || value >= this.min) && 
        (this.max === undefined || value <= this.max)) {
        this.value = value
        this.invalid = false
      } else {
        this.invalid = true
      }
    },
    
    modelValue(payload: number) {
      this.textValue = payload.toString()
      this.value = payload
    },
    value(payload: number) {
      this.$emit('update:modelValue', payload)
    },
  }
})
</script>
