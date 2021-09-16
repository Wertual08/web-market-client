<template>
  <button class="button" :disabled="disabled"><slot/></button>
</template>


<style scoped>
.button {
  height: 48px;
  box-sizing: border-box;

  color: white;
  background: #E04040;
  border-radius: 6px;
  border: none;

  cursor: pointer;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
}

.button:hover {
  background: #C03535;
}

.button:active {
  background: #A03030;
}

.button:disabled {
  background: gray;
  pointer-events: none;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'submit-button',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    }
  },

  setup() {
        
  },
})
</script>
