<template>
  <div v-for="section in localSections" :key="section.name">
    <admin-sections-tree/>
  </div>
</template>


<style scoped>

</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Section from '@/models/admin/section'

export default defineComponent({
  name: 'admin-sections-tree',

  props: {
    sections: Array as PropType<Section[]>,
  },

  setup() {
        
  },

  data() {
    return {
      localSections: this.sections,
    }
  }
})
</script>
