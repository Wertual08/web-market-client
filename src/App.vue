<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>


<style scoped>
#app {
  max-width: 100%;
  max-height: 100%;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(169, 241, 241, 0.377);

  display: flex;
  flex-direction: column;
}

</style>


<script lang="ts">
import { defineComponent } from "vue"
import Header from "@/components/Header.vue"

export default defineComponent({
  components: {
    Header,
  },
});
</script>
