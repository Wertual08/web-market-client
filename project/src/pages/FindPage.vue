<template>
  <SearchBar />
  <div>{{ query }}</div>
</template>
<script lang = 'ts'>
import SearchBar from "@/components/UI/SearchBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
      console.log(this.query)
  },

  props: {
    query: {
      type: String,
      default: "",
    },
  },
});
</script>
