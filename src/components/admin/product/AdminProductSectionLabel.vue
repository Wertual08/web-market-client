<template>
  <p :class="{ 'admin-product-section-label': true, 'admin-product-section-label-enabled': enabled }" @click="$emit('toggle', section.id)">
    {{ section.id }}: {{ section.name }}
  </p>
</template>


<style scoped>
.admin-product-section-label {
  padding: 2px 4px;
  margin: 4px;
  border-radius: 10px;

  background: #00174A;
  color: white;

  user-select: none;
  cursor: pointer;
}

.admin-product-section-label:hover {
  background: #22396B;
}

.admin-product-section-label-enabled {
  background: #E04040;
}

.admin-product-section-label-enabled:hover {
  background: #A02020;
}
</style>


<script lang="ts">
import Section from '@/models/admin/section'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'admin-product-section-label',

  emits: ['toggle'],

  props: {
    section: {
      type: Object as PropType<Section>,
      required: true,
    },
    enabled: {
      type: Boolean,
      required: true,
    }
  },

  setup() {
        
  },
})
</script>
