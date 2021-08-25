<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Header from "@/components/Header.vue"

export default defineComponent({
  components: {
    Header,
  },
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(169, 241, 241, 0.377);
}

html, body {
}

</style>
