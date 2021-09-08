<template>
  <div id="nodes" v-for="section in sections" :key="section.name">
    <admin-section-card :section="section"/>
    <div id="nested-nodes">
      <admin-sections-tree :sections="section.sections"/>
    </div>
  </div>
</template>


<style scoped>
#nodes {
  display: flex;
  flex-direction: column;
}

#nested-nodes {
  padding-left: 20pt;
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
