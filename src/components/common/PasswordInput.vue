<template>
  <div :class="{ 'password-input': true, invalid: !valid }">
    <text-input class="password" :type="passwordType" :placeholder="placeholder" v-model="value"/>
    <img class="eye" :src="eyeImage" @click="toggleVisible()"/>
  </div>
</template>


<style scoped>
.password-input {
  background: #355396;
  border-radius: 6px;
  border: none;
  
  display: flex;
  justify-content: center;
  align-items: center;
}

.invalid {
  box-shadow: 0 0 5px 1px red;
}

.password {
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}

.eye {
  width: 24px;
  height: 24px;

  cursor: pointer;
}

.eye:hover {
  filter: brightness(150%);
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import TextInput from './TextInput.vue'

export default defineComponent({
  name: 'password-input',

  components: { TextInput },

  props: {
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
      visible: false,
      value: this.modelValue,
    }
  },

  methods: {
    toggleVisible() {
      this.visible = !this.visible
    },
  },

  watch: {
    modelValue() {
      this.value = this.modelValue ?? ''
    },
    value() {
      this.$emit('update:modelValue', this.value)
    },
  },

  computed: {
    passwordType(): string {
      return this.visible ? 'text' : 'password'
    },
    eyeImage() {
      return  this.visible ? require('@/assets/ic_eye_slash.svg') : require('@/assets/ic_eye.svg')
    }
  }
})
</script>
