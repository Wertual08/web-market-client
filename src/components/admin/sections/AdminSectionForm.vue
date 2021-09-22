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
  width: 100%;
  height: 100%;
  
  display: flex;
  
  box-sizing: border-box;
  padding: 5px;
}

#cover {
  width: 100%;
  height: 100%;
  background: lightgray;
  border-radius: 10px;
}

#properties {
  display: flex;
  flex-direction: column;
  text-align: left;

  margin: 0px 0px 0px 10px;
}
</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SectionsRepository from '@/repositories/admin/sectionsRepository'
import RecordsRepository from '@/repositories/recordsRepository'
import Section from '@/models/admin/section'
import ImageForm from '@/components/common/ImageForm.vue'
import { dateToString } from '@/services/datetime'

export default defineComponent({
  name: 'admin-section-form',

  components: {
    ImageForm,
  },

  emits: ['save-section'],

  props: {
    section: {
      type: Object as PropType<Section>,
      required: true
    }
  },

  setup() {
    return {
      sectionsRepository: new SectionsRepository(),
    }
  },

  data() {
    let url: string|null = RecordsRepository.toUrl(this.section.record?.identifier ?? null)
    return {
      localSection: Object.assign(new Section(), this.section),
      coverUrl: url,
      defaultCoverUrl: url,
    }
  },  

  methods: {
    createdAt(): string {
      return dateToString(this.section.createdAt)
    },

    updatedAt(): string {
      return dateToString(this.section.updatedAt)
    },
  },

  watch: {
    section(section: Section) {
      this.localSection = Object.assign(new Section(), section)
      let url: string|null = RecordsRepository.toUrl(this.section.record?.identifier ?? null)
      this.coverUrl = url
      this.defaultCoverUrl = url
    }
  },
})
</script>
