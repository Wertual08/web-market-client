<template>
  <div class="admin-section-card-box">
    <div class="cover">
      <img :src="coverImage"/>
    </div>
    <div class="properties">
      <p class="name">{{ section.id }}: {{ section.name }}</p>
      <p class="dates">Создано: [{{ createdAt }}] Обновлено: [{{ updatedAt }}]</p> 
    </div>
  </div>
</template>


<style scoped>
.admin-section-card-box {
  display: flex;
  flex-direction: row;
  height: 100px;
}

.admin-section-card-box > .cover {
  width: 100px;
  height: 100px;

  flex: 0 0 auto;

  display: flex;
  justify-content: center;
  align-content: center;
}

.admin-section-card-box > .cover > img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 2px;
}

.admin-section-card-box > .properties {
  width: 100%;
  height: 100%;

  padding: 0px 10px;
  box-sizing: border-box;

  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
}

.admin-section-card-box > .properties > .name {
  color: white;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 100%;

  cursor: pointer;
}
.admin-section-card-box > .properties > .name:hover {
  color: #AAAAAA;
}

.admin-section-card-box > .properties > .dates {
  color: white;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
}
</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Section from '@/models/admin/section'
import RecordsRepository from '@/repositories/recordsRepository'
import { dateToString } from '@/services/datetime'


export default defineComponent({
  name: 'admin-section-card',

  emits: ['add-cart'],

  props: {
    section: {
      type: Object as PropType<Section>,
      required: true,
    }
  },

  computed: {
    coverImage(): string {
      let url = RecordsRepository.toUrl(this.section?.record?.identifier ?? null)
      if (url) {
        return url
      } else {
        return require('@/assets/placeholder.jpg')
      }
    },
    createdAt(): string {
      return dateToString(this.section.createdAt)
    },
    updatedAt(): string {
      return dateToString(this.section.updatedAt)
    },
  }
});
</script>