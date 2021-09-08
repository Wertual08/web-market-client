<template>
  <div id="box">
    <div id="properties">
      {{ localSection.id }}
      <label>Name</label>
      <input v-model="localSection.name">
      <label>Parent section id</label>
      <input type="number" v-model="localSection.sectionId">
      <button @click="$emit('save-section', localSection)">Save</button>
    </div>
  </div>
</template>


<style scoped>
#box {
  display: flex;
}

#properties {
  display: flex;
  flex-direction: column;
  text-align: left;
}
</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SectionsRepository from '@/repositories/admin/sectionsRepository'
import Section from '@/models/admin/section'

export default defineComponent({
  name: 'admin-section-form',

  emits: ['save-section'],

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
      this.localSection = Object.assign(new Section(), value)
    }
  },
})
</script>
