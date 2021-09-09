<template>
  <div id="box">
    <div id="node">
      <input type="checkbox" v-model="expanded" :disabled="section.sections.length == 0">
      <admin-section-card :section="section" @click="$emit('selected', section)"/>
    </div>
    <div v-if="expanded">
      <div id="nested-nodes" v-for="section in section.sections" :key="section.name">
        <admin-sections-tree :section="section" @selected="$emit('selected', $event)"/>
      </div>
    </div>
  </div>
</template>


<style scoped>
#box {
  display: flex;
  flex-direction: column;
  padding: 2pt 2pt 0pt 2pt;
}

#node {
  display: flex;
}

#nested-nodes {
  display: flex;
  flex-direction: column;
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
    section: {
      type: Object as PropType<Section>,
      required: true,
    }
  },

  data() {
    return {
      expanded: false,
    }
  },
})
</script>
