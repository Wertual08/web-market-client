<template>
  <input :class="{ input: true, invalid: !valid }" :type="type" :placeholder="placeholder" :value="modelValue" @input="onInput"/>
</template>


<style scoped>
.input {
  box-sizing: border-box;

  color: white;
  background: #355396;
  border-radius: 6px;
  border: none;
}

.input:focus {
  outline: none;
}

.input::placeholder {
  color: #C3C5CB;
}

.input:focus:invalid {
  box-shadow: none;
}

.invalid {
  box-shadow: 0 0 5px 1px red;
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
    valid: {
      type: Boolean,
      default: true,
    }
  },

  data() {
    return {
    }
  },

  methods: {
    onInput(event: Event) {
      let value = (event.target as HTMLInputElement).value
      this.$emit('update:modelValue', value)
    }
  },

  watch: {
    validValue(payload: boolean) {
      this.$emit('update:valid', payload)
    },
  }
})
</script>
