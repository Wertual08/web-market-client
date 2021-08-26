<template>
  <div class="box">
    <img class="image" :src="coverImage"/>
    <p class="name">{{ section.name }}</p>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Section from "@/models/admin/section";

export default defineComponent({
  name: 'section-label',

  emits: ['add-cart'],

  data() {
    return {
    };
  },
  
  mounted() {
  },

  props: {
    section: Section
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


<style scoped>
.box {
  width:100%;
  max-height: 16pt;
}

.image {
  float: left;
  max-width: 100%;
  max-height: 100%;
}

.name {

}
</style>