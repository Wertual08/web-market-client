<template>
  <div class="catalog-filter">
    <p class="title">Модельный ряд</p>
    <div class="sections-tree">
      <section-entry v-for="section in sections" :key="section.name" :section="section"/>
    </div>
  </div>
</template>


<style scoped>
.catalog-filter {
  width: 100%;

  display: flex;
  flex-direction: column;
}

.catalog-filter > .title {
  padding: 0px;
  margin: 0px;

  color: #C3C5CB;
  
  text-align: left;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 200%;
}

.catalog-filter > .sections-tree {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>


<script lang="ts">
import Section from '@/models/section'
import { defineComponent, PropType } from 'vue'
import SectionEntry from './SectionEntry.vue'

export default defineComponent({
  name: 'catalog-filter',

  components: {
    SectionEntry,
  },

  props: {
    sections: {
      type: Array as PropType<Section[]>,
      required: true,
    }
  },

  setup() {
        
  },
})
</script>
