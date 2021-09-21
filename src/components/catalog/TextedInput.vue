<template>
  <div class="texted-input">
    <p class="text">place</p>
    <text-input class="field"/>
    <p class="text">holder</p>
  </div>
</template>


<style scoped>
.texted-input {
  box-sizing: border-box;

  color: white;
  background: #355396;
  border-radius: 6px;
  border: none;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.texted-input > .text {
  margin: 0px;
  padding: 0px;

  color: white;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}

.texted-input > .field {
  width: 100%;
  height: 100%;
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
})
</script>
