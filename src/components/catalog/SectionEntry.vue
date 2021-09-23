<template>
  <div class="section-entry">
    <div class="title-box">
      <p :class="titleClass" @click="clickTitle()">{{ section.name }}</p>
      <img src="@/assets/ic_down.svg" v-if="expander" :class="expanderClass" @click="toggleExpanded"/>
    </div>
    <div :class="{ subsections: true, hiden: !expanded }">
      <section-entry 
        v-for="subsection in section.sections" 
        :key="subsection.name" 
        :section="subsection"
        :subsection="true"
        :parent-selected="selected"
        @selection="onChildSelection"
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
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
}

.section-entry > .title-box > .title {
  height: 100%;
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
  height: 15%;

  margin: 10px;
  padding: 0px;

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
import { defineComponent, PropType, watch } from 'vue'

export default defineComponent({
  components: { },
  name: 'section-entry',

  emits: ['selection'],

  props: {
    section: {
      type: Object as PropType<Section>,
      required: true,
    },

    subsection: {
      type: Boolean,
      default: false,
    },

    parentSelected: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      expanded: false,
      selected: false,
      childSelection: false,
    }
  },

  methods: {
    clickTitle() {
      this.selected = !this.selected
      if (this.selected) {
        this.expanded = true
      }
    },
    toggleExpanded() {
      this.expanded = !this.expanded
    },
    onChildSelection(id: number, selected: boolean) {
      if (selected) {
        this.selected = true
      }
      this.$emit('selection', id, selected)
    }
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
  },

  watch: {
    parentSelected(payload: boolean) {
      if (!payload) {
        this.selected = false
      }
    },
    selected(payload: boolean) {
      this.$emit('selection', this.section.id, payload)
    }
  },
})
</script>
