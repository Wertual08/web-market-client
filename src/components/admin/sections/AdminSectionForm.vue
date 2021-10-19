<template>
  <div class="admin-section-form">
    <div class="cover">
      <image-form :image="defaultCoverUrl" @update="updateCoverUrl"/>
    </div>
    <div class="properties">
      <p class="field-label">{{ localSection.id }}</p>
      <label class="field-label">Название</label>
      <input class="field" v-model="localSection.name">
      <label class="field-label">ID родительской секции</label>
      <input class="field" type="number" v-model="localSection.sectionId">
      <action-button class="save-button" @click="$emit('save-section', localSection, coverUrl)">Сохранить</action-button>
    </div>
  </div>
</template>


<style scoped>
.admin-section-form {
  width: 100%;
  height: 100%;
  
  display: flex;
  
  box-sizing: border-box;
  padding: 5px;
}

.admin-section-form > .cover {
  width: 100%;
  height: 100%;
  background: #00174A;
  border-radius: 10px;
}

.admin-section-form > .properties {
  display: flex;
  flex-direction: column;
  text-align: left;

  margin: 0px 0px 0px 10px;
}

.admin-section-form > .properties > .field-label {
  padding: 0;
  margin: 0;

  color: white;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
}

.admin-section-form > .properties > .field {
  max-width: 100%;
  width: 100%;
  
  padding: 8px;
  
  box-sizing: border-box;

  color: white;
  background: #00174A;
  border-radius: 6px;
  border: none;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}
.admin-section-form > .properties > .field:focus {
  outline: none;
}

.admin-section-form > .properties > .save-button {
  margin: 8px 0;
  width: 80px;
  height: 32px;
}
</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SectionsRepository from '@/repositories/admin/sectionsRepository'
import RecordsRepository from '@/repositories/recordsRepository'
import Section from '@/models/admin/section'
import ImageForm from '@/components/common/ImageForm.vue'
import { dateToString } from '@/services/datetime'
import ActionButton from '@/components/common/ActionButton.vue'

export default defineComponent({
  name: 'admin-section-form',

  components: {
    ImageForm,
    ActionButton,
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
      defaultCoverUrl: url,
      coverUrl: url,
    }
  },  

  methods: {
    createdAt(): string {
      return dateToString(this.section.createdAt)
    },

    updatedAt(): string {
      return dateToString(this.section.updatedAt)
    },

    updateCoverUrl(payload: string) {
      this.coverUrl = payload
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
