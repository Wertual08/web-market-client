<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'my-button'
})
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  margin: 15px 15px;
}
</style>