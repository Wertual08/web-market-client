<template>
  <div class="admin-section-card-box">
    <div class="cover">
      <img :src="coverImage"/>
    </div>
    <div class="properties">
      {{ section.id }}: {{ section.name }}
    </div>
  </div>
</template>


<style scoped>
.admin-section-card-box {
  display: flex;
  flex-direction: row;
  max-width: 400px;
  height: 50px;
  background: white;
  border-radius: 3px;
}

.admin-section-card-box:hover {
  box-shadow: 0px 0px 1px 1px cyan;
  background: lightgray;
}

.cover {
  width: 50px;
  height: 50px;

  flex: 0 0 auto;

  display: flex;
  justify-content: center;
  align-content: center;
}

.cover > img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 2px;
}

.properties {
  width: 100%;
  height: 100%;

  margin: 0px 10px;

  text-align: left;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  font-size: 24px;
}
</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Section from '@/models/admin/section'
import RecordsRepository from '@/repositories/recordsRepository'


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
  }
});
</script>