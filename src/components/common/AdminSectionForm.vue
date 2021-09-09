<template>
  <div id="box">
    <div id="cover">
      <image-form v-model="coverUrl" :default="defaultCoverUrl"/>
    </div>
    <div id="properties">
      {{ localSection.id }}
      <label>Name</label>
      <input v-model="localSection.name">
      <label>Parent section id</label>
      <input type="number" v-model="localSection.sectionId">
      <button @click="$emit('save-section', localSection, coverUrl)">Save</button>
    </div>
  </div>
</template>


<style scoped>
#box {
  display: flex;
}

#cover {
  width: 400pt;
  height: 400pt;
  background: lightgray;
  border-radius: 10pt;
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
import RecordsRepository from '@/repositories/recordsRepository'
import Section from '@/models/admin/section'
import ImageForm from './ImageForm.vue'

export default defineComponent({
  name: 'admin-section-form',

  components: {
    ImageForm,
  },

  emits: ['save-section'],

  props: {
    section: {
      type: Object as PropType<Section>,
    }
  },

  setup() {
    return {
      sectionsRepository: new SectionsRepository(),
      recordsRepository: new RecordsRepository(),
    }
  },

  data() {
    return {
      localSection: new Section(),
      coverUrl: null as string|null,
      defaultCoverUrl: null as string|null,
    }
  },  

  watch: {
    section(section: Section) {
      this.localSection = Object.assign(new Section(), section)
      this.coverUrl = this.recordsRepository.toUrl(section.record?.identifier ?? null)
      this.defaultCoverUrl = this.coverUrl
    }
  },
})
</script>
