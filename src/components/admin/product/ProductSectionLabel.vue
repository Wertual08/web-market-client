<template>
  <p class="product-section-label">
    {{ section.id }}: {{ section.name }}
  </p>
</template>


<style scoped>
.product-section-label {
  background: red;
}
</style>


<script lang="ts">
import Section from '@/models/admin/section'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'product-section-label',

  props: {
    section: {
      type: Object as PropType<Section>,
      required: true,
    } 
  },

  setup() {
        
  },
})
</script>
