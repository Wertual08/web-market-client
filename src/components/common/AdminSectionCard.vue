<template>
  <div class="box">
    <img :src="coverImage"/>
    <p>Id: {{ section.id }}</p>
    <p>Section id: {{ section.sectionId }}</p>
    <p>Name: {{ section.name }}</p>
    <p>Created at: {{ section.createdAt }}</p>
    <p>Updated at: {{ section.updatedAt }}</p>
    
    <div v-for="child in section.sections" :key="child.id">
      <admin-section-card :section="child"/>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
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
  display: flex;
  flex-flow: column;
  height: 100%;
}

.product-link {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: inline;
  color: black;
  text-decoration: none;
  text-align: center;
}

.product-name {
  height: 20px;
  margin-top: 1px;
  margin-bottom: 0px;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  text-overflow: ellipsis;
  height: 38px;
  overflow: hidden;
}

.product-description {
  text-overflow: ellipsis;
  height: 38px;
  overflow: hidden;
  margin-top: 10px;
}

.product-image {
  width: 200px;
  height: 100px;
  margin: 10px;
  align-content: center;
  margin-bottom: 0ch;
}

.cart-button {
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden
}

.cart-image {
  max-width: 100%;
  max-height: 100%
}
</style>