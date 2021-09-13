<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>


<style>
body {
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  max-height: 100%;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(169, 241, 241, 0.377);

  display: flex;
  flex-direction: column;
  overflow: visible;
}

</style>


<script lang="ts">
import { defineComponent } from "vue"
import AppHeader from "@/components/AppHeader.vue"

export default defineComponent({
  components: {
    AppHeader,
  },
});
</script>
