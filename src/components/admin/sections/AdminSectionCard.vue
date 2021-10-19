<template>
  <div class="admin-section-card">
    <div class="cover">
      <img :src="coverImage"/>
    </div>
    <div class="properties">
      <p class="name">{{ section.id }}: {{ section.name }}</p>
      <p class="dates">Создано: [{{ createdAt }}] Обновлено: [{{ updatedAt }}]</p> 
    </div>
    <action-button class="delete-button" @click="$emit('delete', section)">Удалить</action-button>
  </div>
</template>


<style scoped>
.admin-section-card {
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.admin-section-card > .cover {
  width: 100px;
  height: 100px;

  flex: 0 0 auto;

  display: flex;
  justify-content: center;
  align-content: center;
}

.admin-section-card > .cover > img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 2px;
}

.admin-section-card > .properties {
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

.admin-section-card > .properties > .name {
  color: white;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 100%;

  cursor: pointer;
}
.admin-section-card > .properties > .name:hover {
  color: #AAAAAA;
}

.admin-section-card > .properties > .dates {
  color: white;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
}

.admin-section-card > .delete-button {
  width: 64px;
  height: 32px;

  background: red;
}
.admin-section-card > .delete-button:hover {
  background: #AA0000;
}
</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Section from '@/models/admin/section'
import RecordsRepository from '@/repositories/recordsRepository'
import { dateToString } from '@/services/datetime'
import ActionButton from '@/components/common/ActionButton.vue';


export default defineComponent({
  components: { ActionButton },
  name: 'admin-section-card',

  emits: ['delete'],

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