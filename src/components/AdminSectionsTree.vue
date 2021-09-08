<template>
  <div id="nodes" v-for="section in sections" :key="section.name">
    <admin-section-card :section="section" @click="$emit('selected', section)"/>
    <div id="nested-nodes">
      <admin-sections-tree :sections="section.sections" @selected="$emit('selected', $event)"/>
    </div>
  </div>
</template>


<style scoped>
#nodes {
  display: flex;
  flex-direction: column;
}

#nested-nodes {
  padding: 2pt 2pt 0pt 20pt;
}

</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Section from '@/models/admin/section'
import AdminSectionCard from './common/AdminSectionCard.vue'

export default defineComponent({
  name: 'admin-sections-tree',

  components: {
    AdminSectionCard,
  },

  emits: ['selected'],

  props: {
    sections: {
      type: Array as PropType<Section[]>,
    }
  },

  setup() {
  },

  data() {
    return {
    }
  }
})
</script>
