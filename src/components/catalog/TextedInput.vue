<template>
  <div class="texted-input">
    <p class="text"><slot name="prefix"/></p>
    <text-input class="field" v-model="value"/>
    <p class="text"><slot name="suffix"/></p>
  </div>
</template>


<style scoped>
.texted-input {
  padding: 0px 8px;

  box-sizing: border-box;

  color: white;
  background: #355396;
  border-radius: 6px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
}

.texted-input > .text {
  margin: 0px;
  padding: 0px;

  color: white;
}

.texted-input > .field {
  width: 100%;
  height: 100%;

  font-style: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import TextInput from '@/components/common/TextInput.vue'

export default defineComponent({
  name: 'texted-input',
  components: { TextInput },

  emits: ['update:modelValue'],

  props: {
    modelValue: {
      type: String,
      default: '',
    }
  },

  setup() {
        
  },

  data() {
    return {
      value: "",
    }
  },

  watch: {
    modelValue(payload: string) {
      this.value = payload
    },
    value(payload: string) {
      this.$emit('update:modelValue', payload)
    },
  }
})
</script>
