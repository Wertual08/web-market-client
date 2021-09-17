<template>
  <div class="section-entry">
    <div class="title-box">
      <p :class="titleClass" @click="clickTitle()">{{ section.name }}</p>
      <img src="@/assets/ic_down.svg" v-if="expander" :class="expanderClass" @click="toggle()"/>
    </div>
    <div :class="{ subsections: true, hiden: !expanded }">
      <section-entry 
        v-for="subsection in section.sections" 
        :key="subsection.name" 
        :section="subsection"
        :subsection="true"
      />
    </div>
  </div>
</template>


<style scoped>
.section-entry {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.section-entry > .title-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.section-entry > .title-box > .title {
  margin: 0px;
  padding: 0px;

  color: #C3C5CB;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 200%;

  cursor: pointer;
}

.section-entry > .title-box > .title:hover {
  color: #FFFFFF;
}

.section-entry > .title-box > .selected {
  color: #E04040;
}

.section-entry > .title-box > .selected:hover {
  color: #FF1010;
}

.section-entry > .title-box > .subtitle {
  font-weight: 600;
  font-size: 14px;
  line-height: 180%;
}

.section-entry > .title-box > .expander {
  height: 100%;

  margin: 0px;
  padding: 10px;

  cursor: pointer;
  
  transform: rotate(-90deg);
  transition: all 100ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
}

.section-entry > .title-box > .expander:hover {
  filter: brightness(50%);
}

.section-entry > .title-box > .expanded {
  transform: rotate(0deg);
}

.section-entry > .subsections {
  margin-left: 24px;
  display: flex;
  flex-direction: column;
}

.section-entry > .hiden {
  display: none;
}
</style>


<script lang="ts">
import Section from '@/models/section'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  components: { },
  name: 'section-entry',

  props: {
    section: {
      type: Object as PropType<Section>,
      required: true,
    },

    subsection: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      expanded: false,
      selected: false,
    }
  },

  methods: {
    clickTitle() {
      this.selected = !this.selected
      if (this.selected) {
        this.expanded = true
      }
    },
    toggle() {
      this.expanded = !this.expanded
    },
  },

  computed: {
    titleClass(): object {
      return {
        title: true,
        selected: this.selected,
        subtitle: this.subsection,
      }
    },
    expander(): boolean {
      return this.section.sections.length > 0
    },
    expanderClass(): object {
      return { 
        expander: true, 
        expanded: this.expanded,
      }
    }
  }
})
</script>
