<template>
  <div id="box">
    {{ localSection.id }}
  </div>
</template>


<style scoped>

</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SectionsRepository from '@/repositories/admin/sectionsRepository'
import Section from '@/models/admin/section'

export default defineComponent({
  name: 'admin-section-form',

  props: {
    section: {
      type: Object as PropType<Section>,
    }
  },

  setup() {
    return {
      sectionsRepository: new SectionsRepository(),
    }
  },

  data() {
    return {
      localSection: new Section(),
    }
  },  

  watch: {
    section(value: Section) {
      this.localSection = value
    }
  },
})
</script>
