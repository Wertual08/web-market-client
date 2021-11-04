<template>
  <div class="main-navigator">
    <div class="selector">
      <p
        :class="{ item: true, selected: isSelected(index) }" 
        v-for="(section, index) in sections" 
        :key="index"
        @click="select(index)"
      >{{ section.name }}</p>
    </div>
    <div class="content">
      <main-section-card 
        class="card" 
        v-for="section in selectedSections" 
        :key="section.id" 
        :section="section"
        :minPrice="666"
        :productsCount="888"
      />
    </div>
  </div>
</template>


<style scoped>
.main-navigator {
  display: flex;
  flex-direction: column;
}

.main-navigator > .selector {
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  border-bottom: 1px solid #E3ECF3;
}

.main-navigator > .selector > .item {
  height: 48px;

  padding: 0 16px;
  margin: 0;

  font-weight: 600;
  font-size: 16px;

  color: #C3C5CB;

  cursor: pointer;
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;
}

.main-navigator > .selector > .item:hover {
  color: #A3A5AB;
}

.main-navigator > .selector > .selected {
  color: #E04040;
  border-bottom: 2px solid #E04040;
}
.main-navigator > .selector > .selected:hover {
  color: #E04040;
}

.main-navigator > .content {
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.main-navigator > .content > .card {
  width: 292px;
  height: 422px;

  margin: 1px;
}
</style>


<script lang="ts">
import Section from '@/models/section'
import RecordsRepository from '@/repositories/recordsRepository'
import SectionsRepository from '@/repositories/sectionsRepository'
import { defineComponent, PropType } from 'vue'
import MainSectionCard from './MainSectionCard.vue'

export default defineComponent({
  components: { MainSectionCard },
  name: 'main-navigator',
  
  setup() {
    return {
      sectionsRepository: new SectionsRepository()
    }
  },

  data() {
    return {
      selectedIndex: 0,
      sections: [] as Section[],
    }
  },

  mounted() {
    this.sectionsRepository.getSections()
      .then(models => this.sections = models)
  },

  computed: {
    selectedSections(): Section[] {
      if (this.selectedIndex >= 0 && this.selectedIndex < this.sections.length) {
        return this.sections[this.selectedIndex].sections
      } else {
        return []
      }
    }
  },

  methods: {
    isSelected(index: number): boolean {
      return index == this.selectedIndex
    },
    select(index: number): void {
      this.selectedIndex = index
    },
  },

  watch: {
    modelValue(payload: number) {
      this.selectedIndex = payload
    },
    selectedIndex(payload: number) {
      this.$emit('update:modelValue', payload)
    }
  },
})
</script>
