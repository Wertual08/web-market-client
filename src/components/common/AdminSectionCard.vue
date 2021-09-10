<template>
  <div class="admin-section-card-box">
    <img class="cover" :src="coverImage"/>
    <div class="properties">
      {{ section.id }}: {{ section.name }}<br>
      Section id: {{ section.sectionId }}<br>
      Created at: {{ section.createdAt }} Updated at: {{ section.updatedAt }}
    </div>
  </div>
</template>


<style scoped>
.admin-section-card-box {
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 50px;
  background: white;
  border-radius: 3px;
}

.admin-section-card-box:hover {
  box-shadow: 0px 0px 1px 1px cyan;
  background: lightgray;
}

.cover {
  max-width: 100px;
  max-height: 100%;
  border-radius: 2px;
}

.properties {
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