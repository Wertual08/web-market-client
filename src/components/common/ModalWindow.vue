<template>
  <div class="modal-background" @click="close" v-show="visible">
    <button type="button" class="btn-close" @click="close">X</button>
    <div @click.stop>
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
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: initial;
}


.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #000000;
  background: transparent;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'modal-window',
  props: ['visible'],
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close')
    },
  },
})
</script>