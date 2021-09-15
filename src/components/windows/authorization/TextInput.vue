<template>
  <input class="input" :type="type" :placeholder="placeholder" :value="modelValue" @input="onInput"/>
</template>


<style scoped>
.input {
  height: 48px;
  box-sizing: border-box;
  padding: 16px;

  color: white;
  background: #355396;
  border-radius: 6px;
  border: none;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}

.input:focus {
  outline: none;
}

.input::placeholder {
  color: #C3C5CB;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'text-input',

  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
    },
    modelValue: {
      type: String,
    },
  },

  methods: {
    onInput(event: Event) {
      let target = event.target as HTMLInputElement
      this.$emit('update:modelValue', target.value)
    }
  },

  setup() {
        
  },
})
</script>
