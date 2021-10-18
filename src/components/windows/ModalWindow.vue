<template>
  <div class="modal-background" @click="close" v-show="visible">
    <button type="button" class="btn-close" @click="close">X</button>
    <div class="container" @click.stop>
      <slot/>
    </div>
  </div>
</template>


<style scoped>
.modal-background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 23, 74, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: initial;
}

.container {
  max-width: 100%;
  display: flex;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;

  padding: 10px;
  margin: 10px;

  background: rgba(0, 0, 0, 0.2);
  color: #DDDDDD;
  
  border-radius: 5px;
  border: none;
  
  font-size: 20px;
  font-weight: bold;
  
  cursor: pointer;
}

.btn-close:hover {
  background: rgba(0, 0, 0, 0.3);
  color: #AAAAAA;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'modal-window',
  props: {
    visible: {
      type: Boolean,
      default: true,
    }
  },
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close')
    },
  },
})
</script>