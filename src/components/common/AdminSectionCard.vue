<template>
  <div id="box">
    <img id="cover" :src="coverImage"/>
    <div id="properties">
      {{ section.id }}: {{ section.name }}<br>
      Section id: {{ section.sectionId }}<br>
      Created at: {{ section.createdAt }} Updated at: {{ section.updatedAt }}
    </div>
  </div>
</template>


<style scoped>
#box {
  display: flex;
  flex-direction: row;
  width: 500pt;
  height: 50pt;
  background: white;
  border-radius: 3pt;
}

#box:hover {
  box-shadow: 0pt 0pt 1pt 1pt cyan;
  background: lightgray;
}

#cover {
  max-width: 100pt;
  max-height: 100%;
  border-radius: 2pt;
}

#properties {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
}
</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Section from '@/models/admin/section'
import RecordsRepository from '@/repositories/recordsRepository'


export default defineComponent({
  name: 'admin-section-card',

  emits: ['add-cart'],

  setup() {
    return {
      recordsRepository: new RecordsRepository()
    }
  },

  data() {
    return {
    };
  },
  
  mounted() {
  },

  props: {
    section: {
      type: Object as PropType<Section>,
    }
  },

  methods: {
  },

  computed: {
    coverImage(): string {
      let url = this.recordsRepository.toUrl(this.section?.record?.identifier ?? null)
      if (url) {
        return url
      } else {
        return require('@/assets/placeholder.jpg')
      }
    },
  }
});
</script>