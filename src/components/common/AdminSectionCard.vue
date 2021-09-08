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
import { defineComponent, PropType } from "vue";
import Section from "@/models/admin/section";

export default defineComponent({
  name: 'admin-section-card',

  emits: ['add-cart'],

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
      if (this.section?.record) {
        return this.section?.record;
      } else {
        return require('@/assets/placeholder.jpg')
      }
    },
  }
});
</script>